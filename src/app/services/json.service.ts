import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private jsonGenerationRequested = new Subject<boolean>();

  jsonGenerationRequested$ = this.jsonGenerationRequested.asObservable();


  constructor() { }


  requestGeneration() {
    console.log('jsonGenerationRequested');
    this.jsonGenerationRequested.next(true);
  }
}
