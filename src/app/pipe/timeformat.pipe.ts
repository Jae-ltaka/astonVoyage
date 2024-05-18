import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeformatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const [hour, minutes] = value.split(':')
    return hour + 'h' + minutes
  }

}
