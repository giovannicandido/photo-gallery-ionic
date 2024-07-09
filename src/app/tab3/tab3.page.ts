import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, ViewDidEnter {

  constructor() {}

  ngOnInit(): void {
    console.info("Tab 3 construida")
  }

  ionViewDidEnter(): void {
    console.info("Navegou para Tab 3")
  }

}
