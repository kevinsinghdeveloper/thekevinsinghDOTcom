// toast.service.ts
import { Injectable, TemplateRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonManagerService {
  constructor(private http: HttpClient) {
  }
  public getJSON(url): Observable<any> {
    return this.http.get(url);
  }
  public convert_json_to_object(json_file_path){
    this.getJSON(json_file_path).subscribe(data => {
      return JSON.parse(data)
    });
  }

}
