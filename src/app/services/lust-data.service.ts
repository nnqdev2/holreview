import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
// import { Observable, of } from 'rxjs';
import { catchError, tap, retry} from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { LustSearchFilter } from '../models/lust-search-filter';
// import { LogPublisherConfig } from '../shared/log-publishers';

@Injectable()
export class LustDataService {

//   private loggers: LogPublisherConfig[] = [];

  // constructor(@Inject(forwardRef(() => LogService)) private logService: LogService) { }
  constructor(private http: HttpClient) {}

  search(lustSearchFilter: LustSearchFilter): Observable<LustSearchFilter> {
    return this.http.post<LustSearchFilter>(environment.olprrapi_lust_search, lustSearchFilter)
  ;
  }
}
