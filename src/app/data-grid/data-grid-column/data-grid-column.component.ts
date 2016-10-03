import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'supre-data-grid-column',
  templateUrl: './data-grid-column.component.html',
  styleUrls: ['./data-grid-column.component.scss']
})
export class DataGridColumnComponent implements OnInit {
  @Input() isCheckbox: boolean = false;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
