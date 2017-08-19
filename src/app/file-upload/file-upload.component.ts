import { Component, OnInit } from '@angular/core';
import {WebapiService} from './../webapi.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers:[WebapiService]
})
export class FileUploadComponent implements OnInit {
 mediaType;
 imageCategory;
 selectedType:{id:number,name:string};
 selectedCategory:{id:number,name:string};
 currentUser:{username:string,token:string};
 constructor(private ws:WebapiService) {
   let tok=sessionStorage.getItem('currentUser');
   this.currentUser =(typeof tok !='undefined') ?JSON.parse(tok):null;
 }

  ngOnInit() {
        this.mediaType = [];
        this.imageCategory=[];
        this.mediaType.push({label:'Image', value:{id:1, name: 'Image'}});
        this.mediaType.push({label:'Video', value:{id:2, name: 'Video'}});
        this.selectedType ={id:1, name: 'Image'}

        this.ws.getImageCategory().then((result)=>{
              this.imageCategory=result;
              this.selectedCategory=result[0].value; /*set default category*/
        })
        .catch((error) => console.error(error));

  }
  OnErr(event){
    alert('There was an error while uploading files.Try again');
  }

  OnUp(event){
    alert('Upload has been completed successfully.')
  }

  customUpload(event){
      event.formData.append('categoryId',this.selectedCategory.id);
  }
  modifyheader(event){
      event.xhr.setRequestHeader("Authorization", "Bearer " + this.currentUser.token);
  }

}
