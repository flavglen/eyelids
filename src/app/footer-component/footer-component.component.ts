import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {
footerData:any[];
  constructor() { }

 ngOnInit() {
    this.footerData=[{
      footerMenu:'Home'
    },
   { 
      footerMenu:'About Us' 
    },
    {
      footerMenu:'Admission'   
    },
    {
      footerMenu:'Circullam'   
    },
    { 
      footerMenu:'Events' 
    },
    {
      footerMenu:'FAQ'   
    },
    {
      footerMenu:'Contact Us'   
    }
  ]
  }

}
