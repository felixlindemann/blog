import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BlogDirective } from 'src/app/directives/blog.directive';
import { blogPost, getAge, getIconByCategory, ITimeDifference } from 'src/app/model/blog';
import { PostsService } from 'src/app/services/posts.service';
import { SEOService } from 'src/app/services/seo.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, OnDestroy, AfterViewInit {

  private subs = new SubSink();

  private oldId: string = '';
  private _post: blogPost = new blogPost();

  private _appBlog!: BlogDirective;
  private _viewContainerRef!: ViewContainerRef

  @ViewChild(BlogDirective, { static: false })
  set appBlog(value: BlogDirective) {
    if (!!value) {
      this._appBlog = value;
      this._viewContainerRef = this._appBlog.viewContainerRef;
      this.loadComponent();
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  get isLoaded(): boolean {
    return (this.post.id.localeCompare(this.oldId) === 0);
  }

  public get post(): blogPost {
    return this._post;
  }
  public set post(value: blogPost) {
    this._post = value;
    this.loadComponent();
  }


  constructor(
    private service: PostsService,
    private seo: SEOService,
    private route: ActivatedRoute) {

  }
  ngAfterViewInit(): void {
    if (this.post === null || this.post.id.length === 0) {
      this.loadComponent();
    }
  }

  ngOnInit() {
    this.subs.sink = this.route.paramMap
      .subscribe(x => this.setPostFromParamMap(x));

    this.loadComponent();
  }

  private setPostFromParamMap(x: ParamMap): void {
    const id = x.get('id') || '';
    if (id.length > 0) {
      let posts = this.service.Posts;
      posts = posts.filter(post => post.id.localeCompare(id) === 0)

      if (posts.length === 1) {
        let post = posts[0];
        this.post = post;
      } else {
        console.log("post not found");

      }
    } else {
      console.log("search parameter not found");

    }
  }




  loadComponent() {
    if (this.post !== null && this.post.id.length > 0 && this._viewContainerRef !== null && this._viewContainerRef !== undefined) {
      setTimeout(() => {



        if (this.isLoaded === false) {

          this._viewContainerRef.clear();
          this._viewContainerRef.createComponent(this.post.Component);
          this.oldId = this.post.id;
        }
      });
      this.seo.updateMostCommon(this.post.title, this.post.introduction, this.post.category, this.post.tags, this.post.author);

    }
  }

  getPostAge(post: blogPost): ITimeDifference {
    return getAge(post.postDateTime);
  }
  fontawesomIcon(post: blogPost): string {
    return getIconByCategory(post.category);
  }


}
