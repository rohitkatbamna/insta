import React from "react";
import Leftsidecard from "./leftsidecard";

function Leftside({ insta, handleMostUpvoted, setSelect }) {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<button
						type="button"
						class="btn btn-primary col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-5 ms-auto me-auto mt-5"
						onClick={handleMostUpvoted}>
						Sort By Likes
					</button>
				</div>
				<div className="row">
					{insta.map((takeObj) => {
						return (
							<div
								class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12  ms-3 my-5"
								style={{ width: "18rem" }}
								key={insta.indexOf(takeObj)}>
								<Leftsidecard takeObj={takeObj} setSelect={setSelect} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
export default Leftside;
