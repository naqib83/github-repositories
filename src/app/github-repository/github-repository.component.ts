import { GithubRepositoryService } from './github-repository.service';
import { Component, OnInit } from '@angular/core';
import { IGithubRepository } from './github-repository';
import * as _ from 'underscore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-github-repository',
  templateUrl: './github-repository.component.html',
  styleUrls: ['./github-repository.component.css']
})
export class GithubRepositoryComponent implements OnInit {
  query: string = "";
  repositories: IGithubRepository[] = [];
  filteredRepositories: IGithubRepository[] = [];
  sessionedRepos: IGithubRepository[] = [];
  errorMessage: any;

  constructor(private service: GithubRepositoryService) { }

  onSubmit(f: NgForm) {
    console.log("Service is being called!");
    this.query = f.value;
    this.ngOnInit();
  }

  ngOnInit(): void {
    console.log("Github-repository component is being initiated and service is being called!");
    this.service.getRepositories(this.query).subscribe({
      next: repositories => {
        this.repositories = repositories
      },
      error: err => this.errorMessage = err
    });
    console.log('This is Github repos');
  }
  bookmarkIt(repository){
    if(!("status" in repository) || repository.status === false){
      console.log("Setting true status and push this repo to filterRepos");
      repository.status = true;
      this.filteredRepositories.push(repository);
    } else {
      console.log("Setting false status and remove repo from filterRepos");
      repository.status = false;
      this.filteredRepositories = _.without(this.filteredRepositories, repository);
    }
    console.log("Setting into user session");
    localStorage.setItem("localValues", JSON.stringify(this.filteredRepositories));
    this.sessionedRepos = JSON.parse(localStorage.getItem("localValues"));
  }

}
