import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogcategories',
  templateUrl: './blogcategories.component.html',
  styleUrls: ['./blogcategories.component.scss']
})
export class BlogcategoriesComponent implements OnInit {

  router: Router;
  constructor() { }

  ngOnInit(): void {
  }

}
