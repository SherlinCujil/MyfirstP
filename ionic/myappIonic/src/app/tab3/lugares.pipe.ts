import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class LugaresPipe implements PipeTransform {

  transform(value: number, nombre:any[]): string {
    let lug: any
    for ( lug of nombre){
      if (value == lug.idlugar){
        return lug.nombre;
      }
    }
    return "no se encuentra datos";
  }

}
