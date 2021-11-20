import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-github-gist',
  templateUrl: './github-gist.component.html',
  styleUrls: ['./github-gist.component.scss'],

  encapsulation: ViewEncapsulation.None
})
export class GithubGistComponent implements AfterViewInit {
  @ViewChild('iframe')  iframe!: ElementRef;
  @Input() gistId:string ='';

  constructor() { }


  ngAfterViewInit() {
    // let fileName = (this.file) ? this.file : '';
    this.iframe.nativeElement.id = 'gist-' + this.gistId;
    let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
      let content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body style="{height:350px}" onload="parent.document.getElementById('${this.iframe.nativeElement.id}')">
        <script type="text/javascript" src="https://gist.github.com/${this.gistId}.js"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }
  resizeIframe( ) {
    if(this.iframe === undefined || this.iframe === null){ return;}
    if(this.iframe.nativeElement === undefined || this.iframe.nativeElement === null){ return;}
    let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;

   let height= doc.body.scrollHeight + 'px';
    console.log(height);
    this.iframe.nativeElement.style.height  = height;
  }

}
