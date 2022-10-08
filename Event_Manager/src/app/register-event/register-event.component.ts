import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { EventService } from '../event.service';


@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent implements OnInit {
  alert:boolean = false
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private event:EventService) { }

  ngOnInit(): void {
  }

  collection(){
    console.warn(this.register.value)
    this.event.registerUser(this.register.value).subscribe((result) => {
      this.alert = true
      console.warn("result", result)
    })
  }

  closeAlert() {
    this.alert = false
  }
}
