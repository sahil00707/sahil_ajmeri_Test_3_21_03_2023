import { Component } from '@angular/core';
import { pluck } from 'rxjs';
import { DataType, DataType2 } from '../data-type';
import { MyserviceService } from '../myservice.service';
import { MainComponentComponent } from '../main-component/main-component.component';
@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.scss']
})
export class PopupFormComponent {
  editData: DataType = {
    programBudget: 0,
    programDescription: '',
    programName: '',
    programNumber: '',
    isVirtual: false,
    programID: '',
    isActive: false,
    canDelete: false

  }
  sendData(myForm: DataType) {
    this.myservice.sendData(myForm)

  }
  constructor(private myservice: MyserviceService) {

  }
  ngOnInit() {
    this.editData = this.myservice.formData;
    console.log(this.editData);

    this.myservice.getProject().subscribe(res => {

      console.log(res);
    });
  }
  updateData(programID: string, updatedData: DataType2) {
    updatedData.programID=programID;
    // console.log(programID);
    this.myservice.updateData(programID, updatedData).subscribe()
  }

}
