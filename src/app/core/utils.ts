import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {

  constructor() {
  }

  public uniqArray(array: any[]) {
    return array.filter((el, i, a) => i === a.indexOf(el));
  }
}
