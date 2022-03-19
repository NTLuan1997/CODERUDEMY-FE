import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { HttpsService } from 'src/app/service/https.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    private httpsService: HttpsService
  ) { }

  ngOnInit(): void {
    this.httpsService.callAPI()
      .then((data: any) => {
        if (data.hasOwnProperty("courses")) {
          this.courses = data?.courses.map((e: Course) => {
            e.thumbnail = `${environment.urlThumbnail}${e.thumbnail}`;
            return e;
          })
          console.log(this.courses);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
