import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const result = [];
    if(value!=null){
      for(const obj of value){
        if(obj.identificacion.indexOf(arg) > -1 ){
          result.push(obj);
        }
      }
    }
    
    return result;
  }

}
