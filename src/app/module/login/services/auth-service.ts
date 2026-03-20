import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserContext } from '../../../UserContext';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //sempre lembre de trocar para seu host e porta
  baseUrl:string = 'http://localhost:5034';
  private _authenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  authenticated$ = this._authenticatedSubject.asObservable();
  authResponseData: any;

  constructor(private https:HttpClient) {
  }

  authenticate(user: {EmailOrUsername: string, Password: string}):Observable<UserContext>{
    return this.https.post<any>(`${this.baseUrl}/auth/auth`, user).pipe(
      map(response => {
        if (response && response.data != null) {
          this._authenticatedSubject.next(true);
        } else {
          this._authenticatedSubject.next(false);
        }
        return response;
      })
    );
  }
  isAuthenticated(): boolean{
    return this._authenticatedSubject.value;
  }
  setAuthenticated(value: boolean) {
    this._authenticatedSubject.next(value);
  }
}
