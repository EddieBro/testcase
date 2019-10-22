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
  public itemsFiltered: Item[] = [];
  public itemsMarks: string[] = [];
  public itemsColors: string[] = ['empty', 'empty', 'empty', 'empty'];


  constructor(private itemsService: ListItemService,
              private utils: UtilsService) {
  }

  async ngOnInit() {
    this.itemsData = await this.itemsService.getJSON().toPromise();
    this.itemsData.forEach(item => this.formatItems(item));
    this.itemsFiltered = this.itemsData;
    this.itemsMarks = this.utils.uniqArray(this.itemsMarks);

    this.itemsColors = this.utils.uniqArray(this.itemsColors);

  }

  public filter(filterText) {
    this.filterMark(filterText);
  }

  public formatItems(item: Item) {
    this.itemsMarks.push(item.make);

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

  public filterColor(color) {
    this.itemsFiltered = this.itemsData.filter(element => {
      return element.color === color;
    });
  }

  public filterMark(mark) {
    if (mark === '') {
      return this.itemsFiltered;
    }
    this.itemsFiltered = this.itemsData.filter(element => {
      return element.make === mark;
    });
  }

  public filterClear() {
    this.itemsFiltered = this.itemsData;
  }
}
