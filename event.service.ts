import { Injectable } from '@angular/core';
import { Event } from './event'

declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): Promise<Event[]> {
    return new Promise((resolve, reject) => {
      var events = [];
      FB.api('/me','GET',{"fields":"events"},
        function(response) {
          let data = response.events.data;
          console.log(data);
          for (var i = 0; i < data.length; i++){
            var obj = data[i];
            let event = {
              name: obj.name,
              description: obj.description,
              // place_name: obj.place.name != null ? obj.place.name : '',
              // place_address: obj.place.location.city,
              start_time: obj.start_time,
              rsvp_status: obj.rsvp_status
            }
            console.log(event);
            events.push(event);
          }
          resolve(events);
        });
    });
  }
}
