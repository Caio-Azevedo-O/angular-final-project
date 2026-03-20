import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl:string = 'http://localhost:';

  constructor(private https:HttpClient) {
  }
}
