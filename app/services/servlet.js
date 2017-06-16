import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  namespace: '/api',
  getDropdownValues() {
      //ToDo: need to make the request properly and hit the proper servlet
    return this.request('/getdropdownfrom', {
      method: 'GET',
    }).then((response) => {
      return response.data;
    }).catch(() => {
      return undefined;
    });
  },

  getDropdownValuesTo() {
      //ToDo: need to make the request properly and hit the proper servlet
    return this.request('/getdropdownTo', {
      method: 'GET',
    }).then((response) => {
      return response.data;
    }).catch(() => {
      return undefined;
    });
  },

  getFlights(data) {
      //ToDo: need to make the request properly and hit the proper servlet
    return this.request('/flightDetails', {
      method: 'GET',
      data: data
    }).then((response) => {
      return response.data;
    }).catch(() => {
      return undefined;
    });
  }

});