import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { PlayerService } from '../data/user.service';
import { getGameCards, CARD_BACK } from '../models/card-info.model';
import { Card } from '../models/card.model';
import { Player } from '../models/player.model';
import { Status } from '../models/status.enum';
import swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [PlayerService],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('.3s', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('.3s', style({opacity: 0}))
      ])
    ])
  ]
})
export class GameComponent {

  currentPlayer: Player;
  backCard: Card = CARD_BACK;
  cards: Card[] = [];
  status: Status = Status.NoCardsFlipped;
  lastCardFlipped: Card;
  cardsCaptured: number = 0;  

  constructor(private playerService: PlayerService, private router: Router) { 
    this.currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
    this.cards = getGameCards();
  }

  gameOver() {
    localStorage.clear();
    this.playerService.createOrUpdatePlayer(this.currentPlayer).subscribe();
    swal({
      title: 'GAME OVER!',
      text: `${this.currentPlayer.name} you finished the game in ${this.currentPlayer.tries} moves!`,
      type: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OKAY!'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/']);
      }
    })
  }

  flip(card: Card) {
    if (this.status === Status.NoCardsFlipped) {
      this.lastCardFlipped = card;
      card.flipped = true;
      this.status = Status.OneCardFlipped;
    } else if (this.status == Status.OneCardFlipped) {
      if (this.lastCardFlipped && this.lastCardFlipped.randomValue === card.randomValue) {
        return;
      }
      card.flipped = true;
      this.status = Status.TwoCardsFlipped;
      this.currentPlayer.tries ++;
      setTimeout(() => {
        if (card.name === this.lastCardFlipped.name) {
          card.captured = true;
          this.lastCardFlipped.captured = true;
          this.lastCardFlipped = null;
          this.cardsCaptured += 2;
          
          if (this.cardsCaptured == this.cards.length) {
            this.gameOver();
          }
        } else {
          card.flipped = false;
          this.lastCardFlipped.flipped = false;
          this.lastCardFlipped = null;
        }
        this.status = Status.NoCardsFlipped;
      }, 500);
    } else if (this.status == Status.TwoCardsFlipped) {
      return;
    }
  }
}
