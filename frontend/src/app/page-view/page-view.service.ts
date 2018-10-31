import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PageViewService {

	constructor(private httpClient: HttpClient) {
	}

	getCheckoutByPeriod(startDate: number) {
		return this.httpClient.get(`${environment.api}/pageViews?pageType=checkout&datetime_gte=${startDate}`);
	}

	getPageViewsByPeriod(startDate: number) {
		return this.httpClient.get(`${environment.api}/pageViews?datetime_gte=${startDate}`);
	}
}
