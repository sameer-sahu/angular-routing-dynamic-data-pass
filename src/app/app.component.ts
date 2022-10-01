import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route-data-pass-test';
  public user: {id: number, role: string} = {
    id: 1,
    role: 'admin'
  };

  public constructor(private router: Router) {
    
  }

  onClick() {
    console.log("Hii");
    this.router.navigateByUrl("/dashboard", { state: this.user });
  }
}
