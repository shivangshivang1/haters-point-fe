import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'squareroot'
})

export class SquareRootPipe implements PipeTransform{
    transform(value : number):number{
        return Math.sqrt(value)
    }

}