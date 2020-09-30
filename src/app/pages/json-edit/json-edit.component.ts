import {Component, OnInit} from '@angular/core';
import {JsonService} from '../../services/json.service';
import {catchError, switchMap, takeUntil, tap} from 'rxjs/operators';
import {GenerationApiService} from '../../services/generation-api.service';
import {EMPTY, empty, of} from 'rxjs';

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

  queryCode = '';
  resultCode = '';
  docSizeRequested = 5;
  isLoading: boolean;

  constructor(private jsonService: JsonService,
              private generationApiService: GenerationApiService) {

    jsonService.jsonGenerationRequested$.pipe(
      switchMap(() =>
        this.generationApiService.generateJson(this.docSizeRequested, this.queryCode).pipe(
          catchError(() => EMPTY)
        ))
    ).subscribe(
      generatedJson => this.resultCode = this.jsonStringify(generatedJson)
    );
  }

  ngOnInit() {
    this.queryCode = this.jsonStringify({
      id: '{{randInt()}}',
      firstName: '{{randFirstName()}}',
      lastName: '{{randLastName()}}',
      email: '{{randEmail()}}',
      phone: '{{randPhone()}}',
      age: '{{randInt(0, 99)}}',
      genre: '{{randEnum(male, female, other)}}',
      generatedDate: '{{now()}}',
      isVip: '{{randBool()}}',
      orderDate: '{{randDate(2019-01-01T00:00:00Z, 2019-12-30T23:59:59Z)}}',
      customEmail: '{{randFirstName()}}.{{randLastName()}}@gmail.com'
    });
  }

  jsonStringify(json: object): string {
    return JSON.stringify(json, null, 4);
  }

  launchGeneration() {
    this.isLoading = true;
    this.generationApiService.generateJson(this.docSizeRequested, this.queryCode).subscribe(
      generatedJson => {
        this.resultCode = this.jsonStringify(generatedJson);
        this.isLoading = false;
      },
      () => this.isLoading = false
    );
  }
}
