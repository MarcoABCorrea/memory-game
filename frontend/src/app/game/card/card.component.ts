import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() info: any

  @Output() flipped = new EventEmitter()

  backCard: any

  constructor() {
    // this.backCard = CARDS.find(c => c.name === 'back')
  }

  flip(info: any) {
    if (info.flipped) {
      return
    }
    this.flipped.emit(info)
  }

}
