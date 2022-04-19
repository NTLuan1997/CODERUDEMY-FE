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
  lessonExist: Boolean = true;

  constructor() { }

  ngOnInit(): void {
    if(!Object.values(courseInfor.get()).length) {
      if(localStorage.getItem('courseCurrent')) {
        this.lessonExist = true;
        this.course = JSON.parse(String(localStorage.getItem('courseCurrent')));

      } else {
        this.lessonExist = false;

      }
    } else {
      this.lessonExist = true;
      this.course = courseInfor.get();
    }
  }

}
