import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() {

   }

   public Get(name: string) : string {
    let returnStr: string = '';
    if(name === 'baseUrl') {
      returnStr = environment.baseUrl;
    } 

    return returnStr;
   }

}
