import { Component, OnInit } from '@angular/core';
import { loader } from 'src/app/model/loader';

@Component({
  selector: 'app-common-loader',
  templateUrl: './common-loader.component.html',
  styleUrls: ['./common-loader.component.scss']
})
export class CommonLoaderComponent implements OnInit {
  loader: Boolean = false;
  constructor() { }

  ngDoCheck() {
    this.loader = loader.getLoader();
  }

  ngOnInit(): void {
  }

}
