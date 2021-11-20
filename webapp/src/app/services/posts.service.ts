import { Injectable } from '@angular/core';
import { blogPost } from '../model/blog';

import posts from '../posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _posts: blogPost[] = [];
  get Posts(): blogPost[] {
    return this._posts;
  }
  set Posts(value: blogPost[]) {
    this._posts = value;
  }


  constructor() {
    if (this.Posts === null || this.Posts.length > 0) this.Posts = [];
    this.Posts = posts
      .map(post => new post())
      .sort((a, b) => a.postDateTime > b.postDateTime ? -1 : 1)
      ;
  }

  get Years(): Map<string, number> {
    let kvp = new Map<string, number>();
    var arr = this.Posts.map(x => '' + x.postDateTime.getFullYear()).sort((a, b) => a.localeCompare(b));
    arr.reduce((acc: any, key: string, i) => { kvp.set(key, (kvp.get(key) || 0) + 1); }, {});
    return kvp;

  }

  get Periods(): Map<string, number> {
    let kvp = new Map<string, number>();
    var arr = this.Posts.map(x => '' + x.postDateTime.getFullYear() + ' - ' + x.postDateTime.getMonth()).sort((a, b) => a.localeCompare(b));
    arr.reduce((acc: any, key: string, i) => { kvp.set(key, (kvp.get(key) || 0) + 1); }, {});
    return kvp;

  }

  get Categories(): Map<string, number> {
    let kvp = new Map<string, number>();
    var arr = this.Posts.map(x => x.category as string).sort((a, b) => a.localeCompare(b));
    arr.reduce((acc: any, key: string, i) => { kvp.set(key, (kvp.get(key) || 0) + 1); }, {});
    return kvp;
  }




}
