import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BlogDirective } from './directives/blog.directive';
import { BlogArchiveComponent } from './components/blog-archive/blog-archive.component';

import   posts from './posts';
import { BlogContainerComponent } from './components/blog-container/blog-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { WidgetNavCategoriesVerticalComponent } from './components/widget-nav-categories-vertical/widget-nav-categories-vertical.component';
import { AboutComponent } from './components/about/about.component';
import { BlogArchiveContainerComponent } from './components/blog-archive-container/blog-archive-container.component';
import { WidgetTagCloudComponent } from './components/widget-tag-cloud/widget-tag-cloud.component';
import { WidgetGithubGistComponent } from './components/widget-github-gist/widget-github-gist.component';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyContainerComponent } from './components/empty-container/empty-container.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';

import { MathjaxModule } from 'mathjax-angular';
import { RootMathjaxConfig } from 'mathjax-angular/models';

export const mathJxConfig :RootMathjaxConfig = {
  "config": {
    "loader": {
      "load": ["output/svg", "[tex]/require", "[tex]/ams" ]
    },
    "tex": {
      "inlineMath": [['$', '$'], ['\\(', '\\)']],
      "extensions": ["AMSmath.js", "AMSsymbols.js"],
      "packages": ["base", "require","displaymath", "ams","amsmath"]
    },
    "svg": { "fontCache": "global" }
  },
  "src": "https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/startup.js"
};

@NgModule({
  declarations: [
    AppComponent,
    ...posts,
    BlogDirective,
    BlogArchiveComponent,
    BlogContainerComponent,
    HomeComponent,
    BlogHomeComponent,
    BlogPostComponent,
    SidebarLeftComponent,
    WidgetNavCategoriesVerticalComponent,
    AboutComponent,
    BlogArchiveContainerComponent,
    WidgetTagCloudComponent,
    WidgetGithubGistComponent,
    EmptyContainerComponent,
    SitemapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    MathjaxModule.forRoot(  )
  ],
  providers: [
    {provide:APP_BASE_HREF, useValue:'/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
