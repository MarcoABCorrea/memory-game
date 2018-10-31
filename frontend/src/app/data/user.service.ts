import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Player } from '../models/player.model';

@Injectable()
export class PlayerService {

  constructor(private httpClient: HttpClient) {
	}

	getPlayerData() {
		return this.httpClient.get(`http://localhost:8080/`, {responseType: 'text'});
	}

	createOrUpdatePlayer(player: Player) {
		return this.httpClient.put(`${environment.api}/`, player);
	}

}
