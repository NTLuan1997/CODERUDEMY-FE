import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-form-input',
  templateUrl: './common-form-input.component.html',
  styleUrls: ['./common-form-input.component.scss']
})
export class CommonFormInputComponent implements OnInit {
  @Input("Label") Label: String | undefined;
  @Input("FormController") FormController: FormControl | any;
  @Input("Placeholder") Placeholder: String | undefined;
  @Input("Id") Id : String | undefined;
  @Input("Type") Type: String | undefined;
  @Input("Submit") Submit: Boolean | any;

  @Output() InputChanged: EventEmitter<any> = new EventEmitter<any>();
  isError: boolean = false;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void { }

  ngDoCheck(): void {
    if(this.Submit) {
      this.handleError();
    }
  }

  blur(parameter: any) {
    if(this.FormController.errors) {
      this.handleError();
    }
  }

  input(parameter: any) {
    let formMessage = this.queryElement("small.form-message");
    if(formMessage.innerText) {
      formMessage.innerText = '';
      this.isError = false;
    }

    this.InputChanged.emit(parameter.target.value);
  }

  queryElement(selector: String) {
    return this.elementRef.nativeElement.querySelector(selector);
  }

  handleError() {
    if(this.FormController.errors) {
      let formMessage = this.queryElement("small.form-message");
      this.isError = true;
      formMessage.innerText = this.FormController.errors.message;
    }
  }

}
