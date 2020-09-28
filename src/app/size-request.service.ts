import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizeRequestService {

  private docSizeRequested = new BehaviorSubject<number>(10);

  docSizeRequested$ = this.docSizeRequested.asObservable();

  constructor() { }

  changeDocSizeRequested(docSizeRequested: number) {
    this.docSizeRequested.next(docSizeRequested);
  }
}
