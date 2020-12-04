import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objArr'
})
export class ObjArrPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Object.keys(value) || [];
  }

}
