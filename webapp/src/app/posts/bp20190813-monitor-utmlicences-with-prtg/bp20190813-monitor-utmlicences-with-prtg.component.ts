import { Component, OnInit } from '@angular/core';
import { blogPost } from 'src/app/model/blog';

@Component({
  selector: 'app-bp20190813-monitor-utmlicences-with-prtg',
  templateUrl: './bp20190813-monitor-utmlicences-with-prtg.component.html',
  styleUrls: ['./bp20190813-monitor-utmlicences-with-prtg.component.scss']
})
export class Bp20190813MonitorUTMLicencesWithPRTGComponent  extends blogPost implements OnInit{



  constructor() { super();
    this._component = Bp20190813MonitorUTMLicencesWithPRTGComponent;
  this.author = "Felix Lindemann";
  this.postDateTime = new Date(2019,8,13,13,30);
  this.title ="PRTG - get Licence(s) from Sophos UTM (SG-Series)";
  this.introduction = 'Monitor the lifetime of Sophos Licences (SG-Series) with PRTG';
  this.id = '2019-08-13-Sophos-PRTG-Monitor-Licences'

  this.category = 'Administration';
  this.hasThumbnail = true;
  this.thumbnail = 'assets/images/posts/20190813/sophos-utm-sensort-prtg.png';
  this.tags = ['SOPHOS SG-Series', 'POWERSHELL', 'PRTG', 'UTM-API'];

  }

   ngOnInit(): void {

  }
}
