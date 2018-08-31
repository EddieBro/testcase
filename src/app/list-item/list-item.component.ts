import { Component, OnInit } from '@angular/core';
import {ItemsService} from './items.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})
export class ListItemComponent implements OnInit {
  public itemsData;
  public itemsModels;
  public itemsColors;
  constructor(
    private itemsService: ItemsService,
    ) { }

  ngOnInit() {
    this.itemsService.getJSON().subscribe(data => {
      this.itemsData = data;
      let modelsArr = [];
      let modelsColors = [];
      data.forEach(function (e) {
        modelsArr.push(e['model']);
        if (e['color'] === 'Fuscia') {
          modelsColors.push('Fuchsia');
        } else if (e['color'] === 'Mauv') {
          modelsColors.push('Mauve');
        } else {
          modelsColors.push(e['color']);
        }

      });
      modelsArr = modelsArr.filter((el, i, a) => i === a.indexOf(el));
      modelsColors = modelsColors.filter((el, i, a) => i === a.indexOf(el));
      this.itemsModels = modelsArr;
      this.itemsColors = modelsColors;
    });

  }
}
