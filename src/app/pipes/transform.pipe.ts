import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {
  transform(value: any, args: any) {
    if(value) {
      if(args == 'Type') {
        value = this.Type(value);
      }

      if(args == "Date") {
        value = this.Date(value);
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

  Date(value: any): any {
    let convertDate = new Date(value);
    return convertDate.toLocaleString();
  }

}
