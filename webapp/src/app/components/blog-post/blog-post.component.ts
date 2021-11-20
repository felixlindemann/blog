import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class BlogPostComponent implements OnInit, OnDestroy {

  private isLoaded: boolean = false;
  @ViewChild(BlogDirective, { static: false }) appBlog!: BlogDirective

  private subs = new SubSink();

  constructor(
    private service: PostsService,
    private seo: SEOService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  get $CurrentPost(): Observable<blogPost | null | undefined> {
    return this.route.paramMap
      .pipe(

        map(x => {
          const id = x.get('id') || '';
          if (id.length > 0) {
            let posts = this.service.Posts;
            posts = posts.filter(post => post.id.localeCompare(id) === 0)

            if (posts.length === 1) {
              let post = posts[0];
              this.loadComponent(post);
              return post;
            } else {
              return undefined;
            }
          } else {
            return null;
          }
        }),
        map(x => {
          return x;
        })

      );
  }


  private loadComponent(post: blogPost) {
    if (post !== null && this.appBlog !== null && this.appBlog !== undefined && this.appBlog.viewContainerRef !== null && this.appBlog.viewContainerRef !== undefined) {
      if (this.isLoaded === false) {
        setTimeout(() => {
          this.isLoaded = true;
          const viewContainerRef = this.appBlog.viewContainerRef;
          viewContainerRef.clear();
          viewContainerRef.createComponent(post.Component);
        });
        this.seo.updateMostCommon(post.title, post.introduction, post.category, post.tags, post.author);
      }
    }
  }

  getPostAge(post: blogPost): ITimeDifference {
    return getAge(post.postDateTime);
  }
  fontawesomIcon(post: blogPost): string {
    return getIconByCategory(post.category);
  }


}
