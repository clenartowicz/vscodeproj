import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MemoComponent } from './components/memo/memo.component';
import { MemosComponent } from './compnents/memos/memos.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoComponent,
    MemosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
