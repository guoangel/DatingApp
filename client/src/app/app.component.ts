import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.setCurrentUser();
  }

  title = 'client';
  users: any;

  constructor(private accountService: AccountService) {}

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user') ?? '{}');
    if (user) {
      this.accountService.setCurrentUser(user);
    }

  }
}
