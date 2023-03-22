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
  tempData: any = this.myservice.allPrograms;
  programsData: object[] = [];
  popupBox = this.myservice.isClicked;
  constructor(private myservice: MyserviceService, private router: Router,) {
  }
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.myservice.getProject().pipe(pluck('programs')).subscribe(res => {
      this.tempData = res;
    });
  }

  addData() {
    this.myservice.isClicked.next(true);
    this.myservice.addOrEdit.next(true);
  }
  editdata(programData: any) {
    this.myservice.formData = programData;
    this.myservice.isClicked.next(true);
    this.myservice.addOrEdit.next(false);
    ;
  }

  changeStatus(programData: programDataType) {

    if (confirm('are you sure?')) {
      this.myservice.updateStatus(programData).subscribe(res => {
        this.fetchData();
      })

    }

  }
  deactivateStatus(programData: programDataType) {
    if (confirm('are you sure?')) {
      this.myservice.deactivate(programData).subscribe(res => {
        this.fetchData();
      })

    }
  }
}
