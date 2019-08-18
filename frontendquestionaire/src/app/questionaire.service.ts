import { Injectable, asNativeElements } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import {AppConstants} from '../app/app-constants'
@Injectable({
  providedIn: 'root'
})
export class QuestionaireService {
  url :string;
  headers : any;
  constructor(private http: HttpClient) {
  
    this.headers = new HttpHeaders().set('content-type', 'application/json');
    debugger
    this.url = AppConstants.baseURL + AppConstants.apiURL;
  }

   get_questionaire(ans1 = null ,ans2 =null){
        return this.http.post<any>(this.url + 'resp=' + ans1 + '&resp2=' + ans2 ,this.headers);

    }

  }
