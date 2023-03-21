import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiDataType, programDataType } from '../interface/data-type';
import { BehaviorSubject, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  isClicked=new BehaviorSubject<boolean>(false)
  addOrEdit=new BehaviorSubject<boolean>(false)
  formData = {
    programBudget: 0,
    programDescription: '',
    programName: '',
    programNumber: '',
    isVirtual: false,
    programID: '',
    isActive: false,
    canDelete: false
  }
  allPrograms = new BehaviorSubject<programDataType[]>([]);
  tempData: programDataType[] = [];
  constructor(private http: HttpClient) { }

  getProject() {
    return this.http.get<ApiDataType<programDataType[]>>('http://cmi-ofm.azurewebsites.net/api/Program').pipe(
      map((res) => {
        this.tempData = res.programs
        this.allPrograms.next(res.programs);
        return res;
      })
    );
  }


  sendData(programData: programDataType) {
    const formObject = new FormData();
    Object.keys(programData).forEach((key) =>
      formObject.append(key, (programData as any)[key])
    );
    return this.http.post('http://cmi-ofm.azurewebsites.net/api/program', formObject).pipe(map((res) => {
      if (res) {
        this.tempData.push(programData);
        this.allPrograms.next(this.tempData);
      }
      return res;
    }),)
  }



  updateData(programData: programDataType) {
    const formObject = new FormData();
    Object.keys(programData).forEach((key) =>
      formObject.append(key, (programData as any)[key])
    );
    return this.http.put(`http://cmi-ofm.azurewebsites.net/api/program`, formObject).pipe(
      map((res) => {
        if (res) {
          const data1 = this.allPrograms.getValue();
          const data2: programDataType[] = [];
          data1.forEach((data) => {
            if (data.programID === programData.programID) {
              data2.push(data)
            }
            else {
              data2.push(programData)
            }
          });
          this.allPrograms.next(data2);

        }
      })


    )
  }

  changeStatus(programID: string, data: programDataType, isActive: boolean) {
    data.isActive = isActive
    return this.http.put(`http://cmi-ofm.azurewebsites.net/api/program/${programID}/Activate`, data)
  }

}
