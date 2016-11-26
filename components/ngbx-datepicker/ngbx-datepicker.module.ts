import { NgModule } from '@angular/core';
import { NgbxDatepickerComponent } from './ngbx-datepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NgbxDatepickerComponent],
  imports: [NgbModule.forRoot()],
  exports: [NgbxDatepickerComponent]
})
export class NgbxDatepicker { }