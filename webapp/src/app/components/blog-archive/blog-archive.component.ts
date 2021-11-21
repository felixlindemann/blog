import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { combineLatest, map, Observable, of, skip, switchMap, take } from 'rxjs';
import { BlogDirective } from 'src/app/directives/blog.directive';
import { blogPost, getAge, ITimeDifference, QRY_AUTHOR, QRY_CATEGORY, QRY_TAG, QRY_YEAR } from 'src/app/model/blog';
import { PostsService } from 'src/app/services/posts.service';
import { SEOService } from 'src/app/services/seo.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html',
  styleUrls: ['./blog-archive.component.scss']
})
export class BlogArchiveComponent implements OnInit, OnDestroy {

  @ViewChild(BlogDirective, { static: true }) blogHost!: BlogDirective;
  public readonly PAGESIZE: number = 20;

  private subs = new SubSink();

  get Posts(): blogPost[] {
    return this.service.Posts;
  }
  get Years(): Map<string, number> {
    return this.service.Years;
  }
  get Periods(): Map<string, number> {
    return this.service.Periods;
  }
  get Categories(): Map<string, number> {
    return this.service.Categories;
  }


  CurrentPageIndex: number = 0;
  CurrentYear: number = -1;
  CurrentCategory: string = '';
  CurrentTag: string = '';
  CurrentAuthor: string = '';
  MaxPageIndex: number = 1;
  PostCount: number = 0;

  constructor(private service: PostsService,
    private seo: SEOService,
    private route: ActivatedRoute,
    private router: Router) {

  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.seo.updateMostCommon('Archive of Posts',
      '(Filtered) List of all Posts', '', '', 'Felix Lindemann');

    this.subs.sink =
      combineLatest(
        [this.route.queryParams, this.$FilteredPosts])
        .subscribe(o => {
          const params = o[0];
          const posts: blogPost[] = o[1];



          this.PostCount = posts.length;
          this.MaxPageIndex = Math.floor(this.PostCount / this.PAGESIZE) + 1;
        });

  }



  get TotalPostsCount(): number {
    return this.Posts.length;
  }
  get $FilteredPosts(): Observable<blogPost[]> {
    return this.route.queryParams
      .pipe(
        map(params => {
          this.CurrentCategory = params[QRY_CATEGORY] === undefined ? '' : String(params[QRY_CATEGORY]);
          this.CurrentYear = params[QRY_YEAR] === undefined ? -1 : Number(params[QRY_YEAR]);
          this.CurrentTag = params[QRY_TAG] === undefined ? '' : String(params[QRY_TAG]);
          this.CurrentAuthor = params[QRY_AUTHOR] === undefined ? '' : String(params[QRY_AUTHOR]);
          // TODO extend Filter
          let filtered = this.Posts;

          if(this.CurrentCategory.length> 0){
            filtered = filtered.filter(post=>this.CurrentCategory.localeCompare(String(post.category)) === 0);
          }
          if(this.CurrentTag.length> 0){
            filtered = filtered.filter(post=> post.tags.includes(this.CurrentTag));
          }
          if(this.CurrentAuthor.length> 0){
            filtered = filtered.filter(post=>this.CurrentAuthor.localeCompare(String(post.author)) === 0);
          }
          if(this.CurrentYear > 0){
            filtered = filtered.filter(post=> post.postDateTime.getFullYear() === this.CurrentYear);
          }

          return filtered;
        })
      );
  }

  get $FilteredPostsCount(): Observable<number> {
    return this.$FilteredPosts.pipe(map(x => x.length));
  }

  get $PagedFilteredPosts(): Observable<blogPost[]> {
    return this.$FilteredPosts.pipe(
      skip(this.CurrentPageIndex * this.PAGESIZE),
      take(this.PAGESIZE)
    );
  }

  get $Top10FilteredPosts(): Observable<blogPost[]> {
    return this.$FilteredPosts.pipe(
      take(10)
    );
  }

  getPostAge(post: blogPost): ITimeDifference {
    return getAge(post.postDateTime);
  }
}
