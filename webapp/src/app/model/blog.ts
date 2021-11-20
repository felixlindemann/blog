import { Component, Type } from "@angular/core";
import { BlogDirective } from "../directives/blog.directive";


@Component({
  selector: 'app-blogPost',
  template: `
    <div class="col">
      <h3>abstract Blog post</h3>
      <p>this is the dummy page - you should see the actual post.</p>
    </div>
  `
})
export class blogPost {

  protected _component: Type<any> = blogPost;
  get Component(): Type<any> {
    return this._component;
  }
  private _category: BlogCategory = 'N/A';
  public get category(): BlogCategory {
    return this._category;
  }
  public set category(value: BlogCategory) {
    this._category = value;
  }

  private _id: string = '';
  get id(): string { return this._id; }
  set id(value: string) { this._id = value; }


  private _introduction: string = '';
  get introduction(): string { return this._introduction; }
  set introduction(value: string) { this._introduction = value; }

  private _hasThumbnail: boolean = false;
  get hasThumbnail(): boolean { return this._hasThumbnail; }
  set hasThumbnail(value: boolean) { this._hasThumbnail = value; }

  private _thumbnail: string = '';
  get thumbnail(): string { return this._thumbnail; }
  set thumbnail(value: string) { this._thumbnail = value; }


  private _tags: string[] = [];
  public get tags(): string[] {
    return this._tags;
  }
  public set tags(value: string[]) {
    this._tags = value;
  }

  private _author: string = '';
  get author(): string { return this._author; }
  set author(value: string) { this._author = value; }

  private _postDateTime: Date = new Date(1900, 1, 1, 0, 0, 0);
  get postDateTime(): Date { return this._postDateTime; }
  set postDateTime(value: Date) { this._postDateTime = value; }

  private _title: string = '';
  get title(): string { return this._title; }
  set title(value: string) { this._title = value; }



  private get CategorieColors(): Map<BlogCategory, string> {
    let map = new Map<BlogCategory, string>();
    map.set('N/A', 'text-danger');
    map.set('Administration', 'text-primary');
    map.set('Photographie', 'text-success');
    map.set('Programming', 'text-secondary');
    map.set('Project', 'text-warning');
    map.set('Link', 'text-info');
    return map;
  }

  get CategorieIcons(): Map<BlogCategory, string> {
    let map = new Map<BlogCategory, string>();
    map.set('N/A', 'fas fa-exclamation-triangle');
    map.set('Administration', 'fas fa-toolbox');
    map.set('Photographie', 'fas fa-camera');
    map.set('Programming', 'fas fa-code');
    map.set('Project', 'fas fa-project-diagram');
    map.set('Link', 'fas fa-link');
    return map;
  }

  get ColorByCategory(): string {
    return this.CategorieColors.get(this.category) || '';
  }




}

export type BlogCategory = 'N/A' | 'Administration' | 'Photographie' | 'Programming' | 'Project' | 'Link';

export function getIconByCategory(cat: string): string {
  var component = new blogPost();
  return component.CategorieIcons.get(cat as BlogCategory) || '';

}

export const QRY_CATEGORY: string = "category";
export const QRY_YEAR: string = "year";
export const QRY_TAG: string = "tag";
export const QRY_AUTHOR: string = "author";

export interface ITimeDifference {
  day: number;
  hour: number;
  minute: number;
  second: number;

}

export interface IGroupCount {
  name: string;
  count: number;
}
export interface ICategoryGroupCount extends IGroupCount {
  fontawesomeIcon: string;
}
export function getDataDiff(startDate: Date, endDate: Date): ITimeDifference {
  var diff = endDate.getTime() - startDate.getTime();
  var days = Math.floor(diff / (60 * 60 * 24 * 1000));
  var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
  var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
  var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
  return { day: days, hour: hours, minute: minutes, second: seconds } as ITimeDifference;
}
export function getAge(startDate: Date): ITimeDifference {
  let endDate: Date = new Date();

  return getDataDiff(startDate, endDate);
}
