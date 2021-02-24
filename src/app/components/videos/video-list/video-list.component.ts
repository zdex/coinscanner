import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//import {}
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videoList;
  @Output() videoSelectedClicked : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log("videoList is: " + JSON.stringify(this.videoList));
    console.log(JSON.stringify(this.videoList.items[0].snippet));
    
   }

   onVideoSelect(video) {
     this.videoSelectedClicked.emit(video);
   }
}
