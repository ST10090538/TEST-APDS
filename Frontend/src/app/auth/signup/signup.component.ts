import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  constructor(public authservice: AuthServiceService, private router: Router){}
 
  option: string = this.router.url
 
  ngOnInit(): void {
   
  }
 
  onsignup (signupform: NgForm)
  {
    if(signupform.invalid)
    {
      return;
    }
    this.authservice.signup(signupform.value.enteredusername, signupform.value.enteredpassword)
  }
}
 