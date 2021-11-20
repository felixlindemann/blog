import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './components/terminal/terminal.component';
import { OsxwindowComponent } from './components/osxwindow/osxwindow.component';
import { OsxbrowserComponent } from './components/osxbrowser/osxbrowser.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GithubGistComponent } from './components/github-gist/github-gist.component';


const declaredComponents =[
  OsxwindowComponent,
  OsxbrowserComponent,
  TerminalComponent,
  GithubGistComponent,
];

const declaredModules =[
  FontAwesomeModule
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
