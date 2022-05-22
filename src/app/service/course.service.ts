import { Injectable } from '@angular/core';
import { Course } from '../model/model';
import { HttpsService } from './https.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private service: HttpsService<any>
  ) { }
  
  // COURSES
  courseGet(endPoint: string, limit?: number, start?: number) {
    let url = (limit && start) ? `${endPoint}?${limit}&${start}` : endPoint;
    return new Promise((resolve, reject) => {
      this.service.GET(null, url)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }

  coursePost(course: Course, endPoint: string) {
    return new Promise((resolve, reject) => {
      this.service.POST(null, course, endPoint)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }

  //UNITS
  // unitGet()

}
