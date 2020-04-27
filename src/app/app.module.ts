import { GithubRepositoryService } from './github-repository/github-repository.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms'; 
import { AppComponent } from './app.component';
import { GithubRepositoryComponent } from './github-repository/github-repository.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GithubRepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GithubRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
