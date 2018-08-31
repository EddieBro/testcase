import {Component, Input, OnInit, HostBinding} from '@angular/core';
import {Item} from '../shared/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor() {
  }

  ngOnInit() {
  }

}
