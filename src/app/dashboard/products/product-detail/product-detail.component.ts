import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/model';
import { courseInfor } from 'src/app/model/commons';
import { TransformPipe } from 'src/app/pipes/transform.pipe';

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
  }

}
