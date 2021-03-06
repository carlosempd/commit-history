import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor( private http: HttpClient) {
    console.log('github service ready')
   }

   getCommitHistory() {
      const headers = new HttpHeaders({
        'Accept': 'application/vnd.github.v3+json' 
      });

       return this.http.get(
        `https://api.github.com/repos/carlosempd/commit-history/commits`,
        { headers }
      );
    }
}
