import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/model';
import { courseInfor } from 'src/app/model/course';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  course: Course = new Course();
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.course = !Object.keys(courseInfor.get()).length ? JSON.parse(String(localStorage.getItem('courseCurrent'))) : courseInfor.get();
  }

}
