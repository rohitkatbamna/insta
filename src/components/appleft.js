import React, { useState, useEffect } from "react";

function Leftside() {
	const [insta, setInsta] = useState([]);
	function fetching() {
		console.log("begin fetching");
		fetch(
			"https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json"
		)
			.then((res) => res.json())
			.then((json) => setInsta(json))
			.catch((error) => console.log("error", error));
	}
	useEffect(fetching, []);
	console.log(insta);
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					{insta.map((takeObj) => {
						return (
							<div
								class="card col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12"
								style={{ width: "18rem" }}>
								<img
									src={takeObj.Image}
									class="card-img-top"
									alt="Random person"
								/>
								<div class="card-body">
									<h5 class="card-title">Likes {takeObj.likes}</h5>
									<p class="card-text">Some quic</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
export default Leftside;
