import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courseInfor } from 'src/app/model/commons';
import { Course, EndPoint } from 'src/app/model/model';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-product-lesson',
  templateUrl: './product-lesson.component.html',
  styleUrls: ['./product-lesson.component.scss']
})
export class ProductLessonComponent implements OnInit, AfterViewInit {
  course: Course = new Course();
  courseDetail: any;
  lesson: Number = 0;
  lessonExist: Boolean = true;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

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
    this.course = courseInfor.get();
    this.courseService.coursePost(this.course, EndPoint.course['course-detail'])
    .then((courseDetail: any) => {
      if(!courseDetail.course.units.length) {
        this.lessonExist = false;

      } else {
        this.lesson = courseDetail.course.units[0].lessons.length;
        this.lessonExist = true;
        this.courseDetail = courseDetail.course;

      }
    })
    .catch((err) => {
      throw err;
    })
  }

  collapse(parameter: any) {
    if(parameter.target.parentElement.firstElementChild.classList.contains("fa-chevron-down")) {
      parameter.target.parentElement.firstElementChild.classList.remove("fa-chevron-down");
      parameter.target.parentElement.firstElementChild.classList.add("fa-chevron-up");
      parameter.target.parentElement.parentElement.lastElementChild.classList.add('lesson-close');

    } else {
      parameter.target.parentElement.firstElementChild.classList.remove("fa-chevron-up");
      parameter.target.parentElement.firstElementChild.classList.add("fa-chevron-down");
      parameter.target.parentElement.parentElement.lastElementChild.classList.remove('lesson-close');

    }
  }

  ngAfterViewInit() {
    this.getCourse();
  }

  navigationLesson(lesson: any) {
    localStorage.setItem("Lesson", JSON.stringify(lesson));
    this.router.navigate(['/chi-tiet-khoa-hoc/noi-dung']);
  }

}
