import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from "@angular/router";
import { Course, EndPoint } from 'src/app/model/model';
import { courseInfor } from 'src/app/model/commons';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  courses: Course[] = [];
  courseExit: Boolean = false;

  constructor(
    private courseService: CourseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // this.courseService.courseGet(EndPoint.course['course-common'], 5, 0)
    //   .then((data: any) => {
    //     if (data.hasOwnProperty("courses")) {
    //       if (data?.courses.length) {
    //         this.courseExit = true;
    //         this.courses = data?.courses.map((e: Course) => {
    //           e.thumbnail = `${environment.urlThumbnail}${e.thumbnail}`;
    //           return e;
    //         })
    //       } else {
    //         this.courseExit = false;
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     this.courseExit = false;
    //     throw err;
    //   })
    this.courseExit = true;
    let course = JSON.parse(String(localStorage.getItem('courseCurrent')));
    course.thumbnail = '../../../../assets/img/product/course_00.jpg';
    this.courses = [course];
  }

  redirectCourseLesson(course: Course) {
    courseInfor.set(course);
    this.router.navigate(['/chi-tiet-khoa-hoc']);
  }

}
