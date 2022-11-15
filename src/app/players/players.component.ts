import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players; 
  points; 
  rankings; 

  constructor(service: PlayersService) { 
    this.players = service.getPlayers();
    this.points = service.getPoints();
    this.rankings = service.getRankings();
  }

  ngOnInit(): void {
  }

}
