import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  toggle = '1';
  ToggleSidebar = new BehaviorSubject(this.toggle);
  currentToggle = this.ToggleSidebar.asObservable();

  constructor() { }

  changeToggle(data:string) {

    this.ToggleSidebar.next(data);
  }
}
