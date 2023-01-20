import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpErrorHandler } from "../services/http-error.handler";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _httpErrorHandler: HttpErrorHandler) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return new Observable((observer) => {
      // TODO: .subscribe deprecated: use observer argument
      next.handle(request).subscribe(
        (response) => {
          if (response instanceof HttpResponse) {
            observer.next(response);
          }
        },
        (error: HttpErrorResponse) => {
          const errorHandled = this._httpErrorHandler.handleError(error);
          if (!errorHandled) {
            observer.error(error);
          }
        }
      );
    });
  }
}
