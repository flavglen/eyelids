import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {CarouselModule, OrganizationChartModule,ButtonModule,FileUploadModule,DropdownModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponentComponent } from './slider-component/slider-component.component';
import { CircullumComponentComponent } from './circullum-component/circullum-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import {FileUploadComponent} from './file-upload/file-upload.component'
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'upload', component: FileUploadComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    SliderComponentComponent,
    CircullumComponentComponent,
    FooterComponentComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,FileUploadModule,FormsModule,CarouselModule,DropdownModule,OrganizationChartModule,BrowserAnimationsModule,ButtonModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
