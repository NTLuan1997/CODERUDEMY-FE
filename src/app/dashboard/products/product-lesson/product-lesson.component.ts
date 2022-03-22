import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-lesson',
  templateUrl: './product-lesson.component.html',
  styleUrls: ['./product-lesson.component.scss']
})
export class ProductLessonComponent implements OnInit {
  toggle = false;
  chevron = {
    "fa-chevron-down": !this.toggle,
    "fa-chevron-up": this.toggle,
  }

  constructor() { }

  ngOnInit(): void {
  }

  change(i: any) {
    this.toggle = !this.toggle;
  }

}
