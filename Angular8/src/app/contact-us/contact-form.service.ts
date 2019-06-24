import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpClientModule,HttpClient,HttpHeaders} from '@angular/common/http';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ContactFormService {
  header:any = new HttpHeaders;
  
  constructor(private http: HttpClient) { }
  postReq(req:object){
    //this.header.append('Access-Control-Allow-Origin','*');
    return this.http.post('https://localhost/urlmasking/index.php?r=angularcontact/savecontact',req,this.header);
  }
}
