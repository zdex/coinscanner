import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  constructor() { }
  get nativeWindow() : any {
    return _window();
 }

}

function _window() : any {
  // return the global native browser window object
  return window;
}