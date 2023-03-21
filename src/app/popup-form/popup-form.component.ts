import { Component } from '@angular/core';
import { pluck } from 'rxjs';
import { ApiDataType, programDataType } from '../interface/data-type';
import { MyserviceService } from '../services/myservice.service';
import { MainComponentComponent } from '../main-component/main-component.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.scss']
})
export class PopupFormComponent {
  editData: programDataType = {
    programBudget: 0,
    programDescription: '',
    programName: '',
    programNumber: '',
    isVirtual: false,
    programID: '',
    isActive: false,
    canDelete: false

  }
  sendData(myForm: programDataType) {
    this.myservice.sendData(myForm).subscribe()
    // window.location.reload()

  }
  constructor(private myservice: MyserviceService, private router: Router) {

  }
  ngOnInit() {
    this.editData = this.myservice.formData;
    this.myservice.getProject().subscribe();
  }
  updateData(programID: string, updatedData: programDataType) {
    updatedData.programID = programID;
    this.myservice.updateData(updatedData).subscribe();
    this.router.navigate([this.router.url])
  }
  close() {
    this.editData = {
      programBudget: 0,
      programDescription: '',
      programName: '',
      programNumber: '',
      isVirtual: false,
      programID: '',
      isActive: false,
      canDelete: false

    }
    this.myservice.isClicked.next(false);

  }
}
