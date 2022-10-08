import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventService {
url = "http://localhost:3000/event"
rootUrl = "http://localhost:3000/"
  constructor(private http: HttpClient) { }
  getList()
  {
    return this.http.get(this.url);
  }
  saveEvent(data: any)
  {
    // console.warn("Service", data);
    return this.http.post(this.url,data)
  }
  deleteEvent(id: any){
    return this.http.delete(`${this.url}/${id}`)
  }

  getCurrentEvent(id: any)
  {
    return this.http.get(`${this.url}/${id}`)
  }

  updateEvent(id: any, data: any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }

  registerUser(data: any){
    return this.http.post(this.rootUrl+ "Users", data);
  }

  loginUser(data: any){
    return this.http.get(this.rootUrl+ "Users", data);
  }
}
