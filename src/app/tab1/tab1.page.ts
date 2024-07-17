import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal, ModalController, ToastController } from '@ionic/angular';
import { IonPickerColumnCustomEvent, PickerColumnChangeEventDetail, PickerColumnValue } from '@ionic/core';
import { DataBaseService } from '../services/database-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  selectedColor: PickerColumnValue = ""

  message = ""
  showMessage = false
  toastMessage = ""

  formGroup: FormGroup

  @ViewChild(IonModal)
  modal!: IonModal

  constructor(private fb: FormBuilder,
    private databaseService: DataBaseService,
    private toastController: ToastController
  ) { 
    this.formGroup = fb.group({
      name: ['', Validators.required],
      color: ['', Validators.required]
    })
  }

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
    this.formGroup.controls['color'].setValue(this.selectedColor);
    this.message = ""
  }

  async save() {
    if(this.formGroup.valid) {
      console.info("Saving...")
      console.info(this.formGroup.value)
      await this.databaseService.saveOrUpdate('cat', this.formGroup.value, true);
      this.formGroup.reset()
      this.showSuccessMessage()
    } else {
      this.toastMessage = "Invalid form"
      this.showMessage = true
    }
  }

  async showSuccessMessage() {
    const toast = await this.toastController.create({message: "Cat saved",
      animated: true,
      duration: 5000,
      icon: "bookmark-outline"
    })
    await toast.present()
  }

}
