import { Component, NgModule, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  constructor(private event:EventService) { }
  collection: any = {};

  ngOnInit(): void {
    this.event.getList().subscribe((result: any) => {
      console.warn(result)
      this.collection = result
    })
  }
  deleteEvent(item: any){
    this.collection.splice(item-0, 1)

    this.event.deleteEvent(item).subscribe((result) => {
      console.warn("result", result);
    })
  }
}
