import { Calculator } from  './Calculator';

describe('Test  for Calculator',()=>{

	describe('Test for multiply',()=>{
		 it('return a  integer',()=>{
			 //arranque
			 let  calculator =  new Calculator();
			 let  result =  calculator.multiply(3,3);
			  expect(result).toEqual(9);

		 });
	})//fin multiply
});