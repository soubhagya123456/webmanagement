/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,ViewChild } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

 /**
 * 
 * Serivice Designer import Example - Service Name - HeroService
 * import { HeroService } from 'app/sd-services/HeroService';
 */

@Component({
    selector: 'bh-table',
    templateUrl: './table.template.html'
})

export class tableComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;


     displayedColumns: string[] = ['first', 'last', 'age', 'phone','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(private bdms: NDataModelService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
}
    export interface PeriodicElement {
  first: string;
  last: string;
  age: number;
  phone: number;
}

   const ELEMENT_DATA: PeriodicElement[] = [
  {first:'soubhagya', last: 'swain', age: 25, phone: '954783929'},
  {first: 'suman', last: 'mohanty', age: 26, phone: '912334432'},
  {first: 'saurabh', last: 'patel', age: 27, phone: '937564475'},
  

   ];
