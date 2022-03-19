import { Component, OnInit } from '@angular/core';
import { HttpsService } from '../service/https.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private httpsService: HttpsService
  ) { }

  ngOnInit(): void {
    this.httpsService.callAPI()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
