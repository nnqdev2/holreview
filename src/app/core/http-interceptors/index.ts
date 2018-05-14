/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AddHeadersInterceptor } from './add-headers-interceptor';
// import { CachingInterceptor } from './cache-interceptor';
// import { RetryInterceptor } from './retry-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AddHeadersInterceptor, multi: true },
//   { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
//   { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
];
