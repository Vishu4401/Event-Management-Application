import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
// import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  alert:boolean = false;
  editEvent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })

  constructor(private router: ActivatedRoute, private event:EventService) { 
  }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.event.getCurrentEvent(this.router.snapshot.params['id']).
    subscribe((result: any) =>
    {
      this.editEvent = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address']),
      })
    })
  }

  collection()
  {
    console.warn(this.editEvent.value);
    this.event.updateEvent(this.router.snapshot.params['id'], this.editEvent.value).subscribe((result) => 
      this.alert=true
    )
  }
  closeAlert() {
    this.alert=false
  }
}
