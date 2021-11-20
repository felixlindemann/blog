import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-github-gist',
  templateUrl: './widget-github-gist.component.html',
  styleUrls: ['./widget-github-gist.component.scss']
})
export class WidgetGithubGistComponent implements OnInit {

@Input()gistId:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
