import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, Observable, of } from 'rxjs';
import { BlogCategory, blogPost, getIconByCategory, QRY_CATEGORY } from 'src/app/model/blog';
import { PostsService } from 'src/app/services/posts.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-widget-nav-categories-vertical',
  templateUrl: './widget-nav-categories-vertical.component.html',
  styleUrls: ['./widget-nav-categories-vertical.component.scss']
})
export class WidgetNavCategoriesVerticalComponent implements OnInit, OnDestroy {


  readonly NOPARAM:string = 'NOPARAM-SELECTED';
  private subs = new SubSink();

  showCount: boolean = false;
  get Categories(): Map<string, number> {
    return this.service.Categories;
  }

  get $CurrentCategory(): Observable<string> {
    return this.route.queryParams
      .pipe(
        map(params => params[QRY_CATEGORY] === undefined ? this.NOPARAM : String(params[QRY_CATEGORY]))
      );
  }

  constructor(
    private service: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  IconByCategory(cat: string): string {
    return getIconByCategory(cat);
  }

}
