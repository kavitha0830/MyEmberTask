import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		let parentModel = this.modelFor('bgbPods');
		parentModel.forEach(function(list){
				if(params.pod_id == list.id){
					parentModel= list;
				}
			})
		return parentModel;
	}
});
