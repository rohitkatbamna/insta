import React from "react";
import Leftsidecard from "./leftsidecard";

function Leftside({ insta, setInsta, handleMostUpvoted, select, setSelect }) {
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
