import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpWindowService {

  private openingRequest = new Subject<boolean>();

  openingRequest$ = this.openingRequest.asObservable();

  constructor() { }

  showHelpRequest() {
    this.openingRequest.next(true);
  }

}
