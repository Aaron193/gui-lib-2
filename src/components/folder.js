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

	const innerComponents = props.components;
	let comp = [];
	innerComponents.forEach(item => {
		switch (item.type) {
			case Folder:
				comp.push(<Folder components={item.props.components}></Folder>);
				break;
			case Checkbox:
				comp.push(<Checkbox change={e => sliderCallback(e)} name="jeff"></Checkbox>);
				break;
			case Slider:
				comp.push(<Slider change={e => sliderCallback(e)} min="0" max="100" name="some range"></Slider>);
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
