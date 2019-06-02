import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user'
// import { HttpClient } from '@angular/common/http';
// import { Http, Response } from '@angular/http';

declare var FB: any;

@Injectable({
  providedIn: 'root'
})



export class AuthenticationService {


  constructor() { }


  getName(): Promise<User> {
    return new Promise((resolve, reject) => {
      FB.login(function(response) {
          if (response.authResponse) {
            var authResponse = response.authResponse;
            // console.log(user_id);
            FB.api('/me','GET',{"fields":"name, email"},
              function(response) {
                  let user = {
                    name: response.name,
                    id: response.id,
                    profile_pic: 'https://graph.facebook.com/' + response.id + '/picture?type=normal',
                    access_token: authResponse.accessToken,
                    email: response.email
                  }
                  resolve(user);
              }
            );
          } else {
           console.log('User cancelled login or did not fully authorize.');
          }
        },{scope: 'public_profile, email, user_events, user_photos'}
      );
    });
  }


}
