import { Component, OnInit } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private seo:SEOService) { }

  ngOnInit(): void {
    this.seo.updateMostCommon('Blog: About Page', '', '','', 'Felix LIndemann');
  }

}
