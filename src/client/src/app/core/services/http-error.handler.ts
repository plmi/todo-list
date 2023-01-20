import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({providedIn: 'root'})
export class HttpErrorHandler {
  constructor(private _toastrService: ToastrService) {}

  public handleError(error: HttpErrorResponse): boolean {
    if ([400, 404].includes(error.error.statusCode)) {
      this._toastrService.error(error.error.message);
      return true;
    }
    return false;
  }
}
