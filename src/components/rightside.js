import React, { useState, useEffect } from "react";

function Rightside({ select, setSelect }) {
	const [newlikes, setNewlikes] = useState(0);
	useEffect(() => {
		setNewlikes(select.likes);
	}, [select]);
	let newsin = select;
	function addLike() {
		setNewlikes((prev) => prev + 1);
		newsin.likes = newlikes + 1;
		setSelect(newsin);
	}
	if (select.Image === undefined) {
		return (
			<div className="sticky-top">
				<h1 className="mt-5 fw-bold">Select any card to preview</h1>
			</div>
		);
	}
	const phototaken = new Date(select.timestamp);
	return (
		<div className="container-fluid sticky-top">
			<div className="row">
				<div className=" mt-5 card shadow col-12">
					<img
						src={select.Image}
						alt="random"
						width="60%"
						height="80%"
						className="me-auto ms-auto"
					/>
					<h3 className="me-auto ms-auto mt-2">{phototaken.toDateString()}</h3>
					<button className="btn btn-primary mt-2 mb-2" onClick={addLike}>
						Click to Like more {newlikes}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Rightside;
