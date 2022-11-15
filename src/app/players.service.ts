import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  getRankings(){
    return [
      { "player": "Carlos Alcaraz", "points": 6820, "age" : 19, "tournPlayed" : 17},
      { "player": "Rafael Nadal", "points": 5820, "age" : 36, "tournPlayed" : 13},
      { "player": "Stefanos Tsisipas", "points": 5350, "age" : 24, "tournPlayed" : 22},
      { "player": "Casper Ruud", "points": 5020, "age" : 23, "tournPlayed" : 22},
      { "player": "Daniil Medvedev", "points": 4065, "age" : 26, "tournPlayed" : 20},
      { "player": "Felix Auger-Aliassime", "points": 3995, "age" : 22, "tournPlayed" : 25},
      { "player": "Andrey Rublev", "points": 3530, "age" : 25, "tournPlayed" : 22},
      { "player": "Novak Djokovic", "points": 3320, "age" : 35, "tournPlayed" : 13},
      { "player": "Taylor Fritz", "points": 2955, "age" : 25, "tournPlayed" : 21},
      { "player": "Holger Rune", "points": 2911, "age" : 19, "tournPlayed" : 29}
    ]
  }

  getPlayers(){
    return ["Carlos Alcaraz", "Rafael Nadal", "Stefanos Tsisipas"]
  }

  getPoints(){
    return ["6820", "5820", "5350"]
  }
}
