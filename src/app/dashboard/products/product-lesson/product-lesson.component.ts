import { Component, OnInit } from '@angular/core';
import { courseInfor } from 'src/app/model/course';
import { Course } from 'src/app/model/model';

@Component({
  selector: 'app-product-lesson',
  templateUrl: './product-lesson.component.html',
  styleUrls: ['./product-lesson.component.scss']
})
export class ProductLessonComponent implements OnInit {
  course: Course = new Course();

  constructor() { }

  ngOnInit(): void {
    console.log(courseInfor.get());
    if(!Object.values(courseInfor.get()).length) {
      if(localStorage.getItem('courseCurrent')) {
        this.course = JSON.parse(String(localStorage.getItem('courseCurrent')));
      }
    } else {
      this.course = courseInfor.get();
    }
  }

}
