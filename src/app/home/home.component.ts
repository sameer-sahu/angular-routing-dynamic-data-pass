import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users = [
    {
      id: 1,
      role: 'admin',
      name: 'Sameer'
    },
    {
    id: 2,
    role: 'super-admin',
    name: 'Tani'
  }
  ];

  public constructor(private router: Router) {
    
  }
  
  ngOnInit(): void {
  }

  onClickEdit(id: number) {
    let user = this.users.find(user => user.id == id);
    this.router.navigateByUrl("/dashboard", { state: user });
  }
}
