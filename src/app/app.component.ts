import { Component } from '@angular/core';
import {HelpWindowService} from './help-window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private helpWindowService: HelpWindowService) {
  }

  openHelpWindow() {
    this.helpWindowService.showHelpRequest();
  }

  log(clientHeight: number) {
    console.log(clientHeight);
  }

  generateJson() {

  }
}
