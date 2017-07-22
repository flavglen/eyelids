import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarouselModule, OrganizationChartModule,ButtonModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponentComponent } from './slider-component/slider-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponentComponent
  ],
  imports: [
    BrowserModule,CarouselModule,OrganizationChartModule,BrowserAnimationsModule,ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
