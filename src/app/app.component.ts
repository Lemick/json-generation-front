import {Component} from '@angular/core';
import {HelpWindowService} from './services/help-window.service';
import {GenerationApiService} from './services/generation-api.service';
import {JsonService} from './services/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hasFocusOnHelp = false;

  constructor(private helpWindowService: HelpWindowService,
              private generationApiService: GenerationApiService,
              private jsonResultService: JsonService) {
    helpWindowService.openingRequest$.subscribe(value => this.hasFocusOnHelp = value);
  }

  openHelpWindow() {
    this.helpWindowService.showHelpRequest();
  }
}
