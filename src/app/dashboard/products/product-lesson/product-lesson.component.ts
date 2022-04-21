import { Component, OnInit } from '@angular/core';
import { courseInfor } from 'src/app/model/commons';
import { Course, EndPoint } from 'src/app/model/model';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-product-lesson',
  templateUrl: './product-lesson.component.html',
  styleUrls: ['./product-lesson.component.scss']
})
export class ProductLessonComponent implements OnInit {
  course: Course = new Course();
  courseDetail: any;
  lessonExist: Boolean = true;

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    if(!Object.values(courseInfor.get()).length) {
      if(localStorage.getItem('courseCurrent')) {
        this.lessonExist = true;
        this.course = JSON.parse(String(localStorage.getItem('courseCurrent')));
        this.courseService.coursePost(this.course, EndPoint.course['course-detail'])
        .then((courseDetail) => {
          this.courseDetail = courseDetail;
        })
        .catch((err) => {
          throw err;
        })

      } else {
        this.lessonExist = false;

      }
    } else {
      this.lessonExist = true;
      this.course = courseInfor.get();
    }
  }

}
