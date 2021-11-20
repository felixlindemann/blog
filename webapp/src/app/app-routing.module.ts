import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogArchiveContainerComponent } from './components/blog-archive-container/blog-archive-container.component';
import { BlogArchiveComponent } from './components/blog-archive/blog-archive.component';
import { BlogContainerComponent } from './components/blog-container/blog-container.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { EmptyContainerComponent } from './components/empty-container/empty-container.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path: '',
    component: BlogContainerComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'home', component: BlogHomeComponent },
      {
        path: 'blog', component: EmptyContainerComponent, children: [
          {
            path: 'archive', component: BlogArchiveContainerComponent, children: [
              { path: '', redirectTo: 'archive', pathMatch: 'full' },
              { path: '**', component: BlogArchiveComponent }]
          },
          { path: 'posts/:id', component: BlogPostComponent },
          { path: 'posts', redirectTo: '/blog/archive', pathMatch: 'full' },
          { path: '', redirectTo: '/blog/archive', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
