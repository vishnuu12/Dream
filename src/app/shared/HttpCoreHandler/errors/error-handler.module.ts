import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { GlobalErrorHandler } from './global-error-handler';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { 
      provide: ErrorHandler, 
      //useClass: SentryErrorHandlerService 
      useClass: GlobalErrorHandler 
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ]
})
export class ErrorHandlerModule {}
