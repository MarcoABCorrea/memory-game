import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PurchaseService {

	constructor(private httpClient: HttpClient) {
	}

	getPurchasesByPeriod(startDate: number, endDate: any = '') {
		if (endDate !== '') {
			endDate = '&datetime_lte=' + endDate;
		}
		return this.httpClient.get(`${environment.api}/purchases?purchaseStatus=approved&datetime_gte=${startDate}${endDate}`);
	}
}
