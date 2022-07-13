import {banner} from '../../data/product';

const Banner = () => {
	return (
		<div className="mx-0 my-7 lg:mt-0">
			<div className="container">
				<div className="flex items-center gap-2 rounded-md overflow-auto snap-x overscroll-contain  has-scrollbar">
					{banner.map((banners, index)=>(
						<div key={index} className="relative min-w-full max-h-[450px] aspect-square rounded-md overflow-hidden snap-start xs:aspect-[5/3] sm:aspect-[4/2] md:aspect-auto md:h-[350px] lg:h-[380px] 2xl:h-[450px]">
						<img
							src={banners.bannerURL}
							alt={banners.title}
							className="w-full h-full object-cover object-right xl:last:object-top"
						/>

						<div className="bg-[hsla(0,0%,100%,0.8)] absolute bottom-6 left-6 right-6 py-5 px-6 rounded-md xs:top-[50%] xs:right-auto xs:bottom-auto xs:-translate-y-[50%] xs:max-w-[320px] sm:bg-transparent md:max-w-[380px] lg:left-[75px] lg:max-w-[400px] 2xl:left-28 2xl:max-w-[460px]">
							<p className="text-salmon-pink text-7 font-medium capitalize tracking-[2px] mb-2 xs:text-5 md:text-3 lg:text-7-lg">{banners.subtitle}</p>

							<h2 className="text-eerie-black text-1 xs:text-1-sm md:text-1-md lg:text-1-lg uppercase leading-[1] font-semibold mb-2">{banners.title}</h2>

							<p className="hidden xs:block text-sonic-silver text-7 font-medium mb-2 md:text-3 lg:text-7-lg">
								starting at $ <b className="text-2 md:text-3xl">{banners.startingAT}</b>.00
							</p>

							<a href="#" className="bg-salmon-pink text-white w-max text-11 font-semibold uppercase py-1 px-2 rounded-md duration-200 hover:bg-eerie-black xs:py-2 xs:px-20 md:text-9 lg:text-7">
								Shop now
							</a>
						</div>
					</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Banner;
