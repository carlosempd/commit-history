import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  allCommits: any[] = [];
  searchCommits: any[] = [];
  loading = false;

  constructor(private githubService: GithubService) { 

    this.loading = true;

    this.githubService.getCommitHistory().subscribe( (data: any[]) => {
      
      this.searchCommits = data;
      this.allCommits = data;
      this.loading = false;

    });
  }

  ngOnInit(): void {
  }

  // Search commits
  search( searchTerm: string ) {
    
    if ( searchTerm === '' ) {
      this.searchCommits = this.allCommits;
      return;
    }

    this.searchCommits = this.allCommits.filter( 
      element => element.commit.message.toLowerCase().includes( searchTerm.toLowerCase() )
    );
  }

  // Prevent Default when press Enter
  checkEnter($event){
    if ( $event.key === 'Enter') {
      $event.preventDefault();

    }
  }

}
