import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HttpClientModule, CommonModule],
  template: `
    <div class="app-container">
      <h1>Demo web Angular</h1>
      <div *ngIf="error" style="color: red;">
        <p>Error: {{ error }}</p>
      </div>
      <div *ngIf="data?.length > 0">
        <h2>Danh sách người dùng:</h2>
        <div class="grid-container">
          <div class="grid-item" *ngFor="let song of data">
            <img [src]="imageUrl" alt="{{ song.Name }}" />
            <div class="song-title">{{ song.Name }}</div>
            <div class="song-description">{{ song.Description }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'] // Đảm bảo có file style này
})
export class AppComponent {
  data: any;
  error: string | null = null;
  imageUrl = 'https://i.scdn.co/image/ab67616d0000b273e623dffa87176f17458e71e5';

  constructor(private http: HttpClient) {
    this.callAPI();
  }

  callAPI(): void {
    this.http.get<any[]>('https://6707fad88e86a8d9e42dae05.mockapi.io/api/nhac/getAllsongs')
      .subscribe({
        next: (response) => {
          this.data = response;
          this.error = null; // Reset error on success
          console.log(this.data);
        },
        error: (err) => {
          this.error = 'Có lỗi xảy ra khi gọi API: ' + err.message;
          this.data = []; // Reset data on error
        }
      });
  }
}
