import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor(private dataService: DataService, private sharedService:SharedService) { }

  length = 0;
  inputValue = "";
  toggle = "1";
  ngOnInit(): void {

    this.dataService.getQuestions().subscribe({
      next:data => { this.length = data.length },
      error:err=> { console.log(err)}
    });

    this.sharedService.ToggleSidebar.subscribe(toggle => this.toggle = toggle);
  }

  ask() {

    const  question = {"me": this.inputValue};
    this.dataService.askQuestion((this.length+1).toString(), question);
    this.inputValue = "";

  }

}
