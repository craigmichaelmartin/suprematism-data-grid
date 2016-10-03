import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'supre-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  public dataSource: Rx.Observable<string[][]>;
  constructor() { }

  ngOnInit() {
    this.dataSource = Rx.Observable.range(1, 20)
      .map(value => Array(7).fill('test'))
      .toArray();

  }

}
