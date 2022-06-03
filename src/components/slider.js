import { useState } from 'preact/hooks';

export function Slider(props) {
	const [sliderValue, setSliderValue] = useState((props.max - props.min) / 2);

	function handleChange(e) {
		const value = e.target.value;
		props.change(value);
		setSliderValue(value);
	}

	return (
		<div className="GUI_COMPONENT">
			<label className="GUI_LABEL">{props.name}</label>
			<input oninput={handleChange} className="GUI_SLIDER" type="range" min={props.min} max={props.max} />
			<input className="GUI_STATS" type="text" value={sliderValue} />
		</div>
	);
}
