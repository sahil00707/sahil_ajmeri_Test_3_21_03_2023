import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
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
  temp: any;
  popupBox = this.myservice.isClicked;
  @ViewChild('grid') grid: GridComponent | undefined
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
  close() {
    this.myservice.getProject().subscribe(res => {
      this.temp = res;
      this.tempData = this.temp.programs;
    });
    this.grid?.refresh();
    this.myservice.isClicked.next(false);
  }

}
