import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Course } from '../model/course';
import { loader } from '../model/loader';

@Injectable({
  providedIn: 'root'
})
export class HttpsService<T> {

  constructor(
    private http: HttpClient
  ) { }

  callAPI(endpoint: String) {
    return new Promise<Course>((resolve, reject) => {
      loader.setLoader(true);
      fetch(`${environment.url}${endpoint}`, {
        "method": "GET",
        headers: {
          "content-type": "application/json"
        }
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          resolve(data);
        })
        .then(() => {
          loader.setLoader(false);
        })
        .catch((err) => {
          reject(err);
        })
    })
  }

  GET(endPoint: String): Observable<T> {
    let url = environment.url + endPoint;
    return this.http.get<T>(url)
      .pipe(map((res) => res))
  }

  POST(endPoint: String, body: T): Observable<T> {
    let url = environment.url + endPoint;
    return this.http.post<T>(url, body)
      .pipe(map((res) => res))
  }

  PUT(endPoint: String, body: T): Observable<T> {
    let url = environment.url + endPoint;
    return this.http.put<T>(url, body)
      .pipe(map((res) => res))
  }
}
