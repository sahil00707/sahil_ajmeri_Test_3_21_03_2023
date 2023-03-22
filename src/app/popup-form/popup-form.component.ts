import { Component, ContentChild, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ApiDataType, programDataType } from '../interface/data-type';
import { MyserviceService } from '../services/myservice.service';
import { MainComponentComponent } from '../main-component/main-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.scss']
})
export class PopupFormComponent implements OnInit {
  addOrEdit = this.myservice.addOrEdit
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
    this.myservice.sendData(myForm).subscribe(res => {
      this.myservice.isClicked.next(false);
      alert('Data Added Successfully');
      this.main.close();

    });
  }
  constructor(private myservice: MyserviceService, private router: Router, private main: MainComponentComponent) {

  }
  ngOnInit() {
    this.editData = this.myservice.formData;
    this.myservice.getProject().subscribe()
  }
  updateData(programID: string, updatedData: programDataType) {

    updatedData.programID = programID;
    this.myservice.updateData(updatedData).subscribe(res => {
      alert('Data Updated Successfully')
      this.main.close();
    });
  }
  close() {
    this.myservice.isClicked.next(false)
  }
}
