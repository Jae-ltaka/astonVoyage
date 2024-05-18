import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value || !value.includes(':')) {
      return value;
    }

    const [hours, minutes] = value.split(':');

    return `${hours}h${minutes}`;
  }

}