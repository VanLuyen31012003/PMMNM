import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Input() title: string = '';
  @Output() truyengiatri= new EventEmitter();
  ftruyengiatri()
  {
     let so=5;
     this.truyengiatri.emit(so);
  }
}
