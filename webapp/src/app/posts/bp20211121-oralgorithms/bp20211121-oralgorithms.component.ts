import { Component, OnInit } from '@angular/core';
import { blogPost } from 'src/app/model/blog';

@Component({
  selector: 'app-bp20211121-oralgorithms',
  templateUrl: './bp20211121-oralgorithms.component.html',
  styleUrls: ['./bp20211121-oralgorithms.component.scss']
})
export class Bp20211121ORAlgorithmsComponent extends blogPost implements OnInit {

  constructor() {
    super();
    this._component = Bp20211121ORAlgorithmsComponent;
    this.id = '2021-11-21-Basic-operations-research-algorithms'
    this.author = "Felix Lindemann";
    this.postDateTime = new Date(2021, 11, 21, 20, 30);
    this.title = "Operations Research - Basic Algorithms";
    this.introduction = 'Operations Research often shortened to the initialism OR, is a discipline that deals ' +
      'with the development and application of advanced analytical methods to improve decision-making. ' +
      'It is sometimes considered to be a subfield of mathematical sciences. ' +
      'With this post I want to give an introduction into models and basic algorithms.';

    this.category = 'Programming';
    this.hasThumbnail = true;
    this.thumbnail = 'assets/images/posts/20211120/angularlogo.png';
    this.tags = ['Angular', 'Operations Research'];

  }
  ngOnInit(): void {
    this.customers = [];
    for (let i = 0; i <= this.n - 1; i++) {
      this.customers = [... this.customers, {
        index: i,
        label: 'K' + (i + 1),
        X: randomIntFromInterval(this.xMin, this.xMax),
        Y: randomIntFromInterval(this.yMin, this.yMax),
        isStartNode: false,
        isWaiting: false
      } as ILocation];
    }
    let r = randomIntFromInterval(0, this.n - 1);
    this.customers[r].isStartNode = true;

    this.initMatrix();

  }

  tsp: string = ' 	\\begin{align*}' +
    '  min f(x) & = \\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^n x_{ij}\\cdot c_{ij}\\\\' +
    '  s.t. & \\nonumber\\\\[1em]' +
    '  \\sum\\limits_{i=1}^n x_{ij} & = 1    & &\\forall~j & \\\\[1em] ' +
    '  \\sum\\limits_{j=1}^n x_{ij} & = 1    & &\\forall~i & \\\\[1em]' +
    '  \\sum\\limits_{i\\in Q}\\sum\\limits_{j\\in Q} x_{ij} & = |Q|-1   \\nonumber  ' +
    '   & &\\forall~ Q\\subset V \\hspace{0.5cm}	& | \\hspace{0.5cm} 2 \\leq |Q| \\leq \\left\\lfloor \\frac{n}{2}\\right\\rfloor  ' +
    '\\end{align*}';

  readonly xMin: number = 0;
  readonly xMax: number = 300;
  readonly yMin: number = 0;
  readonly yMax: number = 100;

  n: number = 10;

  customers: ILocation[] = [];

  X: boolean[][] = new Array(this.n)
    .fill(false)
    .map(() =>
      new Array(this.n).fill(false)
    );

  C: number[][] = new Array(this.n)
    .fill(0)
    .map(() =>
      new Array(this.n).fill(0)
    );

  private initMatrix(): void {
    this.X = new Array(this.n)
      .fill(false)
      .map(() =>
        new Array(this.n).fill(false)
      );
    for (let i = 0; i < this.customers.length - 1; i++) {
      this.C[i][i] = 0;
      for (let j = i + 1; j < this.customers.length; j++) {
        this.C[i][j] = Math.round(Math.sqrt(Math.pow(this.customers[i].X - this.customers[j].X, 2) + Math.pow(this.customers[i].Y - this.customers[j].Y, 2)) * 100) / 100;
        this.C[j][i] = this.C[i][j];
      }
    }
    this.waitingCustomers = this.customers.filter(x => x.isStartNode === false).map(x => x.index);
    this.roundTrip = this.customers.filter(x => x.isStartNode === true).map(x => x.index);
    this.roundTripCost = 0;
  }

  public roundTrip: number[] = [];
  public roundTripCost: number = 0;
  public waitingCustomers: number[] = [];
  public NearestNeighbor(): void {

  }
  public NearestNeighborNextStep(): void {
    if (this.waitingCustomers.length === 0) {
      if (this.roundTrip.length === this.n) {
        let lastCustomer: number = this.roundTrip[this.roundTrip.length - 1];
        let lastCost = this.C[lastCustomer][this.roundTrip[0]];

        this.roundTripCost = this.roundTripCost + lastCost;
        this.roundTrip = [...this.roundTrip, this.roundTrip[0]];
        this.X[lastCustomer][this.roundTrip[0]] = true;
      }
    }
    else {
      let candidate: number = -1;
      let lastCustomer: number = this.roundTrip[this.roundTrip.length - 1];
      let lowestCost = Number.MAX_VALUE;
      this.waitingCustomers.forEach(x => {
        if (this.C[lastCustomer][x ] < lowestCost) {
          candidate = x;
          lowestCost = this.C[lastCustomer][candidate];
        }
      });

      this.roundTripCost = this.roundTripCost + lowestCost;
      this.roundTrip = [...this.roundTrip, candidate];
      this.waitingCustomers = this.waitingCustomers.filter(x => x !== candidate);
      this.X[lastCustomer][candidate] = true;
    }
  }

  get Edges(): IEdge[] {
    let edges: IEdge[] = [];

    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        if (this.X[i][j]) {
          let edge: IEdge = {
            From: i,
            To: j,
            x1: this.customers[i].X,
            y1: this.customers[i].Y,
            x2: this.customers[j].X,
            y2: this.customers[j].Y,
            isSelected: false,
            isWaiting: false,
          }
          edges = [...edges,edge]
        }
      }
    }

    return edges;
  }
}



export function randomIntFromInterval(min: number, max: number): number { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export interface ILocation {

  index: number;
  label: string;
  X: number;
  Y: number;
  isStartNode: boolean;

}

export interface IEdge {

  From: number;
  To: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  isSelected: boolean;
  isWaiting: boolean;

}
