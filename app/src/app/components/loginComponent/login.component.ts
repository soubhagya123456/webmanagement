/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder,FormGroup,Validators,FormsModule,NgForm,FormArray} from '@angular/forms';
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
    selector: 'bh-login',
    templateUrl: './login.template.html'
})

export class loginComponent extends NBaseComponent implements OnInit {
     regi :FormsModule;
  first:string='';
  last:string='';
  email:string='';
  phone:number=0;

    mm: ModelMethods;

    constructor(private bdms: NDataModelService,private fb : FormBuilder) {
          super();
        this.mm = new ModelMethods(bdms);

       this.regi = fb.group({
      'first':[null,Validators.required],
      'last':[null,Validators.required],
      'email':[null,Validators.compose([Validators.required,Validators.email])],
     

      'phone':[null,Validators.compose([Validators.required,Validators.pattern(/^[6-9]\d{9}$/)])],

      'date':[null,Validators.required]
  });

      
    }

    ngOnInit() {

    }

    onform(form:NgForm){
    console.log(form);
  }

}
