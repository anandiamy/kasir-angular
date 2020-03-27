import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl = 'http://localhost:3000';

  constructor(protected http: HttpClient) { }
}
