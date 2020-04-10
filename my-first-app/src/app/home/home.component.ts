import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users : any;
  searchName:string="";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("https://api.github.com/users");
    resp.subscribe((data)=>this.users=data);
  }

}
