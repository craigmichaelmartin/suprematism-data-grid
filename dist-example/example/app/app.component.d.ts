import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as Rx from 'rxjs';
export interface IHeader {
    parent: string[];
    child: string[];
}
export declare class AppComponent implements OnInit {
    private http;
    dataSource: Rx.Observable<string[][]>;
    headerDataSource: Rx.Observable<IHeader[]>;
    dataGridLayoutSource: string;
    rowSubjects: Rx.Subject<any>[];
    constructor(http: Http);
    ngOnInit(): void;
    handleHoverEvent(mouseEvent: {
        event: MouseEvent;
    }, index: number): void;
}
