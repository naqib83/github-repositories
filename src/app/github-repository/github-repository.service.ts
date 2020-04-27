import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from "rxjs/operators";
import { IGithubRepository } from './github-repository';

@Injectable({
  providedIn: 'root'
})
export class GithubRepositoryService {
  private repoUrl = "http://localhost:8089/api/repositories?q=";

  constructor(private http: HttpClient) { }

  getRepositories(query: string): Observable<IGithubRepository[]> {
    console.log("Github-repository service is being called!");
    return this.http.get<IGithubRepository[]>(this.repoUrl.concat(query['query'])).pipe(
        tap(data => JSON.stringify(data)), 
        catchError(this.handleError)
    );
}
  handleError(handleError: any): import("rxjs").OperatorFunction<IGithubRepository[], any> {
    throw new Error("Method not implemented.");
  }


  
}
