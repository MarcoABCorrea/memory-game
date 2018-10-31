import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProdutosService {

	constructor(private httpClient: HttpClient) {
	}

	getProducts(): Observable<any> {
		return this.httpClient.get(`${environment.api}/products?_sort=name&_order=asc_limit=10`, {observe: 'response'});
	}

	getProductsOffset(start: number, sort = 'name', order = 'asc') {
		return this.httpClient.get(`${environment.api}/products?_sort=${sort}&_order=${order}_limit=10&_start=${start}`);
	}
}
