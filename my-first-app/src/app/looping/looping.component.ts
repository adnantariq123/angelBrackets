import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-looping',
  imports: [CommonModule],
  templateUrl: './looping.component.html',
  styleUrl: './looping.component.scss'
})


export class LoopingComponent implements OnInit {
  FakeData: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() { // ngOnInit works as Angular’s “componentDidMount / useEffect([] in React.js
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (res) => {
          this.FakeData = res;
          console.log('Fetched data:', this.FakeData);
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        }
      });
  }
}
