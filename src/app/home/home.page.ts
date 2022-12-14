import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  features: any[]=[
          
          {id:1, name:"Top-Up", src:'assets/icons/top-up.png',background: 'rgba(27,150,181,0.1)' , page:''},
    {id:1, name:"Withdraw", src:'assets/icons/cash-withdrawel.png',  background: 'rgba(34,36,40,0.1)',page:''},
    {id:1, name:"Send", src:'assets/icons/send.png', background: 'rgba(255,196,9,0.1)', page:''},
    {id:1, name:"Pay", src:'assets/icons/debit-card.png',background: 'rgba(45,211,111,0.1)', page:''},
  ];

  transactions:any[]=[
    {id:1,vendor:'Received from PhonePe',image:'',amount:1500, time: '3:00PM'},
    {id:2,vendor:'Flaticons',image:'',amount:-1200,time: '3:00PM'}
  ];

  constructor() {}

}
