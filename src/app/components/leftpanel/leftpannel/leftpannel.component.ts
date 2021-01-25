import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-leftpannel',
  templateUrl: './leftpannel.component.html',
  styleUrls: ['./leftpannel.component.scss']
})
export class LeftpannelComponent {
  mobileQuery: MediaQueryList;

  fillerNav =  ['Ripple', 'Bitcoin', 'Ethereum']

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  selectNav(nav:string) {
    
    debugger
  }
}