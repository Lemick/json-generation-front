import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerationApiService {

  constructor(private httpClient: HttpClient) {
  }

  generateJson(size: number, template: string): Observable<any> {
    console.log('Send', template, size);
    return this.httpClient.post<any>(
      environment.backUrl + '/generate', template,
      {
        params: {size: size.toString()},
        headers: {'Content-Type': 'application/json'}
      });
  }

}
