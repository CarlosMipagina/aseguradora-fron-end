import { NgModule } from '@angular/core';
import {
	MatButtonModule, 
	MatCheckboxModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule
} from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule

	],
	exports:[
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule
	],
	declarations: []
})
export class MaterialComponentModule { }
