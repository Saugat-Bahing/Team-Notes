import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  toggle = "1";
  questions: string[][] = [];
  answers: any[][] = [];
  showAdd: boolean[] = [];
  inputValue: string = "";
  constructor(private sharedService: SharedService, private dataService: DataService) { }

  ngOnInit(): void {

    this.sharedService.ToggleSidebar.subscribe(data => { this.toggle = data });

    this.dataService.getQuestions().subscribe({
      next: questions => {
        this.questions = questions.map(q => Object.values(q));
        this.showAdd.push(false);
      },
      error: err => { console.log(err, "err") }
    })

    this.dataService.getAnswers().subscribe(ans => {
      this.answers = ans.map(a => Object.values(a));
    }, err => { console.log(err, "err"); alert("err") });

  }

  add(id: number) {

    let ans: string[] = []
    for (let i of this.answers) {

      if (i[0] == id.toString()) {

        ans = i[1];
      }
    }

    if (ans == undefined) {

      ans = [];
    }

    ans.push(this.inputValue);
    this.dataService.answer(id.toString(), { "ans": ans })
      .then(() => {
        this.inputValue = "";
      })
  }

  toggleShow(i: number) {

    this.showAdd = this.showAdd.map(e => false);
    this.showAdd[i] = !this.showAdd[i];
  }
}
