import { Component } from '@angular/core';
import * as _ from 'lodash';
import { PaginationInstance } from 'ngx-pagination';
import { PlayerService } from '../../data/user.service';
import { Player } from '../../models/player.model';

@Component({
	selector: 'app-ranking',
	templateUrl: './ranking.component.html',
	styleUrls: ['./ranking.component.scss'],
	providers: [PlayerService]
})
export class RankingComponent {

	protected players: Player[];
	protected config: PaginationInstance;
	protected fieldname: string;
	protected order: string;

	constructor(private playerService: PlayerService) {

		this.config = {
			id: 'players',
			itemsPerPage: 10,
			currentPage: 1
		};

		this.playerService.getAllPlayers().subscribe(
			result => {
				this.players = result as Array<Player>;
				this.config.totalItems = this.players.length;
			});
	}

	sortRanking(fieldname, order) {
		this.fieldname = fieldname;
		this.order = order;

		this.players = _.orderBy(this.players, fieldname, order);
	}

	onPageChange(number: number) {
		this.config.currentPage = number;
	}
}
