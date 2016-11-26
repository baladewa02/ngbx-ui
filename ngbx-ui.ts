import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgbxSelect } from './components/ngbx-select/ngbx-select.module';
import { NgbxDatepicker } from './components/ngbx-datepicker/ngbx-datepicker.module';

@NgModule({
  exports: [ NgbxSelect, NgbxDatepicker ]
})

export class NgbxModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgbxModule
    }
  }
}