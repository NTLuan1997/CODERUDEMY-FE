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

  GET(endPoint: String): Observable<any> {
    let url = environment.url + endPoint;
    return this.http.get<any>(url)
      .pipe(
        map((res) => res),
        catchError((err) => err)
      )
  }

  // POST(endPoint: String, body: any): Observable<any> {
  //   let url = environment.url + endPoint;
  //   return this.http.post<any>(url, body)
  //     .pipe(
  //       map((res) => res)
  //       // catchError((err) => err)
  //     )
  // }

  POST(endPoint: string, body: any): Promise<any> {
    let url = environment.url + endPoint;
    return  new Promise((resolve, reject) => {
      fetch(url, { 
        "method": 'POST',
        "headers": {
          "content-type": 'application/json'
        },
        "body": JSON.stringify(body)
      })
      .then((data) => {
        resolve(data.json());
      })
      .catch((err) => {
        reject(err);
      })
    })
  }

  PUT(endPoint: String, body: any): Observable<any> {
    let url = environment.url + endPoint;
    return this.http.put<any>(url, body)
      .pipe(
        map((res) => res),
        catchError((err) => err)
      )
  }
}
