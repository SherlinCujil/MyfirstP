import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valor'
})
export class EstadoPipe implements PipeTransform {

  transform(value: number, valor:any[]): string {
    let es: any
    for ( es of valor){
      if (value == es.idestado){
        return es.valor;
      }
    }
    return "no hay informacion";
  }

}
