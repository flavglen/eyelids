import { Component, OnInit } from '@angular/core';
import {WebapiService} from '../webapi.service';

@Component({
  selector: 'app-manage-gallery',
  templateUrl: './manage-gallery.component.html',
  styleUrls: ['./manage-gallery.component.css']
})
export class ManageGalleryComponent implements OnInit {
  data:any[];
  currentUser:{username:string,token:string};

  constructor(private ws:WebapiService) {


   }

  ngOnInit() {
   this.data=[];
   let tok=sessionStorage.getItem('currentUser');
   this.currentUser =(typeof tok !='undefined') ?JSON.parse(tok):{};
    /*fetch all images*/
    /*video*/
    this.ws.getAllImages(this.currentUser.token).then((result)=>{
        if(!result.hasOwnProperty('error')){
          this.data= result;
        }
    })
    .catch((error) => console.error(error));

  }

  removeItem(data){
    let r = confirm("Are You Sure You want to delete File?");
    if (r == true) {
    this.ws.deleteImage(data.pk_uploads,this.currentUser.token).then((result)=>{
          if(result['success'] == 1){
            /*console.log(this.data.indexOf(data));
            this.data.splice(this.data.indexOf(data),1);
            data.length=0;
            data=[];*/
            alert('File Has been deleted');
            window.location.reload();
          }else{
            alert('Error Deleting File,Try Again');
          }
      })
      .catch((error) =>   console.log(error));
    }
  }

}
