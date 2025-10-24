import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// httpClient - Angular service for making HTTP calls


type userType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
  };
  phone: string;
  website: string;
  company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
}
type userTypeArray = userType[] | null

// Type declarations (type userType) cannot be placed between the decorator and the class — 
// ALWAYS put them above the decorator or in a separate file.

@Component({
  selector: 'app-looping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './looping.component.html',
  styleUrl: './looping.component.scss'
})

export class LoopingComponent implements OnInit {
 // implements OnInit - This tells typeScript this class(LoopingComponent) MUST have a ngOnInit() used inside it 
 // or else it will trow a compile-time error. We could have written the class with implements OnInit as well.


  FakeData: userTypeArray = null;

  constructor(private Jimmy: HttpClient) {}
  // private Jimmy: HttpClient - give us an instance of HttpClient from your injector... and I named it Jimmy for Demo learning.
  // private - Makes it a class property, and you can name it whatever like Jimmy, BUT to be more profesional name it http next time :)

  
  // ngOnInit works as “componentDidMount / useEffect([] in React.js
  ngOnInit() { 
    this.Jimmy.get<userTypeArray>('https://jsonplaceholder.typicode.com/users')
    // this.Jimmy.get () returns an Observable — a lazy data stream that only runs when you subscribe

      .subscribe({
        // .subscribe actually starts the async operation (the HTTP request)
        next: (res) => { // next is called when a new value arrives
          this.FakeData = res;
          console.log('Fetched data:', this.FakeData);
        },
        error: (err) => { // error is called when something goes wrong
          console.error('Error fetching data:', err);
        },

        // complete: Called when the stream finishes

        // try/catch/finally → handles a single synchronous or awaited async operation.
        // subscribe() → can handle a stream of multiple asynchronous events (like live updates, websockets, etc.)
        // subscribe is used for streaming.
      });
  }
}


