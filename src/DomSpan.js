import React from "react";
import { rawToReact } from "./DomUtil";

export default class DomSpan extends React.Component{
	render(){
		const spanTag = '<span style="color: green" class="parsed-span">Green Color Text</span>';
		const parsed = rawToReact(spanTag);
		return <div style={{width:'100%',display:'block',backgroundColor: '#00ff00'}}>{parsed}</div>;
	}
}