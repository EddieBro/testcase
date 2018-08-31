import {Component, Input, OnInit, HostBinding} from '@angular/core';
import {Item} from '../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @HostBinding('attr.class') cssClass = 'item';
  constructor() { }

  ngOnInit() {
  }

}
