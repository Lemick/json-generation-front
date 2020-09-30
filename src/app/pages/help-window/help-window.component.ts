import { Component, OnInit } from '@angular/core';
import {HelpWindowService} from '../../services/help-window.service';

@Component({
  selector: 'app-help-window',
  templateUrl: './help-window.component.html',
  styleUrls: ['./help-window.component.css']
})
export class HelpWindowComponent implements OnInit {
  helpMenuVisible: boolean;

  constructor(private helpWindowService: HelpWindowService) {
    helpWindowService.openingRequest$.subscribe(value =>
      this.helpMenuVisible = value
    );

  }
  ngOnInit(): void {
  }

  close() {
    this.helpMenuVisible = false;
  }
}
