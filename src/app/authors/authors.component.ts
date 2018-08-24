import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  autherTitle: string;
  authors: string[];
  constructor( authorsService : AuthorsService) {
    this.autherTitle = "List of authors";
    this.authors = authorsService.getAuthors() ;
   }

  ngOnInit() {
  }

}
