import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {
  transform(value: any, args: any) {
    console.log(args);
    if(value) {
      if(args == 'Type') {
        value = this.Type(value);
      }
    }
    return value;
  }

  Type(value: String): any {
    if(value == 'FE') {
      return 'Font-End';
    }

    if(value == 'BE') {
      return 'Back-End';
    }
  }

}
