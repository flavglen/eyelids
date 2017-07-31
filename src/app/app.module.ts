import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { NgModule } from '@angular/core';
import {CarouselModule, OrganizationChartModule,DialogModule,ButtonModule,FileUploadModule,DropdownModule,GalleriaModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponentComponent } from './slider-component/slider-component.component';
import { CircullumComponentComponent } from './circullum-component/circullum-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import {FileUploadComponent} from './file-upload/file-upload.component'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'upload', component: FileUploadComponent,canActivate: [AuthGuard]},
];


@NgModule({
  declarations: [
    AppComponent,
    SliderComponentComponent,
    CircullumComponentComponent,
    FooterComponentComponent,
    FileUploadComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,HttpModule,GalleriaModule,DialogModule,FileUploadModule,FormsModule,CarouselModule,DropdownModule,OrganizationChartModule,BrowserAnimationsModule,ButtonModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
