import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class PopupFormComponent implements OnInit{
  addOrEdit=this.myservice.addOrEdit
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
    this.myservice.sendData(myForm).subscribe();
    setTimeout(() => {
      alert('Data Added Successfully')
      window.location.reload();
    }, 1200);
  }
  constructor(private myservice: MyserviceService, private router: Router) {

  }
  ngOnInit() {
    this.editData = this.myservice.formData;
    this.myservice.getProject().subscribe();
  }
  updateData(programID: string, updatedData: programDataType) {
   const varify = confirm('are you sure you want to edit?')
   if(varify){
    updatedData.programID = programID;
    this.myservice.updateData(updatedData).subscribe(res=>{

    });
    setTimeout(() => {
      alert('Data Updated  Successfully')
      window.location.reload();
    }, 1200);
   }
   else{
    this.myservice.isClicked.next(false);
   }
  }
  close() {
   
    this.myservice.isClicked.next(false);
  }
}
