import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  constructor(private githubService: GithubService) { 
    this.githubService.getCommitHistory();
  }

  ngOnInit(): void {
  }

}
