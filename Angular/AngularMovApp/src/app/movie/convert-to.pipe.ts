import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToChar'
})

export class ConverttoCharPipe implements PipeTransform{
   transform(value: string, character:string):string {
       return value.replace(character, '*');
   } 
}

