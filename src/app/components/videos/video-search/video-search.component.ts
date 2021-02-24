import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss']
})
export class VideoSearchComponent implements OnInit {
  searchForm = new FormGroup({
    searchVideo: new FormControl('')    
  });

  constructor() { }

  ngOnInit(): void {
  }
  
  searchVideo(){

  }
}
