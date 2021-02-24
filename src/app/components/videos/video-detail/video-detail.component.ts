import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {

  @Input() video: any;
  url:any;

  constructor(private sanitizer: DomSanitizer) { 
   
  }

  ngOnInit(): void {
    console.log("video selected is: " + JSON.stringify(this.video));
  }

  sanitizeURL() {
    const videoId = this.video.id.videoId;
    const rowUrl = 'https://www.youtube.com/embed/' + videoId;
    //this.url = `https://www.youtube.com/embed/${videoId}`;
    //return this.sanitizer.bypassSecurityTrustUrl(rowUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(rowUrl);
    }

}
