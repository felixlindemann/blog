import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBlog]'
})
export class BlogDirective {


  constructor(public viewContainerRef: ViewContainerRef) { }
}
