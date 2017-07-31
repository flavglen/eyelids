import { Component, OnInit } from '@angular/core';
import {WebapiService} from './../webapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[WebapiService]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading:boolean = false;
  error:string="";
  constructor(private router: Router,private ws:WebapiService) { }

  ngOnInit() {
  }

  login() {
        this.loading = true;
        this.ws.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (!result.hasOwnProperty('error')) {
                  console.log(result);
                    // login successful
                    this.router.navigate(['/']);
                    window.location.reload();
                } else {
                    // login failed
                    alert('Login Failed ,Try Again');
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }

}
