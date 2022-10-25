import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogspotComponent } from './blogspot';
import { FooterComponent } from './footer';
import { BlogSubjectService, EnvironmentService, MyhttpclientService } from './services';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BlogspotComponent,
    BlogDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BlogSubjectService, EnvironmentService, MyhttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
