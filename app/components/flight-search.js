import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('servlet'),
    init(){
    	this._super(...arguments);
    	this.set('noResponse' , false);
    },
    didReceiveAttrs() {

    this.set('minDate',moment().toDate());
        let store = this.get('store');
        store.getDropdownValues().then((response) => {
			this.set('dropdownval', response);
        });
        store.getDropdownValuesTo().then((response) => {
			this.set('dropdownval1', response);
        });
		// store.getFlights().then((response) => {
		// 	this.set('flights', response);
		// });
         
  },
  actions: {
    setAddress(selected) {this.set('selectedAddress', selected); },
	setToLocation(selected) {this.set('selectedAddress1', selected) },
	setFromDate(selected) {this.set('fromDateValue', selected); },
	setToDate(selected) {this.set('toDateValue', selected); },
	searchFlightBtn() {let store = this.get('store'); var fromValue = this.get('selectedAddress');
	var toValue = this.get('selectedAddress1');
	var testStartDate = this.get('fromDateValue');
	if(testStartDate){
	testStartDate = moment(testStartDate).format('DD/MM/YYYY'); }
	var testEndDate = this.get('toDateValue');
	if(testEndDate){
	testEndDate = moment(testEndDate).format('DD/MM/YYYY'); }
	var toStart = testStartDate;
	var toEnd = testEndDate; 
	var data = {'from': fromValue.id, 'to': toValue.id, 'startDate': toStart, 'endDate': toEnd}
	store.getFlights(data).then((response) => {
		if(response.length === 0){
		 	this.set('noResponse' , true);
		 }

	this.set('flights', response);
	});
	}
  }
});
