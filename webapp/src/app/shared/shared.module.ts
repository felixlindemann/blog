import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './components/terminal/terminal.component';
import { OsxwindowComponent } from './components/osxwindow/osxwindow.component';
import { OsxbrowserComponent } from './components/osxbrowser/osxbrowser.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GithubGistComponent } from './components/github-gist/github-gist.component';
import { TagCloudComponent } from './components/tag-cloud/tag-cloud.component';
import { RouterModule } from '@angular/router';


const declaredComponents =[
  OsxwindowComponent,
  OsxbrowserComponent,
  TerminalComponent,
  GithubGistComponent,
  TagCloudComponent,
];

const declaredModules =[
  FontAwesomeModule,
  RouterModule
];

@NgModule({
  declarations: [
    ...declaredComponents,
  ],
  imports: [
    CommonModule,
    ...declaredModules
  ],
  exports:[
    ...declaredComponents,
    ...declaredModules
  ]
})
export class SharedModule { }
