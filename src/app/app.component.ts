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

  constructor(private helpWindowService: HelpWindowService,
              private generationApiService: GenerationApiService,
              private jsonResultService: JsonService)
  {
  }

  openHelpWindow() {
    this.helpWindowService.showHelpRequest();
  }

  generateJson() {
    this.jsonResultService.requestGeneration();
  }
}
