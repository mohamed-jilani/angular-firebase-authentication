import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router : Router) { }

login(email:string ,password:string){
  this.fireauth.signInWithEmailAndPassword(email,password).then((res)=>{
    localStorage.setItem('token','true');
    this.router.navigate(['/home'])

  },err=>{
    //alert("something went wrong !! ");
    alert(err.message);
    this.router.navigate(['/login'])
  })
}

signup( email:string ,password:string){
  this.fireauth.createUserWithEmailAndPassword(email,password).then((res)=>{
    alert("user registred sucessfully");
    this.router.navigate(['/login'])
  },err=>{
    //alert("something went wrong !! ");
    alert(err.message);
    this.router.navigate(['/login'])
  })

}
logout(){
  this.fireauth.signOut().then((res)=>{
  localStorage.removeItem('token');
  this.router.navigate(['/login'])
},err=>{
  alert(err.message);
})
}

forgotpasswords(email:string){
  this.fireauth.sendPasswordResetEmail(email);
  this.fireauth.sendPasswordResetEmail(email).then((res)=>{
  this.router.navigate(['/verifyemail']);
},err=>{
  alert(err.message);
})
}

}
