import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-widget-tag-cloud',
  templateUrl: './widget-tag-cloud.component.html',
  styleUrls: ['./widget-tag-cloud.component.scss']
})
export class WidgetTagCloudComponent implements OnInit {

  constructor(private service: PostsService) { }

  public get Tags(): Map<string, number>{
    return this.service.Tags;
  }

  ngOnInit(): void {
  }

}
