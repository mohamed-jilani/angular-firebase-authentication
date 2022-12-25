import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:string='';
  password:string='';

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  signup(){
    if(this.email ==''){
      alert("you have to enter your email");
      return;
    }
    if(this.password ==''){
      alert("you have to enter your password");
      return;
    }
    this.auth.signup(this.email,this.password);
    this.email='';
    this.password='';

  }
  aff(){
    alert(this.email);
    alert(this.password);
  }

}
