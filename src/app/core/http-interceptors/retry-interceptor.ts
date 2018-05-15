// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
// import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { mergeMap, map, filter, switchMap, retryWhen, retry } from 'rxjs/operators';

// @Injectable()
// export class RetryInterceptor implements HttpInterceptor {

//     constructor() { }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(req)
//             pipe
//             .retryWhen(error => {
//                 return error
//                     .flatMap((err) => {

//                         if (err instanceof HttpErrorResponse && err.status === 504) { // timeout

//                             return Observable.of(err.status).delay(5000);
//                         }

//                         return Observable.throw({ error: 'No retry' });
//                     })
//                     .take(1)
//                     .concat(Observable.throw({ error: 'Sorry, there was an error (after 5 retries)' }));

//             });
//     }
// }

