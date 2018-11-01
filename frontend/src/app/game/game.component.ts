import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../data/user.service';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [PlayerService]
})
export class GameComponent implements OnInit {

  currentPlayer: Player;

  constructor(private playerService: PlayerService) { 
    this.currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
    this.playerService.getPlayer(this.currentPlayer).subscribe(
			result => {
        console.log('res ', result);
      });
  }

  ngOnInit() {
  }

}
