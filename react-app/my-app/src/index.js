import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Board extends React.Component {
	renderSquare(i) {
		return <square value={i} />;
	}
}
