import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcService } from './calc.service';
import { GradeDirective } from './grade.directive';
import { GradePipe } from './grade.pipe';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GradePipe,
    GradeDirective,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(), CalcService, SharedService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
