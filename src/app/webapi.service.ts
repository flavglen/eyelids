import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class WebapiService {
  apiUrl:string='http://eyelids.in/api/service.php';
  public token: string;
  constructor(private http: Http) {
    /*var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;*/
   }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getImagesByCategory(categoryId): Promise<any[]> {
    let query=`${categoryId}`;
    return this.http.get(this.apiUrl+'?segment=getImagesByCategory&categoryId='+query)
                    .map((response) => response.json())
                    .toPromise()
                    .catch(this.handleError);
  }

  getImageCategory(): Promise<any[]> {
    return this.http.get(this.apiUrl+'?segment=getImageCategory')
                    .map((response) => response.json())
                    .toPromise()
                    .catch(this.handleError);
  }

  saveCategory(data): Promise<number> {
    data.segment='savecategory';
    return this.http.post(this.apiUrl,JSON.stringify(data))
                    .map((response) => response.json())
                    .toPromise()
                    .catch(this.handleError);
  }


      login(username: string, password: string): Observable<any> {
          return this.http.post(this.apiUrl, JSON.stringify({ segment:'login',username: username, password: password }))
              .map((response) => {
                  // login successful if there's a jwt token in the response
                  let token = response.json() && response.json().token;
                  if (token) {
                      // set token property
                      this.token = token;

                      // store username and jwt token in local storage to keep user logged in between page refreshes
                      sessionStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                      // return true to indicate successful login
                      return response.json();
                  } else {
                      // return false to indicate failed login
                      return response.json();
                  }
              });
      }

}
