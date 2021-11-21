import { Component, Input, OnInit } from '@angular/core';
import { IWordCloudItem } from 'src/app/model/blog';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.scss']
})
export class TagCloudComponent implements OnInit {
  public readonly maxFontSizeForTag: number = 4;
  public readonly minFontSizeForTag: number = 0.5;
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  baseUrl: string[] = [];

  private _tags: Map<string, number> = new Map<string, number>();
  public get Tags(): Map<string, number> {
    return this._tags;
  }
  @Input()
  public set Tags(value: Map<string, number>) {
    this._tags = value;
    if (this.Tags !== null && this.Tags.size > 0) {
      this.generateWordCloud();
    }
  }

  private _wordCloudItems: IWordCloudItem[] = [];
  public get WordCloudItems(): IWordCloudItem[] {
    return this._wordCloudItems;

  }
  public set WordCloudItems(value: IWordCloudItem[]) {
    this._wordCloudItems = value;
  }
  private generateWordCloud(): void {
    const maxCount = Math.max(... this._tags.values(), 0);

    this.WordCloudItems = [...this._tags.keys()]
      .map(key => {
        return {
          tag: key,
          count: this._tags.get(key),
          color: '#' + Math.floor(Math.random() * 16777215).toString(16),
          fontsize: this.getFontSize(this._tags.get(key) || 0, maxCount)
        } as IWordCloudItem;
      });
  }

  private getFontSize(count: number, maxCount: number): string {
    let f: number = ((  count / maxCount) * (this.maxFontSizeForTag-this.minFontSizeForTag) + this.minFontSizeForTag);
    return f.toFixed(2) + 'em';
  }


}

