import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WebapiService {
  apiUrl:string='http://eyelids.in/api/service.php';
  constructor(private http: Http) { }

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

}
