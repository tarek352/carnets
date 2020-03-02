import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {
  showDetails=false;
  carnet=true;
  profile:any; 
  searchProfile: string;
  searchText: string = null;
  Profils = [ 
    {name:"tarak" , number: "0123456"},
    {name:"lyes" , number:"0147852"},
    {name:"mahmoud", number:"0142587"},
    {name:"chaima" , number:"0258963"},
    {name:"hamza" , number:"0123654"},
    {name:"aziz" , number:"0369852"},
    {name:"youssef" , number:"0258852"},
    {name:"mahdi" , number:"0120120"},
    {name:"omar" , number:"01201452"},
    {name:"sofi" , number:"0145213"}

  ];
  constructor() { }
 
  ngOnInit() {
  }
getDetails(data){
  this.showDetails = true;
  this.carnet = false;
  this.profile = data;
}
}
