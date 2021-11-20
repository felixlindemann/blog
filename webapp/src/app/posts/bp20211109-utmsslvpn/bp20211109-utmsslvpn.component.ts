import { Component, OnInit } from '@angular/core';
import { blogPost } from 'src/app/model/blog';

@Component({
  selector: 'app-bp20211109-utmsslvpn',
  templateUrl: './bp20211109-utmsslvpn.component.html',
  styleUrls: ['./bp20211109-utmsslvpn.component.scss']
})
export class Bp20211109UTMSSLVPNComponent extends blogPost implements OnInit {

  constructor() {
    super();
    this._component = Bp20211109UTMSSLVPNComponent;
    this.id = '2021-11-09-Sophos-SSL-VPN-CHANGE-HOST'
    this.author = "Felix Lindemann";
    this.postDateTime = new Date(2021, 11, 9, 10, 30);
    this.title = "Change Target of SSL-VPN Tunnel on a SOPHOS UTM";
    this.introduction = 'Besides IPSec Sophos UTM (SG-Series) provides SSL-VPN as well. This post describes how one can change the target host.';

    this.category = 'Administration';
    this.hasThumbnail = true;
    this.thumbnail = 'assets/images/posts/20211109/SSLVPNLogo.png';
    this.tags = ['SOPHOS SG-Series', 'SSL-VPN'];

  }

  ngOnInit(): void {

  }
}
