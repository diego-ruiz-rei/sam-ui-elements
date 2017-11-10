import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'shortDate'
})
export class ShortDatePipe implements PipeTransform {
  public sameDayFormat: string = 'hh:mmA';
  public sameYearFormat: string = 'MMM DD hh:mmA';
  public differentYearFormat: string = 'MMM DD YYYY hh:mmA';

  // fake now is added for testability. It is difficult to test based on the clock of the system.
  transform(dateStr, fakeNow?): string {
    let date = moment(dateStr);
    let now = fakeNow || moment();

    if (date.isSame(now, 'day')) {
      return date.format(this.sameDayFormat);
    }
    if (date.isSame(now, 'year')) {
      return date.format(this.sameYearFormat);
    }
    return date.format(this.differentYearFormat);
  }
}

