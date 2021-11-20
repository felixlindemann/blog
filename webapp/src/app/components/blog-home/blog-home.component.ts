import { Component, OnInit } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  constructor(private seo:SEOService) { }

  ngOnInit(): void {
    this.seo.updateMostCommon('Blog: Landing Page', 'This Blog is about DIY, Photography, Programming, System-Administration, ...', '','', 'Felix LIndemann');
  }

}
