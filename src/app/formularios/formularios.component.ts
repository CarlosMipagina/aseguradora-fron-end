import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
	selector: 'app-formularios',
	templateUrl: './formularios.component.html',
	styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {
	user:FormGroup;
	hiadens:boolean;
	constructor( private  formBuilder:FormBuilder ) { 
		this.hiadens=true;
	}

	ngOnInit() {
		/**   Formulario  */
		 this.user=this.formBuilder.group({
			  id:[''],
				firtsName:[ '', [Validators.required,Validators.maxLength(12)]],
				lastName:[ '',[Validators.required,Validators.maxLength(12)] ],
				cellPhone:[	'',[Validators.required,Validators.maxLength(12)],],
				emailAddress:[ '', [Validators.required,Validators.email,Validators.maxLength(200)],]
		 });
		/** Fin formulario  */


	}
	  
	 onSubmit(formusers){
		console.log( formusers.value);
	 }
	 show(){
		this.hiadens=!this.hiadens;
	 }

}
