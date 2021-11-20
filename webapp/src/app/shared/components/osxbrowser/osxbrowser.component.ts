import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-osxbrowser',
  templateUrl: './osxbrowser.component.html',
  styleUrls: ['./osxbrowser.component.scss']
})
export class OsxbrowserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  private _windowHeight: string = '20rem';
  public get windowHeight(): string {
    return this._windowHeight;
  }
  @Input()
  public set windowHeight(value: string) {
    this._windowHeight = value;
  }

  private _backgroundColor: string = '#1b1b1b';
  public get backgroundColor(): string {
    return this._backgroundColor;
  }
  @Input()
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }

  private _showCloseButton: boolean = true;
  public get showCloseButton(): boolean {
    return this._showCloseButton;
  }
  @Input()
  public set showCloseButton(value: boolean) {
    this._showCloseButton = value;
  }

  private _showMinifyButton: boolean = true;
  public get showMinifyButton(): boolean {
    return this._showMinifyButton;
  }
  @Input()
  public set showMinifyButton(value: boolean) {
    this._showMinifyButton = value;
  }

  private _showexpandButton: boolean = true;
  public get showexpandButton(): boolean {
    return this._showexpandButton;
  }
  @Input()
  public set showexpandButton(value: boolean) {
    this._showexpandButton = value;
  }



  private _showBackButton: boolean = false;
  public get showBackButton(): boolean {
    return this._showBackButton;
  }
  @Input()
  public set showBackButton(value: boolean) {
    this._showBackButton = value;
  }

  private _showNextButton: boolean = false;
  public get showNextButton(): boolean {
    return this._showNextButton;
  }
  @Input()
  public set showNextButton(value: boolean) {
    this._showNextButton = value;
  }

  private _showReloadButton: boolean = false;
  public get showReloadButton(): boolean {
    return this._showReloadButton;
  }
  @Input()
  public set showReloadButton(value: boolean) {
    this._showReloadButton = value;
  }


  private _showHomeButton: boolean = false;
  public get showHomeButton(): boolean {
    return this._showHomeButton;
  }
  @Input()
  public set showHomeButton(value: boolean) {
    this._showHomeButton = value;
  }

  private _showUrl: boolean = false;
  public get showUrl(): boolean {
    return this._showUrl;
  }
  @Input()
  public set showUrl(value: boolean) {
    this._showUrl = value;
  }
  private _url: string = "https://felixlindemann.github.io";
  public get url(): string {
    return this._url;
  }
  @Input()
  public set url(value: string) {
    this._url = value;
  }

  @Output()
  backButtonClicked  = new EventEmitter();

  @Output()
  nextButtonClicked  = new EventEmitter();

  @Output()
  reloadButtonClicked  = new EventEmitter();

  @Output()
  homeButtonClicked  = new EventEmitter();

  @Output()
  closeButtonClicked  = new EventEmitter();

  @Output()
  minifyButtonClicked  = new EventEmitter();

  @Output()
  expandButtonClicked  = new EventEmitter();

}
