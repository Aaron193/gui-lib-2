import { useState } from 'preact/hooks';
import { Checkbox } from './checkbox';
import { Slider } from './slider';

function sliderCallback(e) {
	console.log('slider callback ran!', e);
}
function checkBoxCallback(e) {
	console.log('checkbox callback ran!', e);
}

export function Folder(props) {
	const [display, setDisplay] = useState(true);

	function toggleDisplay() {
		setDisplay(!display);
	}

	const innerComponents = props.content;
	let comp = [];
	innerComponents.forEach(item => {
		switch (item.type) {
			case Folder:
			case 'folder':
				comp.push(<Folder content={item.content}></Folder>);
				break;
			case Checkbox:
			case 'checkbox':
				comp.push(<Checkbox name={item.name} change={e => item.change(e)}></Checkbox>);
				break;
			case Slider:
			case 'slider':
				comp.push(<Slider name={item.name} change={e => item.change(e)} min={item.opt.min} max={item.opt.max} step={item.opt.step}></Slider>);
				break;
		}
	});
	return (
		<>
			<div onclick={toggleDisplay} data-id="folder" className="GUI_FOLDER_TITLE">
				▼ misc
			</div>
			{display ? (
				<div className="GUI_FOLDER">
					<div className="GUI_FOLDER_CONTAINER">{comp}</div>
				</div>
			) : null}
		</>
	);
}
