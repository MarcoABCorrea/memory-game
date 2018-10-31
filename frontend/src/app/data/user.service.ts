import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
	}

	getUserData() {
		return this.httpClient.get(`${environment.api}/`);
	}

}
