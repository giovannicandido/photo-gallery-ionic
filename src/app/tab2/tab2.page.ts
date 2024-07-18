import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { DataBaseService } from '../services/database-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, ViewDidEnter {

  loading = false

  cats: Cat[] = []

  constructor(private databaseService: DataBaseService) {
    this.loadCats()
  }

  async loadCats() {
    this.loading = true
    this.cats = await this.databaseService.findAllByKey('cat') as Cat[]
    this.loading = false
    console.debug(this.cats)
  }

  ionViewDidEnter(): void {
    console.info("Navegou para Tab 2")
    this.loadCats()
  }

  ngOnInit(): void {
    console.info("Tab 2 construida")
  }

}

export interface Cat {
  name: string
  color: string
}
