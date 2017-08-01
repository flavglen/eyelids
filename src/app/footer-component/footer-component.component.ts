import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {
footerData:any[];
currentUser:object;
  constructor(private router: Router) {
    /*check i\user logggedin*/
    let tok=sessionStorage.getItem('currentUser');
    this.currentUser =(typeof tok !='undefined') ?JSON.parse(tok):{};
  }

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

  logout(){
    sessionStorage.removeItem('currentUser');
    this.currentUser =null;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/']);
    window.location.reload();
  }

}
