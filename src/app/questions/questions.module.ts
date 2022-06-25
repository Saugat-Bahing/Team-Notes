import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QueryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    QueryComponent
  ]
})
export class QuestionsModule { }
