import { HttpHeaders } from '@angular/common/http';

export const noCacheHttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  }),
};
