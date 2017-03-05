/**
 * Created by michal on 5.3.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable'; /*TODO add me*/

@Injectable()
export class RegisterService {
  constructor (private http: Http) {}

  sendRegistration(something:string){
      let url = "http://localhost:8080/user/register"; /*TODO move this to config*/
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post(url,JSON.stringify(something), {headers:headers})
  }

}
