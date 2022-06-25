import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './answers/answer/answer.component';
import { QueryComponent } from './questions/query/query.component';

const routes: Routes = [
  {path: 'query', component: QueryComponent},
  {path: 'answers', component: AnswerComponent},
  {path: '', redirectTo: 'query', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
