import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';


@Component({
  selector: 'app-inputwrap',
  templateUrl: './inputwrap.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputwrapComponent),
      multi: true
    }
  ]
})
export class InputwrapComponent implements ControlValueAccessor {
  @Input() type : string;
  @Input() label: string = null;
  @Input() err: string;
  @Input() validation: string;

  public form = new FormControl('',[Validators.required]);

  constructor() { }

  private onChange: (name: string) => void;
  private onTouched: () => void;
  
  writeValue(obj: any): void {
    const firstName = obj;
    this.form.setValue(firstName);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean = false): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  doInput() {
    this.onChange(this.form.value);
  }

  doBlur() {
    this.onTouched();
  }

}
