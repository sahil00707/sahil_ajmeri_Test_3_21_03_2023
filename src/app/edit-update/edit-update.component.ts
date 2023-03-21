import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-update',
  templateUrl: './edit-update.component.html',
  styleUrls: ['./edit-update.component.scss']
})
export class EditUpdateComponent {
@Input()programId:string='';
}
