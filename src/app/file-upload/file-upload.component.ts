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
 constructor(private ws:WebapiService) { }

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

  customUpload(event){
      event.formData.append('categoryId',this.selectedCategory.id);
  }

}
