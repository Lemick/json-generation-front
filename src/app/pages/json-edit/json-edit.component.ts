import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {JsonEditorComponent, JsonEditorOptions} from 'ang-jsoneditor';
import {DiffEditorModel, EditorComponent, MonacoEditorModule, NgxEditorModel} from 'ngx-monaco-editor';
import {HelpWindowService} from '../../help-window.service';
import {EventEmitter} from 'events';
import {SizeRequestService} from '../../size-request.service';

@Component({
  selector: 'app-json-edit',
  templateUrl: './json-edit.component.html',
  styleUrls: ['./json-edit.component.css']
})
export class JsonEditComponent implements OnInit {

  editorOptions = {
    theme: 'vs-dark',
    language: 'json',
    automaticLayout: true
  };

  queryCode = ' { \n "test": "test2" \n }';
  resultCode = '';
  docSizeRequested: number;

  constructor(private sizeRequestedService: SizeRequestService) {
    sizeRequestedService.docSizeRequested$.subscribe(value => this.docSizeRequested = value);
  }

  ngOnInit() {
  }

  changeDocSizeRequested($event: any) {
    this.sizeRequestedService.changeDocSizeRequested($event);
  }
}
