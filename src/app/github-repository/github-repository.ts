import { IGithubRepositoryOwner } from './github-repository-owner';

export interface IGithubRepository{
  id : number;
  name : string;
  url : string;
  description : string;
  language : string;
  owner : IGithubRepositoryOwner;
  status? : boolean;
}

// export class IGithubRepository{
//   constructor(
//   public id: number,
//   public name: string,
//   public url: string,
//   public description: string,
//   public language: string,
//   public owner: IGithubRepositoryOwner,
//   public status?: boolean,
//   ){}
// }