import { useState } from 'preact/hooks';

export function Checkbox(props) {
	function clicked(e) {
		props.change(e.target.checked);
	}

	return (
		<div class="GUI_COMPONENT">
			<label class="GUI_LABEL">{props.name}</label>
			<input onclick={clicked} class="GUI_CHECKBOX" type="checkbox" />
		</div>
	);
}
