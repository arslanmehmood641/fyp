import { Component, OnInit } from '@angular/core';
import { HallsService } from '../Services/halls.service';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
halls;
  constructor( private hall:HallsService) { }

  ngOnInit() {
    this.hall.getHalls().subscribe(halls=>{
      this.halls=halls;
    })

  }

}
