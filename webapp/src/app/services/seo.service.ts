import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  constructor(private title: Title, private meta: Meta) { }

  updateMostCommon(title:string, description:string, category:string, tags:string | string[], author:string){
    this.updateTitle (title);
    this.updateDescription(description);
    this.meta.updateTag({ name: 'author', content: author });
    this.meta.updateTag({ name: 'keywords', content: [category, ...tags].join(',') });


  }

  setRobotsTo(){
    this.meta.updateTag({name:'robots', content:''})
  }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({ name: 'og:url', content: url })
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }
}

export type ROBOT_BEHAVIOR = 'all'| 'index' |  'index,follow' | 'noindex' | 'noindex,follow' | 'noindex,nofollow' | 'none' | 'noarchive' | 'nosnippet'  | 'max-snippet';

