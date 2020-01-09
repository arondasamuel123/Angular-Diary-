import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';
import { DiaryComponent } from './diary/diary.component';
import { HighlightTextDirective } from './highlight-text.directive';


@NgModule({
  declarations: [
    AppComponent,
    DiaryFormComponent,
    DiaryComponent,
    HighlightTextDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
