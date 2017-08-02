import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {
footerData:any[];
currentUser:{username:string,token:string};
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
  scrollTo(type){
    if(type ==='login'){
      this.router.navigate(['/login']);
        setTimeout(function(){
          $('html, body').animate({
            scrollTop: $(".loginForm").offset().top
        }, 1000);
      })
    }else if(type ==='upload'){
      this.router.navigate(['/upload']);
        setTimeout(function(){
          $('html, body').animate({
            scrollTop: $(".myuploadWrapper").offset().top
        }, 1000);
      })
    }
  }

}
