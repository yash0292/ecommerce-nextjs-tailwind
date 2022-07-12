import {
	IoSearchOutline,
	IoPersonOutline,
	IoHeartOutline,
	IoBagHandleOutline,
} from "react-icons/io5";

const TopSearch = () => {
	return (
		<div className="py-5 px-0 border-b border-cultured xs:py-6">
			<div className="container sm:flex sm:justify-between sm:items-center md:gap-20 ">
				<a href="#" className="mb-5 sm:mb-0">
					<img
						src="images/logo/logo.svg"
						alt="Anon's logo"
						width="120"
						height="36"
						className="m-auto"
					/>
				</a>

				<div className="relative md:flex-grow sm:min-w-[300px]">
					<input
						type="search"
						name="search"
						className="text-sm text-onyx py-2 px-4 pr-12 border border-cultured rounded-md "
						placeholder="Enter your product name..."
					/>

					<button className="bg-white absolute top-[50%] right-[2px] -translate-y-[50%] text-onyx text-lg py-2 px-4 rounded-md transition duration-200 hover:text-salmon-pink">
						<IoSearchOutline />
					</button>
				</div>

				<div className="hidden lg:flex lg:items-center lg:gap-4">
					<button className="lg:relative lg:text-4xl lg:text-onyx lg:p-1">
						<IoPersonOutline />
					</button>
					<button className="lg:relative lg:text-4xl lg:text-onyx lg:p-1">
						<IoHeartOutline />
						<span className=" absolute -top-[2px] -right[3px] bg-bittersweet text-white text-xs leading-3 font-medium py-[2px] px-1 rounded-[20px] ">
							0
						</span>
					</button>
					<button className="lg:relative lg:text-4xl lg:text-onyx lg:p-1">
						<IoBagHandleOutline />
						<span className=" absolute -top-[2px] -right[3px] bg-bittersweet text-white text-xs leading-3 font-medium py-[2px] px-1 rounded-[20px] ">
							0
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopSearch;
