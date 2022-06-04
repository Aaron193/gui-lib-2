import { render } from 'preact';
import { Checkbox } from './checkbox';
import { Slider } from './slider';
import { Folder } from './folder';

function App(props) {
	let comp = [];
	props.options.components.forEach(component => {
		switch (component.type) {
			case 'folder':
				comp.push(<Folder name={component.name} content={component.content}></Folder>);
				break;
			case 'checkbox':
				comp.push(<Checkbox name={component.name} change={e => component.change(e)}></Checkbox>);
				break;
			case 'slider':
				console.log(component.opt.step);
				comp.push(<Slider name={component.name} change={e => component.change(e)} min={component.opt.min} max={component.opt.max} step={component.opt.step}></Slider>);
				break;
		}
	});
	return (
		<div id="app">
			<div className="__GUI__">
				<div className="GUI_TITLE">MY GUI TITLE</div>
				{comp}
			</div>
		</div>
	);
}
// export default App;

export function renderGui(settings) {
	console.log('settings: ', settings);
	if (settings?.components && settings?.title && settings?.width) {
		console.log('rendering');
		render(<App options={settings} />, document.querySelector('body'));
	} else {
		console.error('You did not pass the right parameters for this gui');
	}
}
