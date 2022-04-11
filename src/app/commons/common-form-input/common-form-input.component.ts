import { Component, ElementRef, Input, OnInit } from '@angular/core';
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
    if(!parameter.target.value) {
      this.handleError();
    }
  }

  input(parameter: any) {
    let formMessage = this.queryElement("small.form-message");
    let input = this.queryElement(`${this.Id}`);
    if(formMessage.innerText) {
      formMessage.innerText = '';
      this.isError = false;
    }
  }

  queryElement(selector: String) {
    return this.elementRef.nativeElement.querySelector(selector);
  }

  handleError() {
    if(this.FormController.errors) {
      let formMessage = this.queryElement("small.form-message");
      this.isError = true;
      formMessage.innerText = "Vui long nhap truong nay";
    }
  }

}
