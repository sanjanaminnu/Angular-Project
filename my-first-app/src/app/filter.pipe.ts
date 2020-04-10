import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    if (sName === ""){
      return value;
    }

    const userArray:any[]=[];
    for(let i=0;i<=value.length;i++){
      let userName:string =value[i].login;
      if(userName.startsWith(sName)){
          userArray.push(value[i]);
      }
    }
    return userArray;
  }

}
