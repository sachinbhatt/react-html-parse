import parse, { domToReact } from 'html-react-parser';
import React,{ useState } from "react";

const domParser = new DOMParser();
const answerArray1 =[];
export const parseHtml = raw => {
	return domParser.parseFromString(raw, "text/html");
}

export const rawToReact = raw => {
  const parsed = parse(raw);
  const reacted = domToReact(parsed);
  console.log('Parsed raw:', parsed);
  return React.createElement(parsed.type, parsed.props);
}
