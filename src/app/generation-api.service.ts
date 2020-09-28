import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerationApiService {

  constructor(private httpClient: HttpClient) {
  }

  generateJson(size: number): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/generate', {params: {size: size.toString()}});
  }

}