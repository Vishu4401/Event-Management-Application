import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { EventService } from '../event.service';

@Component({
  selector: 'app-login-event',
  templateUrl: './login-event.component.html',
  styleUrls: ['./login-event.component.css']
})
export class LoginEventComponent implements OnInit {
  alert:boolean = false
  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private event:EventService) { }

  ngOnInit(): void {
  }

  collection(){
    console.warn(this.login.value)
    this.event.loginUser(this.login.value).subscribe((result)=> {
      this.alert = true
      console.warn("result", result)
    } )
  }

  closeAlert(){
    this.alert = false
  }
}
