import React from "react";
import './business.css'

function Business() {
	let businessCard = (
		<div className="businessCard">
			<img src="https://placehold.co/260x250" alt="placeholder" />
			<div className="text-content">
				<h2>meowlito pizzeria</h2>
				<div className="wrapper">
					<p className="address">
						7032 Cat Avenue <br />
						meowtown <br />
						tatata
					</p>
					<div>
						<p>MeowCountry</p>
						<p>200.1 stars</p>
						<p>600 review</p>
					</div>
				</div>
			</div>
		</div>
	)

	
	return businessCard
}

export default Business