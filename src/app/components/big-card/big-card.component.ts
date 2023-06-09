import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  profilePhoto: string="";
  @Input()
  profileText: string="";
  @Input()
  profileTitle: string="";
  @Input()
  skills!: string;
  ngOnInit(): void {
    
  }
  constructor(){}
}
