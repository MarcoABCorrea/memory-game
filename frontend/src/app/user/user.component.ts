import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayerService } from '../data/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [PlayerService]
})
export class UserComponent implements OnInit {

  private player: Player = new Player();

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  saveUser() {
    console.log('pei ', this.player);
    this.playerService.createOrUpdatePlayer(this.player);
  }
}
