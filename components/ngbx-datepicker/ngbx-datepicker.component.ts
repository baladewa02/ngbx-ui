import { Component } from '@angular/core';

@Component({
  selector: 'ngbx-datepicker',
  template: `<div ngbDropdown class="d-inline-block">
      <button class="btn btn-outline-primary" id="dropdownMenu1" ngbDropdownToggle>Toggle dropdown</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <button class="dropdown-item">Action - 1</button>
        <button class="dropdown-item">Another Action</button>
        <button class="dropdown-item">Something else is here</button>
      </div>
    </div>`,
  styleUrls: ['./ngbx-datepicker.component.css']
})

export class NgbxDatepickerComponent {

  constructor() { }

}
