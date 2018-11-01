import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PlayerService } from '../data/user.service';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [PlayerService]
})
export class UserComponent implements OnInit {

  private player: Player = new Player();

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  }

  saveUser() {    
    this.playerService.createOrUpdatePlayer(this.player).subscribe(
			result => {
        this.player = result as Player;
        localStorage.setItem('currentPlayer', JSON.stringify(this.player));
        this.router.navigate(['/game']);
			});
  }
}
