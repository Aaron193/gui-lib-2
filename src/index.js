import './style';
import { renderGui } from './components/app';

const GUI_SETTINGS = {
	title: 'MY GUI TITLE',
	width: '540',
	components: [
		{
			type: 'slider',
			change: e => {
				console.log(e);
			},
			name: 'component name',
			opt: { min: '0', max: '100', step: '5' },
		},
		{
			type: 'slider',
			change: e => {
				console.log(e);
			},
			name: 'component name 2',
			opt: { min: '0', max: '100', step: '1' },
		},
		{
			type: 'checkbox',
			name: 'my checkbox',
			change: e => {
				console.log('CLICKED CHECKBOX!', e);
			},
		},
		{
			type: 'folder',
			name: 'misc',
			content: [
				{
					type: 'slider',
					change: e => {
						console.log(typeof e);
					},
					name: 'nested component',
					opt: { min: '0', max: '100', step: '1' },
				},
				{
					type: 'checkbox',
					name: 'my checkbox',
					change: e => {
						console.log('CLICKED CHECKBOX!', e);
					},
				},
				{
					type: 'slider',
					change: e => {
						console.log(typeof e);
					},
					name: 'component name 2',
					opt: { min: '20', max: '80', step: '1' },
				},
			],
		},
	],
};

function GUI(settings) {
	if (settings.hasOwnProperty('CLI_DATA')) {
		renderGui(GUI_SETTINGS);
	} else {
		renderGui(settings);
	}
}
export default GUI;
