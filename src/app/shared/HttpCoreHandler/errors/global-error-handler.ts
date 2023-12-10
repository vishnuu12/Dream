import { ErrorHandler, Injectable, NgZone } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import { ErrorsRoutingModule } from 'src/app/modules/errors/errors-routing.module';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private zone: NgZone,
    // private translate: TranslateService
  ) { }

  handleError(error: Error) {
    const errorLog = {
      error: 'Error: ' + error,
      name: 'Name: ' + error.name,
      message: 'Message: ' + error.message,
      stacktrace: 'StackTrace: ' + (error.stack || 'N/A')
    };

    // Log the error information
    console.error('Global Error Handler:', errorLog);

    // You can also add additional error handling logic here, such as sending errors to a server or displaying them to the user.

    // If needed, you can use the NgZone to run code in the Angular zone
    this.zone.run(() => {
      // Perform tasks within the Angular zone if necessary
    });
  }
}
