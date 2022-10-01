import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../modal/User';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  public user: any;
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.user = this.location.getState();
  }

}
