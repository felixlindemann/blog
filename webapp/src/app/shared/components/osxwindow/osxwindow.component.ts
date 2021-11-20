import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-osxwindow',
  templateUrl: './osxwindow.component.html',
  styleUrls: ['./osxwindow.component.scss']
})
export class OsxwindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

private _darkMode:boolean=false;
get DarkMode():boolean{return this._darkMode;}
@Input()
set DarkMode(value:boolean){ this._darkMode = value;}

  private _coloredButtons: boolean = true;
  public get ColoredButtons(): boolean {
    return this._coloredButtons;
  }
  @Input()
  public set ColoredButtons(value: boolean) {
    this._coloredButtons = value;
  }

}
