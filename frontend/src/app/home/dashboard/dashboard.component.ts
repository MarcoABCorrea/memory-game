import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { PaginationInstance } from 'ngx-pagination';
import { PlayerService } from '../../data/user.service';
import { Player } from '../../models/player.model';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	providers: [PlayerService]
})
export class DashboardComponent implements OnInit {

	protected players: Player[];
	protected config: PaginationInstance;
	protected fieldname: string;
	protected order: string;

	constructor(private playerService: PlayerService) {

		this.playerService.getPlayerData().subscribe(
			result => {
				console.log('res ', result);
			});

		this.players = [];
		let p1 = new Player();
		p1.name = 'marco';
		p1.tries = 20;

		let p2 = new Player();
		p2.name = 'pedro';
		p2.tries = 15;

		let p3 = new Player();
		p3.name = 'enzo';
		p3.tries = 8;
		
		let p4 = new Player();
		p4.name = 'maria';
		p4.tries = 25;

		this.players.push(p1);
		this.players.push(p2);
		this.players.push(p3);
		this.players.push(p4);
		
		this.config = {
			id: 'players',
			itemsPerPage: 10,
			currentPage: 1,
			totalItems: this.players.length
		};
	}

	ngOnInit() {
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
