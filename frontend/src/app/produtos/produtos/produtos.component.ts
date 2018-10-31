import {Component, OnInit} from '@angular/core';
import {ProdutosService} from '../produtos.service';
import {Produto} from '../../models/produto.model';
import {default as swal} from 'sweetalert2';
import {PaginationInstance} from 'ngx-pagination';

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.component.html',
	styleUrls: ['./produtos.component.scss'],
	providers: [ProdutosService]
})
export class ProdutosComponent implements OnInit {

	protected produtos: Produto[];
	protected config: PaginationInstance;
	protected fieldname: string;
	protected order: string;

	constructor(private produtosService: ProdutosService) {
		this.produtosService.getProducts().subscribe(
			(response) => {
				const totalItems = +response.headers.get('x-total-count');
				this.produtos = response.body as Produto[];

				this.config = {
					id: 'produtos',
					itemsPerPage: 10,
					currentPage: 1,
					totalItems: totalItems
				};
			},
			() => {
				swal('Erro!', 'Ocorreu um erro ao retornar Produtos!', 'error');
			});
	}

	ngOnInit() {
	}

	sortProducts(fieldname, order) {
		this.fieldname = fieldname;
		this.order = order;
		this.onPageChange(1);
	}

	onPageChange(number: number) {
		this.produtosService.getProductsOffset((number - 1) * this.config.itemsPerPage, this.fieldname, this.order).subscribe(
			(response: Array<Produto>) => {
				this.produtos = response;
				this.config.currentPage = number;
			},
			() => {
				swal('Erro!', 'Ocorreu um erro ao retornar Produtos!', 'error');
			});
	}
}
