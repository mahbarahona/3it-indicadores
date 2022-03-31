import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceChar'
})
export class ReplaceCharPipe implements PipeTransform {

  transform(value: string, charToReplace:string,newChar:string=' '): string {
    return value?.replace( charToReplace,newChar)
  }

}
