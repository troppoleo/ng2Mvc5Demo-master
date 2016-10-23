///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';
import { AppComponent2 } from './file1';

@NgModule({
    imports: [BrowserModule ],
    declarations: [AppComponent, AppComponent2],
    bootstrap: [AppComponent, AppComponent2]
})
export class AppModule { }