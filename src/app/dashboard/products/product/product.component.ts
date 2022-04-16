import { Component, OnInit } from '@angular/core';
import { Course, courseInformation } from 'src/app/model/course';
import { HttpsService } from 'src/app/service/https.service';
import { environment } from 'src/environments/environment';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    private httpsService: HttpsService<Course>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.httpsService.callAPI("/API/course/course?limit=5&start=0")
      .then((data: any) => {
        if (data.hasOwnProperty("courses")) {
          if (data?.courses.length) {
            console.log(data?.courses);
            this.courses = data?.courses.map((e: Course) => {
              e.thumbnail = `${environment.urlThumbnail}${e.thumbnail}`;
              return e;
            })
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  redirectCourseLesson(course: Course) {
    courseInformation.setCourse(course);
    this.router.navigate(['/chi-tiet-khoa-hoc']);
  }

}
