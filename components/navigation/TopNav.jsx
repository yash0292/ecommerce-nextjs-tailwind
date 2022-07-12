import {
	IoSearchOutline,
	IoPersonOutline,
	IoHeartOutline,
	IoBagHandleOutline,
} from "react-icons/io5";

const TopNav = () => {
	return (
		<div className="p-5 border-b-[1] border-cultured">
			<div className="container">
				<a href="" className="mb-5">
					<img
						src="/images/logo/logo.svg"
						alt="Logo"
						width={120}
						height={36}
						className="m-auto"
					/>
				</a>
				<div className="relative">
					<input
						type="search"
						className="text-sm text-onyx py-3 px-4 pr-12 border border-cultured border-r-8"
						placeholder="Enter any product name"
					/>
					<button className="bg-white absolute top-[50%] right-1 transform -translate-y-[50%] text-onyx text-sm py-2 px-4 border-r-8 hover:text-salmon-pink">
						<IoSearchOutline />
					</button>
				</div>
				<div className="header-user-action">
					<button className="action-btn">
						<IoPersonOutline />
						<span className="count">0</span>
					</button>
					<button className="action-btn">
						<IoHeartOutline />
						<span className="count">0</span>
					</button>
					<button className="action-btn">
						<IoBagHandleOutline />
						<span className="count">0</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
