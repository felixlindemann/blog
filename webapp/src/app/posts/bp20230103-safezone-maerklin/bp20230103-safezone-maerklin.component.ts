

import { Component, OnInit } from '@angular/core';



import { blogPost } from 'src/app/model/blog';
@Component({
  selector: 'app-bp20230103-safezone-maerklin',
  templateUrl: './bp20230103-safezone-maerklin.component.html',
  styleUrls: ['./bp20230103-safezone-maerklin.component.scss']
})
export class Bp20230103SafezoneMaerklinComponent extends blogPost implements OnInit {

  constructor() {
    super();
    this._component = Bp20230103SafezoneMaerklinComponent;
    this.id = '2023-01-03-Safe-Zone-Märklin-Trains'
    this.author = "Felix Lindemann";
    this.postDateTime = new Date(2023, 1, 3, 20, 30);
    this.title = "Modell-Trains - Radius-dependent Safe-Zones";
    this.introduction = 'Modeltrains are you usually placed on small areas where one tries ' +
      'to place as many rails as possible. The "Lichtraumprofil" sometimes does not provide enough space ' +
      'to assure a collision free travel - espcially in Schattenbahnhöfen. ' +
      'This post demonstrates a solution to determine safe-zones for long vehicles.';

    this.category = 'Model-Trains';
    this.hasThumbnail = true;
    this.thumbnail = 'assets/images/posts/20230103/safeZoneLogo.png';
    this.tags = ['Model-Trains', 'Märklin', 'Safe Zone', 'Lichtraumprofil'];
  }

  private r: number = 360;
  private l: number = 265;
  private a: number = 185
  private b: number = 35;
  private additionalBuffer: number = 5;
  get AddtionsalBuffer(): number { return this.additionalBuffer; }
  set AddtionsalBuffer(value: number) {
    try {
      if (isNaN(value)) {
        throw new Error("No Value provided");
      }
      if (value > 0) {
        this.additionalBuffer = value;
        return;
      }
      throw new Error("Value must be greater than 0");

    } catch (error) {
      console.error(error);
    }
  }


  get xMin(): number {
    return -this.RSZA- this.ReferenzWaggonWidth / 2;
  }
  get xMax(): number {
    return this.RSZA+ this.ReferenzWaggonWidth / 2;
  }
  get yMin(): number {
    return -this.RSZA - this.ReferenzWaggonWidth / 2;;
  }
  get yMax(): number {
    return 0 + this.ReferenzWaggonWidth / 2;
  }



  get Radius(): number { return this.r; }
  set Radius(value: number) {
    try {
      if (isNaN(value)) {
        throw new Error("No Value provided");
      }
      if (value > 0) {
        this.r = value;
        return;
      }
      throw new Error("Value must be greater than 0");

    } catch (error) {
      console.error(error);
    }
  }

  get ReferenzWaggonLength(): number { return this.l; }
  set ReferenzWaggonLength(value: number) {
    try {
      if (isNaN(value)) {
        throw new Error("No Value provided");
      }
      if (value > 0) {
        this.l = value;
        return;
      }
      throw new Error("Value must be greater than 0");

    } catch (error) {
      console.error(error);
    }
  }

  get ReferenzWaggonWidth(): number { return this.b; }
  set ReferenzWaggonWidth(value: number) {
    try {
      if (isNaN(value)) {
        throw new Error("No Value provided");
      }
      if (value > 0) {
        this.b = value;
        return;
      }
      throw new Error("Value must be greater than 0");

    } catch (error) {
      console.error(error);
    }
  }

  get ReferenzWaggonAchsAbstand(): number { return this.a; }
  set ReferenzWaggonAchsAbstand(value: number) {
    try {
      if (isNaN(value)) {
        throw new Error("No Value provided");
      }
      if (value > 0) {
        this.a = value;
        return;
      }
      throw new Error("Value must be greater than 0");

    } catch (error) {
      console.error(error);
    }
  }

  get Alpha(): number {
    try {
      const alpha = Math.acos(this.ReferenzWaggonAchsAbstand / (2 * this.Radius));
      return alpha;
    } catch (error) {
      console.error(error);
      return NaN;
    }
  }
  get RSZI(): number {
    try {
      const rszi = this.Radius * Math.sin(this.Alpha) - (this.ReferenzWaggonWidth / 2);
      return rszi;
    } catch (error) {
      console.error(error);
      return NaN;
    }

  }

  get RSZA(): number {
    try {
      const rsza = Math.sqrt(Math.pow(this.RSZI + this.ReferenzWaggonWidth, 2) +
        Math.pow(this.ReferenzWaggonLength / 2, 2));
      return rsza;
    } catch (error) {
      console.error(error);
      return NaN;
    }

  }

  get PointsAchse(): ILocation[] {

    // achse links
    let result: ILocation[] = [];

    result = [...result, {
      X: -this.ReferenzWaggonAchsAbstand / 2,
      Y: this.RSZI + this.ReferenzWaggonWidth / 2
    } as ILocation];
    result = [...result, {
      X: this.ReferenzWaggonAchsAbstand / 2,
      Y: this.RSZI + this.ReferenzWaggonWidth / 2
    } as ILocation];

    return result;


  }

  get PointWaggon(): ILocation {

    // achse links
    let result: ILocation = {
      X: -this.ReferenzWaggonLength / 2,
      Y: this.RSZI // +  this.ReferenzWaggonWidth /2
    } as ILocation;
    // console.log(result);

    return result;


  }

get Formula():string{

  let f: string = ' 	\\begin{align}' +
  '  l & : \\text{cabin length} \\nonumber   \\\\' +
  '  b & : \\text{cabin width} \\nonumber   \\\\' +
  '  a & : \\text{cabin axis-distance} \\nonumber   \\\\' +
  '  R_{SZi} & : \\text{Radius inner Safe Zone} (cyan)\\nonumber   \\\\' +
  '  R_{SZo} & : \\text{Radius outer Safe Zone} (purple)\\nonumber   \\\\' +

  '  R  & : \\text{Radius of track curve} \\nonumber   \\\\' +
  '  \\alpha  & : \\text{angle between x-axis and cabin anchor (cyan)} \\nonumber   \\\\' +

  '  \\alpha & = \\arccos(\\frac{a}{2 \\cdot R})\\\\' +
  ' R_{SZi} & = R\\cdot\\sin(\\alpha) - \\frac{b}{2}\\\\' +

  ' R_{SZo} & = \\sqrt{(R_{SZi} + b)^2 + (\\frac{l}{2})^2}' +
    '\\end{align}';
    return f;
}


  ngOnInit(): void {
  }



}

export interface ILocation {

  X: number;
  Y: number;

}
