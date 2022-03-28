import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courseInformation } from 'src/app/model/course';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    courseInformation.getCourse();
  }

}
