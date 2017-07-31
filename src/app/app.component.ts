import { Component ,OnInit,} from '@angular/core';
import {TreeNode} from 'primeng/primeng';
import { Router } from '@angular/router';
import {WebapiService} from './webapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WebapiService]
})
export class AppComponent   implements OnInit{

  title = 'app';
  model: any = {};
  cars: any[];
  data: TreeNode[];
  galletyModalDisplay:boolean;
  images: any[];
  imageCategory:any[];
  currentId:number=0;
  displayLogin:boolean=false;
  currentUser:Object;
  constructor(private _router:Router,private ws:WebapiService) {
      /*check i\user logggedin*/
      let tok=sessionStorage.getItem('currentUser');
      this.currentUser =(typeof tok !='undefined') ?JSON.parse(tok):{};
    }
  currentUrl:any;
  ngOnInit() {
    this.images = [];
    this.imageCategory=[];
    this.galletyModalDisplay=false;
    this._router.events.subscribe((url:any) => this.currentUrl =url.url);
    this.data = [{
          label: 'Integrated',
          expanded: true,
          children: [
                       {
                           label: 'Montessari'
                       },
                       {
                           label: 'Kindergarten'
                       }
                   ]
         }];

    this.cars = [
         {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'},
         {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
         {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
         {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'}
       ]

       this.ws.getImageCategory().then((result)=>{
             this.imageCategory=result;
       })
       .catch((error) => console.error(error));
  }

 loadGallery(categoryId){
     this.galletyModalDisplay = true;
     /*Fetch image by category*/
     this.ws.getImagesByCategory(categoryId).then((result)=>{
        this.images=result;
     })
     .catch((error) => console.error(error));
  }

  saveCategory(data){
    this.ws.saveCategory(data).then((result)=>{
        if(result===1){
          data.enabled=false;
        }
    })
    .catch((error) => console.error(error));
  }



}
