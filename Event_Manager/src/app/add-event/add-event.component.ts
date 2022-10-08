import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { EventService } from '../event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  alert:boolean = false

  addEvent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })
  constructor(private event:EventService) { }

  ngOnInit(): void {
  }

  collectEvent()
  {
    this.event.saveEvent(this.addEvent.value).subscribe((result) =>{
      this.alert=true
      this.addEvent.reset({})
    })
  }

  closeAlert()
  {
    this.alert=false
  }
}
