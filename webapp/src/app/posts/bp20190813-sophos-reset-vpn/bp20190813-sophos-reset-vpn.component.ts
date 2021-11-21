import { Component, OnInit } from '@angular/core';
import { blogPost } from 'src/app/model/blog';

@Component({
  selector: 'app-bp20190813-sophos-reset-vpn',
  templateUrl: './bp20190813-sophos-reset-vpn.component.html',
  styleUrls: ['./bp20190813-sophos-reset-vpn.component.scss']
})
export class Bp20190813SophosResetVPNComponent extends blogPost implements OnInit {

  constructor() {
    super();
    this._component = Bp20190813SophosResetVPNComponent;
    this.id = '2019-08-13-Sophos-Reset-VPN'
    this.author = "Felix Lindemann";
    this.postDateTime = new Date(2019, 8, 13, 13, 30);
    this.title = "Reset IPSec-VPN Tunnel on a SOPHOS UTM by Powershell";
    this.introduction = 'Documentation on how to restart IPSec VPNs using the SOPHOS UTM API from a POWERSHELL script';

    this.category = 'Administration';
    this.hasThumbnail = true;
    this.thumbnail = 'assets/images/posts/20190813/sophos-utm-reset-ipsec.png';
    this.tags = ['SOPHOS','SG-Series', 'POWERSHELL', 'IPSEC', 'UTM-API'];

  }

  ngOnInit(): void {

  }
}
