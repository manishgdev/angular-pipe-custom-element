import {
  Component,
  OnInit, 
  ViewChild, 
  Input, 
  Pipe, 
  PipeTransform
} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'table-sorting-example',
  styleUrls: ['table-sorting-example.css'],
  templateUrl: 'table-sorting-example.html',
})
export class TableSortingExample implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  cName : string = "";
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}




/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

@Component({
  selector: 'my-custom',
  styles: [`
  `],
  template: `
    <font color="{{col}}">{{inNum}}</font>
  `,
})
export class MyCustomComponent implements OnInit {
  @Input()inNum : Number;
  @Input()col : string;

  ngOnInit() {
    console.log("inNum :- "+this.inNum+", color = "+this.col);
  }
}

@Pipe({
  name: 'getColor',
  pure: true
})
export class GetMemberShipLevelPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    return this.getColor(value);
  }
  
  getColor(inNum : Number) : String {
    inNum = Math.floor(inNum);
    console.log("Number :- "+ (inNum < 5));
    if(inNum < 5) {
      console.log("Return black");
      return "black";
    }
    else if(inNum > 5 && inNum < 10) {
      console.log("Return blue");
      return "blue";

    }
    else {
      console.log("Return red");
      return "red";
    }
  }
}