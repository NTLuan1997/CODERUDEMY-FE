import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/model';
import { courseInfor } from 'src/app/model/commons';
import { TransformPipe } from 'src/app/pipes/transform.pipe';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  course: Course = new Course();
  lesson: any;
  
  constructor(
      
  ) { }

  ngOnInit(): void {
    this.lesson = JSON.parse(String(localStorage.getItem('lesson'))) || undefined;
    let url = `${environment.urlThumbnail}${this.lesson.thumbnail.replace('img', 'course')}`;
    this.lesson.thumbnail = url;
  }

}
