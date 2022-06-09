import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title:string ='compenent home';
user:User ={
  id:1,
  nume: 'dan',
  prenume:'popesco',
};
image:string='https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/94945631828bfdcf32a8ad0b79978913.png';
showImage: boolean =true;
  constructor() { }

  ngOnInit(): void {
  

}
afImage(){
  this.showImage =!this.showImage;
};
};