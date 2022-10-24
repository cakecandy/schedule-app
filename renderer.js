//import { w2layout, w2sidebar, w2grid, query } from 'https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.es6.min.js'
//const { w2layout, w2sidebar, w2grid, query } = require('https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.es6.min.js')

let config = {
	layout: {
		name: 'layout',
		padding: 0,
		panels: [{
				type: 'left',
				size: 100,
				resizable: false,
				minSize: 35
			},
			{
				type: 'main',
				size: 950,
				minSize: 550
			}
		]
	},
	sidebar: {
		name: 'sidebar',
		nodes: [{
			id: 'views',
			text: 'Views',
			group: true,
			expanded: true,
			groupShowHide: false,
			nodes: [{
					id: 'developmentCycle',
					text: 'Develop',
					selected: true
				},
				{
					id: 'tracker',
					text: 'Tracker'
				},
				{
					id: 'weeklySchedule',
					text: 'Week'
				},
			],
			onCollapse(event) {
				event.preventDefault()
			}
		}],
		onClick(event) {
			switch (event.target) {
				case 'developmentCycle':
					layout.html('main', developmentCycle)
					break
				case 'tracker':
					layout.html('main', tracker)
					break

				case 'weeklySchedule':
					layout.html('main', weeklySchedule)
					break
			}
		}
	},
	developmentCycle: {
		name: 'developmentCycle',
		columns: [{
				field: 'recid',
				text: 'ID',
				size: '30px',
				sortable: true,
				resizable: false
			},
			{
				field: 'completion',
				text: '<div style="text-align: center;">&#10003;</div>',
				size: '10px',
				sortable: true,
				resizable: false,
				style: 'text-align: center',
				editable: {
					type: 'checkbox',
					style: 'text-align: center'
				}
			},
			{
				field: 'frequency',
				text: '<div style="text-align: center;">Freq.</div>',
				size: '50%',
				sortable: true,
				resizable: false,
				editable: {
					type: 'combo',
					items: ['Once', 'Daily', 'Weekly', 'Monthly']
				}
			},
			{
				field: 'category',
				text: '<div style="text-align: center;">Category</div>',
				size: '100',
				sortable: true,
				resizable: false,
				editable: {
					type: 'text'
				}
			},
			{
				field: 'requirement',
				text: '<div style="text-align: center;">Requirement</div>',
				size: '100',
				sortable: true,
				resizable: false,
				editable: {
					type: 'text'
				}
			},
			{
				field: 'design',
				text: '<div style="text-align: center;">Design</div>',
				size: '100',
				sortable: true,
				resizable: false,
				editable: {
					type: 'text'
				}
			},
			{
				field: 'development',
				text: '<div style="text-align: center;">Development</div>',
				size: '100',
				sortable: true,
				resizable: false,
				editable: {
					type: 'text'
				}
			},
			{
				field: 'testing',
				text: '<div style="text-align: center;">Testing</div>',
				size: '100%',
				sortable: true,
				resizable: false,
				editable: {
					type: 'text'
				}
			},
			{
				field: 'results',
				text: '<div style="text-align: center;">Results</div>',
				size: '100%',
				sortable: true,
				resizable: false,
				editable: {
					type: 'text'
				}
			}
		],
		records: [{
				recid: 1,
				completion: true,
				frequency: 'daily',
				category: 'clean',
				requirement: 'clean room',
				design: 'top to bottom',
				testing: 'none',
				results: 'none'
			},
			{
				recid: 2,
				completion: false,
				category: 'hw',
				requirement: 'acting',
				design: 'read chapters first',
				testing: 'none',
				results: 'none'
			},
			{
				recid: 3,
				completion: true,
				frequency: 'weekly',
				category: 'clean',
				requirement: 'clean room',
				design: 'top to bottom',
				testing: 'none',
				results: 'none'
			},
			{
				recid: 4,
				completion: true,
				frequency: 'monthly',
				category: 'clean',
				requirement: 'clean room',
				design: 'top to bottom',
				testing: 'none',
				results: 'none'
			}
		],
		onClick(event) {

		}
	},
	tracker: {
		name: 'tracker',
		columns: [{
				field: 'recid',
				text: 'ID',
				size: '30px',
				sortable: true,
				resizable: false
			},
			{
				field: 'item',
				text: '<div style="text-align: center;">Item</div>',
				size: '100px'
			},
			{
				field: 'sunday',
				text: '<div style="text-align: center;">Sunday</div>',
				size: '100px',
				sortable: true,
				resizable: false,
				style: 'text-align: center',
				editable: {
					type: 'checkbox',
					style: 'text-align: center'
				}
			},
			{
				field: 'monday',
				text: '<div style="text-align: center;">Monday</div>',
				size: '100px',
				sortable: true,
				resizable: false,
				style: 'text-align: center',
				editable: {
					type: 'checkbox',
					style: 'text-align: center'
				}
			},
			{
				field: 'tuesday',
				text: '<div style="text-align: center;">Tuesday</div>',
				size: '100px',
				sortable: true,
				resizable: false,
				style: 'text-align: center',
				editable: {
					type: 'checkbox',
					style: 'text-align: center'
				}
			},
			{
				field: 'wednesday',
				text: '<div style="text-align: center;">Wednesday</div>',
				size: '100px',
				sortable: true,
				resizable: false,
				style: 'text-align: center',
				editable: {
					type: 'checkbox',
					style: 'text-align: center'
				}
			},
			{
				field: 'thursday',
				text: '<div style="text-align: center;">Thursday</div>',
				size: '100px',
				sortable: true,
				resizable: false,
				style: 'text-align: center',
				editable: {
					type: 'checkbox',
					style: 'text-align: center'
				}
			},
			{
				field: 'friday',
				text: '<div style="text-align: center;">Friday</div>',
				size: '100px',
				sortable: true,
				resizable: false,
				style: 'text-align: center',
				editable: {
					type: 'checkbox',
					style: 'text-align: center'
				}
			},
			{
				field: 'saturday',
				text: '<div style="text-align: center;">Saturday</div>',
				size: '100%',
				sortable: true,
				resizable: false,
				style: 'text-align: center',
				editable: {
					type: 'checkbox',
					style: 'text-align: center'
				}
			}
		],
		records: [{
			recid: 1,
			item: 'zoloft',
			sunday: true,
			monday: true
		}],
		onClick(event) {
			//console.log(event);
		},
		onChange: function(event) {
			event.preventDefault()
			tracker.refresh()
		}
	},
	weeklySchedule: {
		name: 'weeklySchedule',
		columns: [{
				field: 'recid',
				text: 'ID',
				size: '30px',
				sortable: true,
				resizable: false
			},
			{
				field: 'hour',
				text: '<div style="text-align: center;">Hour</div>',
				size: '100px',
				type: 'time'
			},
			{
				field: 'sunday',
				text: '<div style="text-align: center;">Sunday</div>',
				size: '100px'
			},
			{
				field: 'monday',
				text: '<div style="text-align: center;">Monday</div>',
				size: '100px'
			},
			{
				field: 'tuesday',
				text: '<div style="text-align: center;">Tuesday</div>',
				size: '100px'
			},
			{
				field: 'wednesday',
				text: '<div style="text-align: center;">Wednesday</div>',
				size: '100px'
			},
			{
				field: 'thursday',
				text: '<div style="text-align: center;">Thursday</div>',
				size: '100px'
			},
			{
				field: 'friday',
				text: '<div style="text-align: center;">Friday</div>',
				size: '100px'
			},
			{
				field: 'saturday',
				text: '<div style="text-align: center;">Saturday</div>',
				size: '100%'
			}
		],
		records: [],
		onClick(event) {
			console.log(event);
		}
	}
}

window.advanceOnEdit = function(checked) {
	grid.advanceOnEdit = checked
}

// initialization
let layout = new w2layout(config.layout)
let sidebar = new w2sidebar(config.sidebar)
let developmentCycle = new w2grid(config.developmentCycle)
let tracker = new w2grid(config.tracker)
let weeklySchedule = new w2grid(config.weeklySchedule)

layout.render('#main')
layout.html('left', sidebar)
layout.html('main', developmentCycle)
