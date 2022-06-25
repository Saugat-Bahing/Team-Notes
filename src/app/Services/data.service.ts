import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  questionRef: AngularFirestoreCollection;
  answerRef: AngularFirestoreCollection;
  constructor(private db: AngularFirestore) {

    this.questionRef = db.collection("question");
    this.answerRef = db.collection("answer");
  }

  getQuestions() {
 
    return this.questionRef.snapshotChanges().pipe(
      catchError(this.handleError),
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    )
  }

  getAnswers() {

    return this.answerRef.snapshotChanges().pipe(
      catchError(this.handleError),
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    )
  }

  askQuestion(id:string, data:{}) {

    return new Promise<any>((resolve, reject) => {

      this.questionRef.doc(id).set(data)
        .then(resolve, err => reject(err));
    });
  }

  answer(id:string, data:{}) {

    return new Promise<any>((resolve, reject) => {

      this.answerRef.doc(id).set(data)
        .then(resolve, err => reject(err));
    });
  }

  handleError(err: HttpErrorResponse) {

    let errorMsg :any= "Unknown Error!"
    if (err.error instanceof ErrorEvent) {

      errorMsg = `Error: ${err.status}\nMessage: ${err.message}`
    }

    else {
         
      errorMsg = `Error code: ${err.status}\nMessage: ${err.message}`
    }
    console.log(errorMsg)
    return throwError(() => new Error(errorMsg));
  }
}
