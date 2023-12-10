import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpStatusCodes } from 'src/app/shared/enums/http-status-codes';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  private totalRequest = 0;
  private lazyUpdateflag = true;
  private refreshTokenFlag = true;
  constructor(
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Handle the request, for example, add headers

    // Continue with the request
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error
        console.error('HTTP error occurred:', error);

        // Optionally, you can re-throw the error or return a new observable
        // throw error;
        return throwError('An error occurred');
      })
    );
  }

  private httpException(error: HttpErrorResponse) {
    this.hideLoader();
    let webRequestError = {
      error: 'SGWebRequest',
      status: error.status,
      Message: 'Request failed while processing the request. Please contact Adminstration...',
      code: null
    };

    if(error.error['code'] !== undefined)
    {
      webRequestError = {
        error: 'SGWebRequest',
        status: error.status,        
        Message: 'Request failed while processing the request. Please contact Adminstration...',
        code: error.error['code']
      };
    }

    return throwError(webRequestError);
  }

  private showLoader(): void {
    //  this.loadingService.show();
  }

  private hideLoader(): void {
    //  this.loadingService.hide();
  }

  private unAuthoriedException(statusCode:any): any {
    const webRequestError = {
      error: 'SGWebRequestRefresh',
      status: statusCode,
      Message: 'Unauthorized Request...',
      code: null
    };
    // this.DIALOGSERVICE.closedialog();
    // this.DIALOGSERVICE.opendialog('Error Message',statusCode.message, 'Ok', 'fad fa-times-circle', 'black', 0, 'md', 'error', false, true);
    return throwError(webRequestError);
  }

}
