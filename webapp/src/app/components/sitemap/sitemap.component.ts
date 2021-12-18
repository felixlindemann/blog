import { Component, OnInit } from '@angular/core';
import { blogPost } from 'src/app/model/blog';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {


  Posts: blogPost[] = [];

  CurrentDate: Date = new Date();


  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.Posts = this.service.Posts;
  }

}
