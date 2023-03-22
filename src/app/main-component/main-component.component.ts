import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pluck } from 'rxjs';
import { programDataType } from '../interface/data-type';
import { MyserviceService } from '../services/myservice.service';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  tempData: any = [];
  programsData: object[] = [];
  popupBox = this.myservice.isClicked;
  constructor(private myservice: MyserviceService, private router: Router,) {
  }
  ngOnInit() {
    this.myservice.getProject().pipe(pluck('programs')).subscribe(res => {
      this.tempData = res;
    });
  }

  addData() {
    this.myservice.isClicked.next(true);
    this.myservice.addOrEdit.next(true);
    //  this.popupBox = this.myservice.isClicked;
    console.log(this.popupBox.value);
  }
  editdata(programData: any) {
    this.myservice.formData = programData;
    this.myservice.isClicked.next(true);
    this.myservice.addOrEdit.next(false);

    this.popupBox = this.myservice.isClicked;
  }
  changeStatus(programID: string, data: programDataType, isActive: boolean) {
    this.myservice.changeStatus(programID, data, isActive).subscribe(res => {
      console.log(res);
    })
  }
}
