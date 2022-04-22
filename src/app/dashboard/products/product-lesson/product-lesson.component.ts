import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(Object.values(courseInfor.get()).length) {
        this.getCourse();

    } else {
      if(localStorage.getItem("Course")) {
        courseInfor.set(JSON.parse(String(localStorage.getItem("Course"))));
        this.getCourse();
        
      } else {
        this.lessonExist = false;
      }
    }
  }

  getCourse() {
    this.lessonExist = true;
    this.course = courseInfor.get();
    this.courseService.coursePost(this.course, EndPoint.course['course-detail'])
    .then((courseDetail) => {
      localStorage.setItem("Unit", JSON.stringify(courseDetail));
      this.courseDetail = courseDetail;
    })
    .catch((err) => {
      throw err;
    })
  }

  navigationLesson(lesson: any) {
    localStorage.setItem("Lesson", JSON.stringify(lesson));
    this.router.navigate(['/chi-tiet-khoa-hoc/noi-dung']);
  }

}
