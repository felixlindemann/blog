import { Component, OnInit } from '@angular/core';
import { blogPost } from 'src/app/model/blog';

@Component({
  selector: 'app-bp20081207-latex-rooty-helix',
  templateUrl: './bp20081207-latex-rooty-helix.component.html',
  styleUrls: ['./bp20081207-latex-rooty-helix.component.scss']
})
export class Bp20081207LatexRootyHelixComponent extends blogPost implements OnInit {

  constructor() {
    super();
    this._component = Bp20081207LatexRootyHelixComponent;
    this.id = '2008-12-07-latex-rooty-helix'
    this.author = "Felix Lindemann";
    this.postDateTime = new Date(2008, 12, 7, 13, 30);
    this.title = "Draw images with Latex: a rooty helix";
    this.introduction = 'I created this for my grandfathers birthday. A rooty helix is being constructed by using triangles of which one side has the length of 1.';

    this.category = 'LaTeX';
    this.hasThumbnail = true;
    this.thumbnail = 'assets/images/posts/20081207/latex-rooty-helix-logo.png';
    this.tags = ['latex', 'tikz'];

  }
  ngOnInit(): void {

  }


}
