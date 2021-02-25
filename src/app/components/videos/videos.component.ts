import { Component, OnInit } from '@angular/core';
import { YoutubeDataAPI } from 'youtube-v3-api';
import { RippleService } from 'src/app/services/ripple.service';
import {debounce} from 'lodash';
import * as _ from 'lodash';

const APO_KEY = 'AIzaSyDnJgwMIIXUgrwlWcIsA2LAQBVmdIE4UJ4'; //gmaheshwari2006
//const APO_KEY ='AIzaSyBVoQJbbdXjzx9AuwPId7rH__v-qvK0iTE' //gauravautumn

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videoList: any;
  members: any;
  selectedVideo: any;

  constructor(private service: RippleService) {
    this.searchByKeyword("blockchain");
  }

  ngOnInit(): void {

    /*debugger
    YTSearch({ key: APO_KEY, term: 'Ripple,xrp' }, (videos) => {
      console.log(videos);
      //this.setState({videos: videos});
     // this.setState({videos});
  });*/
    /* 
    
     async () => {
       debugger
       let result = await searchYoutube(APO_KEY,options);
       console.log("result:" + result);
     }
   */
  }
  searchVideo(term) {
    //this.searchByKeyword(term);
    _.debounce(this.searchByKeyword(term), 1000);
  }
  searchByKeyword(term) {

    this.service.getYoutubeSearchList("part=snippet&q="+term+"&type=video&key=" + APO_KEY).subscribe(data => {
      console.log("data from getYoutubeSearchList: " + JSON.stringify(data));
      this.videoList = data;
      this.selectedVideo = this.videoList.items[0];
    });


    /*this.service.getYoutubeMembersList("part=id&videoId=kVWpqNQ2Yxo&key=" + APO_KEY).subscribe(data => {
      console.log("data from getYoutubeSearchList: " + JSON.stringify(data));
      this.members = data;
    });*/
    /*
         const api = new YoutubeDataAPI(APO_KEY);
      //"kVWpqNQ2Yxo"
         api.searchVideo("kVWpqNQ2Yxo").then((data) => {
             console.log("DATA IS: " + JSON.stringify(data));
         },(err) => {
             console.error(err);
         })
     */
  }


}
