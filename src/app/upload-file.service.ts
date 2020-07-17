import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }
pushFileToStorage(file: File):Observable<HttpEvent<{}>>{
 // pushFileToStorage(id:number,file: File): Observable<any> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8080/api/course/uploadFile', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
    /*
    //
    return this.http.put('http://localhost:8080/api/course/uploadFile/'+id,formdata, {
      reportProgress: true,
      responseType: 'text'
    })*/
  }
updateurl(file: File,id:number):Observable<any>{
  const formdata:FormData=new FormData();
  formdata.append('file',file);
  return this.http.put('http://localhost:8080/api/course/update/'+id,formdata);

}
  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/all');
  }
}