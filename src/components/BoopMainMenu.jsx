import React, { useState } from "react";

import { MenuItemsA } from "../config/menu";
import { MenuItemsB } from "../config/menu";

const BoopMainMenu = () => {
	const [displayMore, setDisplayMore] = useState(false);

	const hideMainMenu = () => {
		const target = document.getElementById("main-menu");
		target.classList.remove("show-main");
	};

	return (
		<div id="main-menu" className="boop-main-menu">
			<div onClick={() => hideMainMenu()} className="close-main">
				<i className="fa fa-times" aria-hidden="true"></i>
			</div>

			<div className="main-menu-cont">
				{MenuItemsA &&
					MenuItemsA.map((item, idx) => {
						return (
							<div key={idx} className="main-menu-item">
								<img src={item.imgSrc} alt="item" />
								{item.title}
							</div>
						);
					})}

				{displayMore &&
					MenuItemsB &&
					MenuItemsB.map((item, idx) => {
						return (
							<div key={idx} className="main-menu-item">
								<img src={item.imgSrc} alt="item" />
								{item.title}
							</div>
						);
					})}
			</div>

			{!displayMore ? (
				<div onClick={() => setDisplayMore(true)} className="main-menu-opt">
					<div className="menu-opt">
						<div>
							<i className="fa fa-chevron-down" aria-hidden="true"></i>
						</div>
						See More
					</div>
				</div>
			) : (
				<div onClick={() => setDisplayMore(false)} className="main-menu-opt">
					<div className="menu-opt">
						<div>
							<i className="fa fa-chevron-up" aria-hidden="true"></i>
						</div>
						See Less
					</div>
				</div>
			)}
			<small className="mt-auto">Faceboop &copy; 2021 | Michael P. Cote</small>
		</div>
	);
};

export default BoopMainMenu;
