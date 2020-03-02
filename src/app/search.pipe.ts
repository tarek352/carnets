import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], Searchtext: string): any {
    if (Searchtext === "" || Searchtext === null || Searchtext === undefined) {
      return value;
    }
    return value.filter(p => p.name.includes(Searchtext));
  }

}
