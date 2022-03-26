import React from "react";

function Leftsidecard({ takeObj, setSelect }) {
	function HandleClick() {
		setSelect(takeObj);
	}
	return (
		<>
			<div
				className="card shadow"
				onClick={HandleClick}
				style={{ cursor: "pointer" }}>
				<img src={takeObj.Image} class="card-img-top" alt="Random person" />
				<div class="card-body">
					<h5 class="card-title">Likes {takeObj.likes}</h5>
					<p class="card-text">{takeObj.timestamp}</p>
				</div>
			</div>
		</>
	);
}
export default Leftsidecard;
