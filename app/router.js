import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	//routing pod details
  this.route('bgbPods', function() {
    this.route('details',{'path' : '/:pod_id'});
  });
});

export default Router;
