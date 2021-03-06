import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  commits: any[] = [];
  loading = false;

  constructor(private githubService: GithubService) { 

    this.loading = true;

    this.githubService.getCommitHistory().subscribe( (data: any[]) => {
      
      this.commits = data;
      this.loading = false;

    });
  }

  ngOnInit(): void {
  }

}
