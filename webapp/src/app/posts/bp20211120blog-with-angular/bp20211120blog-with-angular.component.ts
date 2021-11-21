import { Component, OnInit } from '@angular/core';
import { blogPost } from 'src/app/model/blog';

@Component({
  selector: 'app-bp20211120blog-with-angular',
  templateUrl: './bp20211120blog-with-angular.component.html',
  styleUrls: ['./bp20211120blog-with-angular.component.scss']
})
export class Bp20211120blogWithAngularComponent extends blogPost implements OnInit {

  constructor() {
    super();
    this._component = Bp20211120blogWithAngularComponent;
    this.id = '2021-11-20-blog-with-angular'
    this.author = "Felix Lindemann";
    this.postDateTime = new Date(2021, 11, 20, 13, 30);
    this.title = "How to write a Blog with Angular without a database";
    this.introduction = 'How to create a blog without a post without the need for a database.';

    this.category = 'Programming';
    this.hasThumbnail = true;
    this.thumbnail = 'assets/images/posts/20211120/angularlogo.png';
    this.tags = ['Angular', 'Blog'];

  }
  ngOnInit(): void {

  }


}
