import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pluck } from 'rxjs';
import { DataType } from '../data-type';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  tempData: any = [];
  programsData: object[] = [];
  btnClicked = this.myservice.showHidePopUpForm;
  constructor(private myservice: MyserviceService, private router: Router) {
  }
  ngOnInit() {
    this.myservice.getProject().pipe(pluck('programs')).subscribe(res => {
      this.tempData = res;
      // console.log(this.tempData);
    });
  }

  addData() {

    this.router.navigate(['/app-popup-form'])
  }
  editdata(programData: any) {
   
    this.myservice.formData = programData
    this.router.navigate(['/app-popup-form'])

  }
  changeStatus(programID: string, data: DataType, isActive: boolean) {
    this.myservice.changeStatus(programID, data, isActive).subscribe()
  }
}
