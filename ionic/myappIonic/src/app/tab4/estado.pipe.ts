import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: number, estado:any[]): string {
    let es: any
    for ( es of estado){
      if (value == es.idestado){
        return es.valor;
      }
    }
    return "no se encuentra dato";
  }

}
