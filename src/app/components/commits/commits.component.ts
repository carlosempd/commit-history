import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  commits: any[] = [];

  constructor(private githubService: GithubService) { 
    this.githubService.getCommitHistory().subscribe( (data: any[]) => {
      console.log(data)
      this.commits = data;

    });
  }

  ngOnInit(): void {
  }

}
