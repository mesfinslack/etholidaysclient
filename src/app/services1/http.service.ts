import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpService {
  baseUrl: string = "https://certmicroservices.ethiopianairlines.com";
  token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIiwianRpIjoiZDVjYjU3NjItODFkZC00MGViLWEzZjUtYWU4Y2Q2MTllNjQ2IiwiaWF0IjoxNTQ3MDEyNjcwLCJuYmYiOjE1NDcwMTI2NjksImV4cCI6MTU0OTYwNDY2OSwiaXNzIjoiQmFja2VuZCIsImF1ZCI6IkNvbnN1bWVyVXNlciJ9.ybkxe1kmMgpCKL_9DfayQ7OcjGLXPXJT7j0q8yJoAZA";
  header: any;
  constructor(private _http: Http) { }
  headerConfig() {
    debugger;
    var token = this.token;
    debugger;
    this.header = new Headers();
    this.header.append('Authorization', 'Bearer ' + token);
    //this.header.append('isDevelopment', 'true');
    this.header.append('Content-Type', 'application/json');
    this.header.append('Accept', 'application/json');
    return this.header;
  }
  postService(relativePath: string, data: any) {
    debugger;
    var header = this.headerConfig();
    return this._http.post(this.baseUrl + relativePath, data, { headers: header });
  }
  postServiceWithLang(relativePath: string, data: any, lang: string) {
    debugger;
    var header = this.headerConfig();
    header.append('Accept-Language', lang);
    return this._http.post(this.baseUrl + relativePath, data, { headers: header });
  }

  getService(relativePath: string) {
    debugger;
    var header = this.headerConfig();
    return this._http.get(this.baseUrl + relativePath, { headers: header });
  }
  
  post(url: string, data: any) {
    debugger;
    return this._http.post(url, data, { headers: this.header });
  }

}
