import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataGridComponent } from './data-grid.component';
import { DataGridHeaderComponent } from './data-grid-header/data-grid-header.component';
import { DataGridRowComponent } from './data-grid-row/data-grid-row.component';
import { DataGridColumnComponent } from './data-grid-column/data-grid-column.component';

@NgModule({
    imports: [CommonModule],
    exports: [DataGridComponent],
    declarations: [DataGridComponent, DataGridHeaderComponent, DataGridRowComponent, DataGridColumnComponent],
    providers: [],
})
export class DataGridModule { }
