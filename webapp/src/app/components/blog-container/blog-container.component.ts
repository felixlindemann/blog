import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, filter, first, map, Observable, take } from 'rxjs';
import { BlogDirective } from 'src/app/directives/blog.directive';
import { blogPost, QRY_AUTHOR, QRY_CATEGORY, QRY_TAG, QRY_YEAR } from 'src/app/model/blog';
import { PostsService } from 'src/app/services/posts.service';
import { SEOService } from 'src/app/services/seo.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.scss']
})
export class BlogContainerComponent implements OnInit, OnDestroy {

  private subs = new SubSink();
  constructor(
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
