import { Checkbox } from './checkbox';
import { Slider } from './slider';
import { Folder } from './folder';

function sliderCallback(e) {
	console.log('slider callback ran!', e);
}
function checkBoxCallback(e) {
	console.log('checkbox callback ran!');
}

const App = () => (
	<div id="app">
		<div className="__GUI__">
			<div className="GUI_TITLE">MY GUI TITLE</div>
			{getCheckbox()} {getSlider()} {getFolder()}
			<Folder components={[getCheckbox(), getSlider()]}></Folder>
		</div>
	</div>
);

export default App;

function getCheckbox() {
	return <Checkbox change={e => checkBoxCallback(e)} name="name!"></Checkbox>;
}
function getSlider() {
	return <Slider change={e => sliderCallback(e)} min="0" max="100" name="AutoSpike range"></Slider>;
}
function getFolder() {
	return <Folder components={[getCheckbox(), getSlider()]}></Folder>;
}

const GUI_SETTINGS = {
	title: 'MY GUI TITLE',
	width: '540',
};
/*

	{
		title: 'MY GUI TITLE',
		width: '540',
		align: 'right',
		opacity: '1',
		theme: 'dark',
	},

	[
		{ type: 'slider', name: 'component name', opt: { min: '0', max: '100', step: '1' } },
		{ type: 'slider', name: 'component name 2', opt: { min: '0', max: '100', step: '1' } },
		{
			type: 'checkbox',
			name: 'my checkbox',
			action: e => {
				console.log('CLICKED CHECKBOX!', e);
			},
		},
		{ type: 'folder', name: 'misc', content: [{ type: 'slider', name: 'nested component', opt: { min: '0', max: '100', step: '1' } }] },
		{
			type: 'folder',
			name: 'misc',
			content: [
				{ type: 'slider', name: 'nested component', bindVar: variable1, opt: { min: '0', max: '100', step: '1' } },
				{ type: 'slider', name: 'nested component', bindVar: variable2, opt: { min: '0', max: '100', step: '1' } },
				{ type: 'slider', name: 'nested component', bindVar: variable3, opt: { min: '0', max: '100', step: '1' } },
			],
		},
	]
*/
