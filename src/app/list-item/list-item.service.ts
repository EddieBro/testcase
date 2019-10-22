import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from './shared/item.model';

@Injectable({ providedIn: 'root' })
export class ListItemService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<Item[]> {
    return this.http.get<Item[]>('./assets/data.json');
  }

}
