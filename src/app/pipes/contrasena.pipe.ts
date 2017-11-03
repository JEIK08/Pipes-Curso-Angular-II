import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, mostrar: boolean = true): string {
    if(!mostrar){
    	let pass = ' ';
    	for(let i in value){
    		pass += '*';
    	}
    	return pass;
    }
    return value;
  }

}
