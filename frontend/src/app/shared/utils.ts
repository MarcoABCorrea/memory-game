export class Utils {
	public static AZUL = 'rgba(26, 144, 244, 0.7)';
	public static VERDE = 'rgba(37, 180, 62, 0.7)';
	public static VERMELHO = 'rgba(255, 7, 7, 0.7)';
	public static AMARELO = 'rgba(227, 221, 34, 0.7)';
	public static ROXO = 'rgba(135, 2, 219, 0.7)';
	public static LARANJA = 'rgba(255, 129, 0, 0.7)';
	public static MARROM = 'rgba(131, 71, 31, 0.7)';
	public static ROSA = 'rgba(245, 112, 132, 0.7)';
	public static AZUL_ESCURO = 'rgba(12, 49, 183, 0.7)';
	public static VERDE_CLARO = 'rgba(14, 204, 169, 0.7)';
	public static AMARELO_ESCURO = 'rgba(255, 200, 0, 0.7)';

	/**
	 * Purpose: Default colors for charts.
	 *
	 * @returns {Array<any>}
	 */
	public static getColors(): Array<any> {
		return [
			Utils.AZUL,
			Utils.VERDE,
			Utils.VERMELHO,
			Utils.AMARELO,
			Utils.ROXO,
			Utils.LARANJA,
			Utils.AZUL_ESCURO,
			Utils.MARROM,
			Utils.ROSA,
			Utils.VERDE_CLARO,
			Utils.AMARELO_ESCURO
		];
	}

	/**
	 * Purpose: Default chart color options
	 * @param colors the colors of the chart, if not is passed the default colors is going to be used
	 * Used on Doughnut and Pie charts
	 * @returns {Array<any>}
	 */
	public static getColorsOptions(colors: Array<string> = Utils.getColors()): Array<any> {
		return [
			{
				backgroundColor: colors,
				borderColor: 'rgba(43, 43, 43, 0.2)',
				borderWidth: 1,
				hoverBackgroundColor: undefined,
				hoverBorderColor: 'rgba(43, 43, 43, 0.5)',
				hoverBorderWidth: 2,
				maintainAspectRatio: false
			}
		];
	}

	/**
	 * Purpose: Default chart color options
	 * @param colors the colors of the chart, if not is passed the default colors is going to be used
	 * Used on Line and Bar Charts
	 * @returns {Array<any>}
	 */
	public static getColorsOptionsForLineChart(): Array<any> {
		return [
			{
				backgroundColor: Utils.getColors()[0],
				borderColor: 'rgba(43, 43, 43, 0.2)',
				borderWidth: 1,
				hoverBackgroundColor: undefined,
				hoverBorderColor: 'rgba(43, 43, 43, 0.5)',
				hoverBorderWidth: 2,
				maintainAspectRatio: false
			}, {
				backgroundColor: Utils.getColors()[1],
				borderColor: 'rgba(43, 43, 43, 0.2)',
				borderWidth: 1,
				hoverBackgroundColor: undefined,
				hoverBorderColor: 'rgba(43, 43, 43, 0.5)',
				hoverBorderWidth: 2,
				maintainAspectRatio: false
			},
			{
				backgroundColor: Utils.getColors()[2],
				borderColor: 'rgba(43, 43, 43, 0.2)',
				borderWidth: 1,
				hoverBackgroundColor: undefined,
				hoverBorderColor: 'rgba(43, 43, 43, 0.5)',
				hoverBorderWidth: 2,
				maintainAspectRatio: false
			},
			{
				backgroundColor: Utils.getColors()[3],
				borderColor: 'rgba(43, 43, 43, 0.2)',
				borderWidth: 1,
				hoverBackgroundColor: undefined,
				hoverBorderColor: 'rgba(43, 43, 43, 0.5)',
				hoverBorderWidth: 2,
				maintainAspectRatio: false
			}
		];
	}

	/**
	 * Purpose: Options for bar and line charts
	 * @param {string} legend position in which the legend will be displayed (use null if you don't want to display the legend)
	 * @param {number} min is the minimum value of the chart
	 * @param {number} stepSize is the incremental value for the chart
	 * @returns {any}
	 */
	public static getChartOptions(legend: string, min: number, stepSize: number): any {
		return {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: false,
						min: min,
						stepSize: stepSize
					}
				}]
			},
			legend: {
				position: legend
			}
		};
	}
}
