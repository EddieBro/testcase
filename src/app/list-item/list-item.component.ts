import {Component, OnInit} from '@angular/core';
import {ListItemService} from './list-item.service';
import {Item} from './shared/item.model';
import {UtilsService} from '../core/utils';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})
export class ListItemComponent implements OnInit {

  public itemsData: Item[] = [];
  public itemsModels: string[] = [];
  public itemsColors: string[] = [];

  constructor(private itemsService: ListItemService,
              private utils: UtilsService) {
  }

  async ngOnInit() {
    this.itemsData = await this.itemsService.getJSON().toPromise();
    this.itemsData.forEach(item => this.formatItems(item));

    this.itemsModels = this.utils.uniqArray(this.itemsModels);
    this.itemsColors = this.utils.uniqArray(this.itemsColors);
  }

  public formatItems(item: Item) {
    this.itemsModels.push(item.model);

    if (item.color === 'Fuscia') {
      this.itemsColors.push('Fuchsia');
      return;
    }

    if (item.color === 'Mauv') {
      this.itemsColors.push('Mauve');
      return;
    }

    this.itemsColors.push(item.color);
  }
}