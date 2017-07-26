import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
 mediaType;
 selectedType:Object;
 imageCategory;
  constructor() { }

  ngOnInit() {
       this.mediaType = [];
        this.mediaType.push({label:'Image', value:{id:1, name: 'Image', code: 'NY'}});
        this.mediaType.push({label:'Video', value:{id:2, name: 'Video', code: 'RM'}});
        this.selectedType ={id:1, name: 'Image', code: 'RM'}
        this.imageCategory=[];
        this.imageCategory.push({label:'Category1', value:{id:1, name: 'Category1', code: 'NY'}});
        this.imageCategory.push({label:'Category2', value:{id:2, name: 'Category2', code: 'RM'}});
        this.imageCategory.push({label:'Category3', value:{id:2, name: 'Category3', code: 'RM'}});
  }

}
