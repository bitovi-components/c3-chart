import DefineMap from "can-define/map/map";

export default DefineMap.extend({
	chart: {
		value: null
	},
	/**
	 * Dom element that chart will be bound to.
	 */
	graphBaseElement: {
		type: '*'
	},
	/**
	 * Full config for axis.
	 */
	axis: {
		type: '*'
	},
	/**
	 * Config param for x-axis type.
	 */
	axisXType: 'string',
	/**
	 * Config object that c3 chart will be generated with.
	 */
	config: {
		get () {
			let config = {
				bindto: this.graphBaseElement,
				data: {
					columns: []
				}
			};
			if (this.axisXType){
				config.data.x = 'x';
				config.axis = {
					x: {
						type: this.axisXType
					}
				}
			}
			if (this.axis) {
				config.data.x = 'x';
				config.axis = this.axis;
			}
			return config;
		}
	}
});