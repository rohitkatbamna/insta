import React, { useState, useEffect } from "react";
import Leftside from "./components/leftside";
import Rightside from "./components/rightside";

function App() {
	const [insta, setInsta] = useState([]);
	const [select, setSelect] = useState({});
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
		<div className="container-fluid">
			<div className="row">
				<div className="col-xxl-6 col-xl-6 col-lg-7 col-md-6 col-sm-3">
					<Leftside
						insta={insta}
						handleMostUpvoted={handleMostUpvoted}
						setSelect={setSelect}
					/>
				</div>
				<div className="col-xxl-6 col-xl-6 col-lg-5 col-md-6 col-sm-8">
					<Rightside
						select={select}
						setSelect={setSelect}
						insta={insta}
						setInsta={setInsta}
						handleMostUpvoted={handleMostUpvoted}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
