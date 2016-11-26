import { NgModule } from '@angular/core';
import { NgbxSelectComponent } from './ngbx-select.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NgbxSelectComponent],
  imports: [NgbModule.forRoot()],
  exports: [NgbxSelectComponent]
})
export class NgbxSelect { }