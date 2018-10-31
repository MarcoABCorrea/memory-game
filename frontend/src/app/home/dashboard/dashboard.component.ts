import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {PageViewService} from '../../page-view/page-view.service';
import {PurchaseService} from '../../purchase/purchase.service';
import {Utils} from '../../shared/utils';
import * as moment from 'moment';
import {default as swal} from 'sweetalert2';
import {AuthService} from '../../auth.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	providers: [PageViewService, PurchaseService]
})
export class DashboardComponent implements OnInit {

	protected hasPermission = AuthService.hasPermission();

	// Chart colors
	protected chartColors = Utils.getColorsOptions();
	protected lineChartColors = Utils.getColorsOptionsForLineChart();

	// Purchase
	protected burnDownOptions = Utils.getChartOptions('left', 500, 50);
	protected showBurnDownChart = false;
	protected deviceData: number[] = [];
	protected deviceLabels: string[] = [];
	protected burnDownData: Array<any> = [];
	protected burnDownLabels: string[] = [];

	// Checkout
	protected checkoutOptions = Utils.getChartOptions('top', 0, 20);
	protected showCheckoutChart = false;
	protected checkoutData: Array<any> = [];
	protected checkoutLabels: string[] = [];

	// Conversion
	protected conversionOptions = Utils.getChartOptions(null, 0, 20);
	protected showConversionChart = false;
	protected conversionData: Array<any> = [];
	protected conversionLabels: string[] = [];

	constructor(private pageViewService: PageViewService,
				private purchaseService: PurchaseService) {
		moment.locale('pt-br');
		this.getLast30DaysPurchases();
		this.getBurnDownChartData();
		this.getCheckoutChartData();
		this.getPageViewsByPeriod();
	}

	ngOnInit() {
	}

	getLast30DaysPurchases() {
		const today = moment().valueOf();
		const last30days = moment(today).subtract(30, 'day').valueOf();
		this.purchaseService.getPurchasesByPeriod(last30days, today).subscribe(
			(response) => {
				const devices = _.countBy(response, 'device');

				_.keys(devices).map((label) => {
					this.deviceLabels.push(_.capitalize(label));
				});

				this.deviceData = _.values(devices);
			}, () => {
				swal('Erro!', 'Ocorreu um erro ao retornar Vendas!', 'error');
			});
	}

	getBurnDownChartData() {
		const thisMonth = moment().startOf('month');
		const referenceMonth = moment(thisMonth).subtract(2, 'month');

		this.purchaseService.getPurchasesByPeriod(referenceMonth.valueOf()).subscribe(
			(response: Array<any>) => {

				for (let i = 2; i >= 0; i--) {
					this.burnDownLabels.push(_.capitalize(moment(thisMonth).subtract(i, 'month').format('MMMM')));
				}

				const data = {};

				for (const purchase of response) {
					const date = moment(purchase.datetime).format('MM');

					if (!data[purchase.device]) {
						data[purchase.device] = {first: 0, second: 0, third: 0};
					}

					if (date === referenceMonth.format('MM')) {
						data[purchase.device].first++;
					} else if (date === moment(thisMonth).subtract(1, 'month').format('MM')) {
						data[purchase.device].second++;
					} else if (date === thisMonth.format('MM')) {
						data[purchase.device].third++;
					}
				}

				_.keys(data).map((device, i) => {
					this.burnDownData[i] = {data: _.values(data[device]), label: _.capitalize(device)};
				});

				this.showBurnDownChart = true;
			}, () => {
				swal('Erro!', 'Ocorreu um erro ao retornar Vendas por período!', 'error');
			});
	}

	getCheckoutChartData() {
		const thisMonth = moment().startOf('month');
		const referenceMonth = moment(thisMonth).subtract(2, 'month');

		this.pageViewService.getCheckoutByPeriod(referenceMonth.valueOf()).subscribe(
			(response: Array<any>) => {

				for (let i = 2; i >= 0; i--) {
					this.checkoutLabels.push(_.capitalize(moment(thisMonth).subtract(i, 'month').format('MMMM')));
				}

				const dataTotal = {};

				for (const checkout of response) {
					const date = moment(checkout.datetime).format('MM');

					if (!dataTotal[checkout.trafficOrigin]) {
						dataTotal[checkout.trafficOrigin] = {first: 0, second: 0, third: 0};
					}

					if (date === referenceMonth.format('MM')) {
						dataTotal[checkout.trafficOrigin].first++;
					} else if (date === moment(thisMonth).subtract(1, 'month').format('MM')) {
						dataTotal[checkout.trafficOrigin].second++;
					} else if (date === thisMonth.format('MM')) {
						dataTotal[checkout.trafficOrigin].third++;
					}
				}

				const totalFirst = _.sumBy(_.values(dataTotal), 'first');
				const totalSecond = _.sumBy(_.values(dataTotal), 'second');
				const totalThird = _.sumBy(_.values(dataTotal), 'third');
				const dataPercentage = {};
				_.keys(dataTotal).map((trafficOrigin) => {
					dataPercentage[trafficOrigin] = {
						first: this.getPercentage(dataTotal[trafficOrigin].first, totalFirst),
						second: this.getPercentage(dataTotal[trafficOrigin].second, totalSecond),
						third: this.getPercentage(dataTotal[trafficOrigin].third, totalThird)
					};
				});

				_.keys(dataPercentage).map((trafficOrigin, i) => {
					this.checkoutData[i] = {data: _.values(dataPercentage[trafficOrigin]), label: _.capitalize(trafficOrigin)};
				});

				this.showCheckoutChart = true;
			}, () => {
				swal('Erro!', 'Ocorreu um erro ao retornar page views!', 'error');
			}
		);
	}

	getPercentage(value: number, total: number) {
		return Number((value / total) * 100).toFixed(2);
	}

	getPageViewsByPeriod() {
		const thisMonth = moment().startOf('month');
		const referenceMonth = moment(thisMonth).subtract(2, 'month');

		this.pageViewService.getPageViewsByPeriod(referenceMonth.valueOf()).subscribe(
			(response: Array<any>) => {

				for (let i = 2; i >= 0; i--) {
					this.conversionLabels.push(_.capitalize(moment(thisMonth).subtract(i, 'month').format('MMMM')));
				}

				const data = {};

				for (const pageView of response) {
					const date = moment(pageView.datetime).format('MM');

					if (!data[pageView.pageType]) {
						data[pageView.pageType] = {first: 0, second: 0, third: 0};
					}

					if (date === referenceMonth.format('MM')) {
						data[pageView.pageType].first++;
					} else if (date === moment(thisMonth).subtract(1, 'month').format('MM')) {
						data[pageView.pageType].second++;
					} else if (date === thisMonth.format('MM')) {
						data[pageView.pageType].third++;
					}
				}

				const totalFirst = this.getPercentage(data['checkout'].first, data['purchase'].first);
				const totalSecond = this.getPercentage(data['checkout'].second, data['purchase'].second);
				const totalThird = this.getPercentage(data['checkout'].third, data['purchase'].third);

				this.conversionData[0] = {data: [totalFirst, totalSecond, totalThird], label: 'Conversão'};

				this.showConversionChart = true;
			}, () => {
				swal('Erro!', 'Ocorreu um erro ao retornar page views!', 'error');
			});
	}
}
