import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {






  constructor(private fb:FormBuilder) { }
  signupForm=this.fb.group(
    {
      fname:['',Validators.required],
      email:['',[Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required]],
      password: ['',[Validators.minLength(6),Validators.required]],
      mobile:['',[,Validators.pattern('^[0-9]{10}$'),Validators.required]]
    }
  )

  ngOnInit(): void {
  }
 

}
