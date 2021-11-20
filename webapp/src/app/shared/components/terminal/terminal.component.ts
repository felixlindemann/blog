import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private relLanguage:string = "bash";

  get RelLanguage(): string{
    return this.relLanguage;
  };
  @Input()
  set RelLanguage(value :string){
    this.relLanguage = value;
  }
  private terminalOneLiner:string = "Code here";

  get TerminalOneLiner(): string{
    return this.terminalOneLiner;
  };
  @Input()
  set TerminalOneLiner(value :string){
    this.terminalOneLiner = value;
  }
}
