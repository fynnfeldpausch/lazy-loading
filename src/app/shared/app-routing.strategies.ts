import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, delay, flatMap } from 'rxjs/operators';

export class PreloadAllModules implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return fn().pipe(catchError(() => of(null)));
  }
}

export class NoPreloading implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return of(null);
  }
}

export class DelayedPreloading implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return of(true)
      .pipe(delay(5000))
      .pipe(flatMap(_ => fn()));
  }
}

export class SelectivePreloading implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload
      ? fn()
      : of(null);
  }
}

// https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
export class NetworkAwarePreloading implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const conn = (navigator as any).connection;
    return conn && (conn.saveData || conn.effectiveType !== '4g')
      ? of(null)
      : fn();
  }
}
