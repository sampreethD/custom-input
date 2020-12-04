import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputwrapComponent } from '../inputwrap/inputwrap.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})


export class LayoutComponent implements OnInit {
  employeeForm: FormGroup;

  formValidationMessage = {
    name: {
      disp: 'name',
      required: 'name error'
    },
    email: {
      disp: 'email',
      required: 'Email error'
    },
    username: {
      disp: 'username',
      required: 'username error'
    },
    areaType: {
      disp: 'areaType',
      required: 'areaType error'
    },
    street: {
      disp: 'street',
      required: 'street error'
    },
    suite: {
      disp: 'suite',
      required: 'suite error'
    },
    city: {
      disp: 'city',
      required: 'city error'
    },
    zipcode: {
      disp: 'zipcode',
      required: 'zipcode error'
    },
    phone: {
      disp: 'phone',
      required: 'phone error'
    },
    website: {
      disp: 'website',
      required: 'website error'
    }
  };


  @ViewChild('inputWrap', { static: true }) inputwrap: InputwrapComponent;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this._initializeForm();
  }

  private _initializeForm() {
    this.employeeForm = this.formbuilder.group({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      areaType: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      street: new FormControl('', [Validators.required, Validators.pattern(/.*[a-zA-Z0-9]{3}/)]),// Validators.pattern(/^[0-9].*/)]), validation removed as per requirment change from deon & pete
      suite: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      website: new FormControl(''),
    });
  }

  public func() {
    if (!this.employeeForm.valid) {
      return false;
    }
  }

}
