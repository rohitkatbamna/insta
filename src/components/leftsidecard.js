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
				<img src={takeObj.Image} className="card-img-top" alt="Random person" />
				<div className="card-body">
					<h5 className="card-title">Likes {takeObj.likes}</h5>
				</div>
			</div>
		</>
	);
}
export default Leftsidecard;
