import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Player } from '../models/player.model';

@Injectable()
export class PlayerService {

  constructor(private httpClient: HttpClient) {
	}

	createOrUpdatePlayer(player: Player) {		
		return this.httpClient.post(`${environment.api}/`, player);
	}

	getAllPlayers() {
		return this.httpClient.get(`${environment.api}/`);
	}

	getPlayer(player: Player) {
		return this.httpClient.get(`${environment.api}/${player.id}`);
	}
}
