import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './answer/answer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnswerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AnswerComponent,
  ]
})
export class AnswersModule { }
