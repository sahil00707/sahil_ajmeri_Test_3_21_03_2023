import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiDataType, programDataType } from '../interface/data-type';
import { BehaviorSubject, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  isClicked = new BehaviorSubject<boolean>(false)
  addOrEdit = new BehaviorSubject<boolean>(false)
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
  constructor(private http: HttpClient) { }

  getProject() {
    return this.http.get<ApiDataType<programDataType[]>>('http://cmi-ofm.azurewebsites.net/api/Program')
  }

  sendData(programData: programDataType) {
    const formObject = new FormData();
    Object.keys(programData).forEach((key) =>
      formObject.append(key, (programData as any)[key])
    );
    return this.http.post('http://cmi-ofm.azurewebsites.net/api/program', formObject)
  }

  updateData(programData: programDataType) {
    const formObject = new FormData();
    Object.keys(programData).forEach((key) =>
      formObject.append(key, (programData as any)[key])
    );
    return this.http.put(`http://cmi-ofm.azurewebsites.net/api/program`, formObject)
  }



  updateStatus(programData: programDataType) {
    const formObject = new FormData();
    formObject.append('programID', programData.programID)
    return this.http.put(`http://cmi-ofm.azurewebsites.net/api/Program/${programData.programID}/Activate`, formObject)
  }

  deactivate(programData: programDataType) {

    return this.http.delete(`http://cmi-ofm.azurewebsites.net/api/Program/${programData.programID}`)
  }

}
