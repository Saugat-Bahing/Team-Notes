import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  ham_color: string = '#98AFC7';
  cross_color:string = '#98AFC7';
  dashState = false;
  crossDisplay = "none";
  hamDisplay = "flex";
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  hamColor() {

    this.ham_color = "aqua";
  }

  hamColor1() {

    this.ham_color = '#98AFC7';
  }

  crossColor() {

    this.cross_color = "aqua";
  }

  crossColor1() {

    this.cross_color = '#98AFC7';
  }

  toggleDash() {

    this.dashState = !this.dashState;
    if (this.hamDisplay == "flex") {

      this.hamDisplay = "none";
      this.sharedService.changeToggle("0")
    }

    else {

      this.hamDisplay = "flex";
    }
    if (this.crossDisplay == "flex") {

      this.crossDisplay = "none";
      this.sharedService.changeToggle("1")
    }

    else {
      this.crossDisplay = "flex";
    }
  }
}

