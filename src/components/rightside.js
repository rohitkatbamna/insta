import React, { useState, useEffect } from "react";

function Rightside({ select, setSelect, insta, setInsta, handleMostUpvoted }) {
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
		return <></>;
	}
	return (
		<>
			<div className="sticky-top mt-5 card shadow">
				<img src={select.Image} alt="random" width="50%" height="50%" />
				<button className="btn btn-primary" onClick={addLike}>
					Click to Like more {newlikes}
				</button>
			</div>
		</>
	);
}

export default Rightside;
