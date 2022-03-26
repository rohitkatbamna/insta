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
	function upvotesComparison(a, b) {
		if (a.likes > b.likes) {
			return -1;
		}
		if (a.likes < b.likes) {
			return 1;
		}
		return 0;
	}

	function sortLikes(insta) {
		return insta.sort(upvotesComparison);
	}
	const handleMostUpvoted = () => setInsta([...sortLikes(insta)]);
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<button
						type="button"
						class="btn btn-primary col-2 ms-auto me-auto"
						onClick={handleMostUpvoted}>
						Sort By Likes
					</button>
				</div>
				<div className="row">
					{insta.map((takeObj) => {
						return (
							<div
								class="card col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 shadow ms-3 my-5"
								style={{ width: "18rem" }}
								key={insta.indexOf(takeObj)}>
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
