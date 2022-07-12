import { NavigationMenu } from "../../data/navigationRoutes";
import MobileNavigation from "./MobileNavigation";
import TopLinks from "./TopLinks";
import TopSearch from "./TopSearch";

const Menu = NavigationMenu;
const DeskNavbar = () => {
	return (
		<header>
			<TopLinks />
			<TopSearch />
			<nav className="hidden lg:block">
				<div className="container">
					<ul className="lg:relative lg:flex lg:justify-center lg:items-center lg:gap-7 xlgap-11">
						{Menu.map((menu, index) => (
							<li className="desktop-menu-category" key={index}>
								<a
									href="#"
									className="relative text-onyx text-sm font-semibold uppercase py-4 px-0 duration-200 hover:text-salmon-pink m-title hover:after:scale-x-100"
								>
									{menu.title}
								</a>
								{menu.submenu && menu.title == "Categories" && (
									<div className="absolute top-[100%] left-0 bg-white w-full grid grid-cols-4 gap-7 border border-cultured shadow-[0_3px_5px_hsla(0,0%,0%,0.1)] rounded-md translate-y-12  opacity-0 invisible p-7 pointer-events-none duration-200 z-[5] dropdown-panel">
										{menu.subLinks.map((subMenu, index) => (
											<ul className="dropdown-panel-list" key={index}>
												<>
													<div className="text-onyx text-sm font-semibold mb-2 pb-2 border-b border-cultured">
														{subMenu.heading}
													</div>
													{subMenu.submenu
														? subMenu.subLinks.map((subLink, index) => (
																<li key={index} className="">
																	<a
																		href="#"
																		className="text-sonic-silver text-sm capitalize duration-200 hover:text-salmon-pink py-1 px-0 "
																	>
																		{subLink.title}
																	</a>
																</li>
														  ))
														: ""}
													{subMenu.banner ? (
														<li className="mt-5">
															<a href="#">
																<img
																	src={subMenu.banner}
																	alt="headphone collection"
																	className="w-full h-auto rounded-md"
																/>
															</a>
														</li>
													) : (
														""
													)}
												</>
											</ul>
										))}
									</div>
								)}
								{menu.submenu && menu.title !== "Categories" && (
									<ul className="absolute top-[100%] left-0 bg-white w-[200px] border border-cultured rounded-md shadow-[0_3px_5px_hsla(0,0%,0%,0.1)] translate-y-12 opacity-0 invisible pointer-events-none duration-200 z-[5] py-5 dropdown-panel">
										{menu.subLinks.map((submenu, index) => (
											<li className="dropdown-item" key={index}>
												<a
													href="#"
													className="text-sonic-silver text-sm capitalize duration-200 hover:text-salmon-pink py-1 px-5"
												>
													{submenu.title}
												</a>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>
			</nav>
			{/* ---------Mobile Navigation----------- */}
			{/* <MobileNavigation /> */}
		</header>
	);
};

export default DeskNavbar;
