import {
	IoMenuOutline,
	IoHomeOutline,
	IoHeartOutline,
	IoBagHandleOutline,
	IoGridOutline,
	IoCloseOutline,
	IoAddOutline,
	IoRemoveOutline,
	IoCaretBackOutline
} from "react-icons/io5";
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoLinkedin,
} from "react-icons/io";
import { useState } from "react";

const MobileNavigation = () => {
	const [sidebarOpen , setSidbarOpen] = useState(false)
	const [collapsed, setCollapsed] = useState(true)
	return (
		<>
			<div className="bg-white fixed bottom-0 left-[50%] -translate-x-[50%] w-full max-w-lg m-auto flex justify-around items-center py-1 px-0 shadow-bottomMenu z-[5] rounded-t-full md:hidden">
				<button className="relative text-2xl text-eerie-black p-2" onClick={() => setSidbarOpen(!sidebarOpen)}>
					<IoMenuOutline />
				</button>

				<button className="relative text-2xl text-eerie-black p-2">
					<IoBagHandleOutline />
					<span className="bg-red-600 text-white absolute top-0 right-0 text-xs font-medium py-[2px] px-1 rounded-full">0</span>
				</button>

				<button className="relative text-2xl text-eerie-black p-2">
					<IoHomeOutline />
				</button>

				<button className="relative text-2xl text-eerie-black p-2">
					<IoHeartOutline />

					<span className="bg-red-600 text-white absolute top-0 right-0 text-xs font-medium py-[2px] px-1 rounded-full">0</span>
				</button>

				<button className="relative text-2xl text-eerie-black p-2">
					<IoGridOutline />
				</button>
			</div>
			<nav
				className={`bg-white fixed top-0 w-full max-w-xs h-screen p-5 shadow-[0_0_10px_hsla(0,0%,0%,0.1)] overflow-y-scroll overscroll-contain ${sidebarOpen ? "left-0 visible" : "-left-[100%] invisible"} duration-500 ease-ease z-20  has-scrollbar shadow-lg`}
				data-mobile-menu
			>
				<div className="pb-4 mb-2 flex justify-between items-center border-b border-cultured">
					<h2 className="text-salmon-pink text-lg font-semibold">Menu</h2>

					<button className="text-eerie-black text-xl" onClick={() => setSidbarOpen(!sidebarOpen)} >
						<IoCloseOutline />
					</button>
				</div>

				<ul className="mb-7">
					<li className="border-b border-cultured">
						<a href="#" className="text-onyx text-sm font-medium py-3 px-0">
							Home
						</a>
					</li>

					<li className="border-b border-cultured">
						<button className="w-full flex justify-between items-center accordion-menu" data-accordion-btn onClick={()=> setCollapsed(!collapsed)} >
							<p className="text-onyx text-sm font-medium py-3 px-0">Mens</p>

							<div>
								{!collapsed ? 
									<IoAddOutline className="text-onyx" strokeWidth={90}/>
									:
									<IoRemoveOutline className="text-onyx" strokeWidth={90} />
								}
							</div>
						</button>
						{collapsed &&
						<ul className="submenu-category-list" data-accordion>
							<li className="submenu-category">
								<a href="#" className="submenu-title">
									Shirt
								</a>
							</li>

							<li className="submenu-category">
								<a href="#" className="submenu-title">
									Shorts & Jeans
								</a>
							</li>

							<li className="submenu-category">
								<a href="#" className="submenu-title">
									Safety Shoes
								</a>
							</li>

							<li className="submenu-category">
								<a href="#" className="submenu-title">
									Wallet
								</a>
							</li>
						</ul>
}
					</li>
				</ul>

				<div className="menu-bottom">
					<ul className="menu-category-list">
						<li className="border-b border-cultured">
							<button className="w-full flex justify-between items-center accordion-menu" data-accordion-btn onClick={()=> setCollapsed(!collapsed)} >
								<p className="text-onyx text-sm font-medium py-3 px-0">Language</p>

								<IoCaretBackOutline className={`${collapsed ? "rotate-":""}`} />
							</button>

							<ul className="submenu-category-list" data-accordion>
								<li className="submenu-category">
									<a href="#" className="submenu-title">
										English
									</a>
								</li>

								<li className="submenu-category">
									<a href="#" className="submenu-title">
										Espa&ntilde;ol
									</a>
								</li>

								<li className="submenu-category">
									<a href="#" className="submenu-title">
										Fren&ccedil;h
									</a>
								</li>
							</ul>
						</li>

						<li className="border-b border-cultured">
							<button className="w-full flex justify-between items-center accordion-menu" data-accordion-btn>
								<p className="text-onyx text-sm font-medium py-3 px-0">Currency</p>
								<IoCaretBackOutline />
							</button>

							<ul className="submenu-category-list" data-accordion>
								<li className="submenu-category">
									<a href="#" className="submenu-title">
										USD &dollar;
									</a>
								</li>

								<li className="submenu-category">
									<a href="#" className="submenu-title">
										EUR &euro;
									</a>
								</li>
							</ul>
						</li>
					</ul>

					<ul className="menu-social-container">
						<li>
							<a href="#" className="social-link">
								<IoLogoFacebook />
							</a>
						</li>

						<li>
							<a href="#" className="social-link">
								<IoLogoTwitter />
							</a>
						</li>

						<li>
							<a href="#" className="social-link">
								<IoLogoInstagram />
							</a>
						</li>

						<li>
							<a href="#" className="social-link">
								<IoLogoLinkedin />
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default MobileNavigation;
