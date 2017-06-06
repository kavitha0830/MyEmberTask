import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [
		{
			icon: "1",
			id: "box1",
			image: "/assets/icon-industry-refining.png",
			content:"Refining industry"
		},
		{
			icon: "2",
			id: "box2",
			image: "/assets/images.png",
			content:"Gold mining"
		},
		{
			icon: "3",
			id: "box3",
			image: "/assets/icon-refining.png",
			content: "Refining"
		},
		{
			icon: "4",
			id: "box4",
			image: "/assets/icon-industry-drilling.png",
			content: "Drilling industry"
		},
		{
			icon: "5",
			id: "box5",
			image: "/assets/transmission-gas-icon.png",
			content: "Pipelines"
		},
		{
			icon: "6",
			id: "box6",
			image: "/assets/terminals-natural-gas-icon.png",
			content: "Oil and Gas"
		},
		{
			icon: "7",
			id: "box7",
			image: "/assets/oil-spills.png",
			content: "Oil spills"
		},
		{
			icon: "8",
			id: "box8",
			image: "/assets/production-natural-gas-icon.png",
			content: "Natural gas"
		}
		];
	}
});
