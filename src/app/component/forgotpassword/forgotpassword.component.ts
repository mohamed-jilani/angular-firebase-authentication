import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
email : string ='';
constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  sendlink(){
    this.auth.forgotpasswords(this.email);
    this.email='';
  }

}
