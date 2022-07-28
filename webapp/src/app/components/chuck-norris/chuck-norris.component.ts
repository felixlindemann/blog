import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { SubSink } from 'subsink';

import * as translate from 'deepl';
import { combineLatest, map, Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.scss']
})
export class ChuckNorrisComponent implements
  OnInit, OnDestroy {
    title = 'translateApp';
    user = 'Felix Lindemann';
    lang = environment.lang;
    currentLang = 'de';
    currentJoke = '';
    currentJokeTranslated = '';
    sink = new SubSink();

    constructor(private translate: TranslateService, private http: HttpClient) {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(this.currentLang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(this.currentLang);
    }
    ngOnInit(): void {

      this.getRandomJoke();
    }
    ngOnDestroy(): void {
      this.sink.unsubscribe();
    }

    getRandomJoke() {
  this.sink.sink =
      this.http.get(environment.chuck.random)
      .pipe(
          tap(( ) => { this.currentJokeTranslated = "...";}),
        map((x: any) => x.value)
        , tap((x: string) => { this.currentJoke = x; this.  translateJoke();})
      ).subscribe();
    }
    private translateJoke(){

            translate({
              free_api: true,
              text: this.currentJoke,
              target_lang: this.currentLang as translate.DeeplLanguages,
              auth_key: environment.deepMl.key,
            }).then((result:any) =>this.currentJokeTranslated = result.data.translations[0].text)

        ;


    }
    useLanguage(language: string): void {
      this.currentLang = language;
      this.translate.use(this.currentLang);
      this. translateJoke();
    }


}
