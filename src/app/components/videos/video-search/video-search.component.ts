import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss']
})
export class VideoSearchComponent implements OnInit {
  @Output() onSearchVideo : EventEmitter<any> = new EventEmitter();
  searchForm = new FormGroup({
    searchVideo: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  searchVideo() {
    this.onSearchVideo.emit(this.searchForm.value.searchVideo);
  } 

  searchVideoOnChange(event) {
    this.onSearchVideo.emit(event.target.value);
  }
}
