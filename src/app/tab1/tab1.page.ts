import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { IonPickerColumnCustomEvent, PickerColumnChangeEventDetail, PickerColumnValue } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  selectedColor: PickerColumnValue = ""

  message = ""

  @ViewChild(IonModal)
  modal!: IonModal

  constructor() { }

  done() {
    if (this.selectedColor?.toString().trim() !== "") {
      console.info("Done: " + this.selectedColor)
      this.message = ""
      this.modal.dismiss()
    } else {
      this.message = "Please select a color"
    }

  }

  colorChanged($event: IonPickerColumnCustomEvent<PickerColumnChangeEventDetail>) {
    this.selectedColor = $event.detail.value
    this.message = ""
  }

}
