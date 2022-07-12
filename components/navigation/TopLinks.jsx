import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoLinkedin,
} from "react-icons/io";

const TopLinks = () => {
	return (
		<div className="hidden xs:block xs:py-2 px-0 border-b border-cultured">
			<div className="container sm:flex sm:justify-between sm:items-center">
				<ul className="xs:hidden lg:flex lg:items-center lg:gap-1">
					<li>
						<a href="#" className="bg-cultured text-eerie-black text-xl p-2 rounded lg:p-1 bg-[hsl(0, 0%, 95%)] text-sonic-silver duration-500 lg:hover:bg-salmon-pink  lg:hover:text-white">
							<IoLogoFacebook />
						</a>
					</li>

					<li>
						<a href="#" className="bg-cultured text-eerie-black text-xl p-2 rounded lg:p-1 bg-[hsl(0, 0%, 95%)] text-sonic-silver duration-500 lg:hover:bg-salmon-pink  lg:hover:text-white">
							<IoLogoTwitter />
						</a>
					</li>

					<li>
						<a href="#" className="bg-cultured text-eerie-black text-xl p-2 rounded lg:p-1 bg-[hsl(0, 0%, 95%)] text-sonic-silver duration-500 lg:hover:bg-salmon-pink  lg:hover:text-white">
							<IoLogoInstagram />
						</a>
					</li>

					<li>
						<a href="#" className="bg-cultured text-eerie-black text-xl p-2 rounded lg:p-1 bg-[hsl(0, 0%, 95%)] text-sonic-silver duration-500 lg:hover:bg-salmon-pink  lg:hover:text-white">
							<IoLogoLinkedin />
						</a>
					</li>
				</ul>

				<div className="xs:text-sonic-silver xs:text-xs xs:uppercase">
					<p>
						<b className="xs:font-medium">Free Shipping</b>
						This Week Order Over - $55
					</p>
				</div>

				<div className="xs:hidden sm:flex sm:items-center sm:gap-2">
					<select name="currency" className="sm:border-none sm:block sm:min-w-[80px] sm:py-1 sm:px-0 sm:text-sonic-silver sm:text-sm sm:uppercase sm:cursor-pointer sm:duration-200 sm:hover:text-eerie-black outline-none">
						<option value="usd">USD $</option>
						<option value="eur">EUR </option>
					</select>

					<select name="language" className="sm:border-none sm:block sm:min-w-[80px] sm:py-1 sm:px-0 sm:text-sonic-silver sm:text-sm sm:uppercase sm:cursor-pointer sm:duration-200 sm:hover:text-eerie-black outline-none">
						<option value="en-US">English</option>
						<option value="es-ES">Espa&ntilde;ol</option>
						<option value="fr">Fran&ccedil;ais</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default TopLinks;
