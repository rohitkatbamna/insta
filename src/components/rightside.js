import React from "react";

function Rightside({ insta, setInsta, select, setSelect }) {
	console.log(select);
	if (select.Image === undefined) {
		return <></>;
	}
	return (
		<>
			<div className="sticky-top mt-5">
				<img src={select.Image} alt="random" width="50%" height="50%" />
			</div>
		</>
	);
}

export default Rightside;
