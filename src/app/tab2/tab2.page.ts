import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, ViewDidEnter {

  constructor() {}

  ionViewDidEnter(): void {
    console.info("Navegou para Tab 2")
  }

  ngOnInit(): void {
    console.info("Tab 2 construida")
  }

}
