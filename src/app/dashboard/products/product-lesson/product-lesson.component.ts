import { Component, OnInit } from '@angular/core';
import { Course, courseInformation } from 'src/app/model/course';

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

  course: Course = new Course();

  constructor() { }

  ngOnInit(): void {
    this.course = !Object.keys(courseInformation.getCourse()).length ? JSON.parse(String(localStorage.getItem('courseCurrent'))) : courseInformation.getCourse()
    console.log(this.course);
  }

  change(i: any) {
    this.toggle = !this.toggle;
  }

}
