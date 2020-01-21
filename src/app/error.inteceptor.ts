import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MassageComponent } from './massage/massage.component';
export interface DialogData {
  error: string;
}
@Injectable()
export class HttpErrorInteceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const dialogRef = this.dialog.open(MassageComponent, {
          width: '33rem',
          data: {error: error.error.message}
        });
        return throwError(error);
      })
    );
  }
}
