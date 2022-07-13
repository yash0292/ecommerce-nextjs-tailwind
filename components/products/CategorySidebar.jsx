import { useState, useRef } from 'react';
import { subCategrories } from '../../data/product';
import {
	IoMenuOutline,
	IoHomeOutline,
	IoHeartOutline,
	IoBagHandleOutline,
	IoGridOutline,
	IoCloseOutline,
	IoAddOutline,
	IoRemoveOutline,
    IoStarOutline,
	IoCaretBackOutline,
    IoStar,
    IoStarHalfOutline
} from "react-icons/io5";


const CategorySidebar = () => {
    const btnRef = useRef()
    const [submenu, setSubmenu] = useState(true)
    const [active ,setActive] = useState(null)    

    const toggleMenu =(e,index)=>{
        if(active == index){
            setActive(null)
        }else{
            setActive(index)
        }
    }
	return (
		<div className="bg-white fixed top-0 left-0 visible bottom-0 max-w-xs p-7 overflow-y-scroll overscroll-contain duration-500 ease-ease z-20 w-full lg:text-5-lg lg:sticky lg:top-7 lg:left-0 lg:p-0 lg:min-w-[calc(25%-15px)] lg:mb-7 lg:visible lg:overflow-y-auto lg:overscroll-auto lg:z-0  has-scrollbar" data-mobile-menu>
			<div className="mb-4 pb-4 border-b border-cultured lg:p-5 lg:mb-7 lg:border rounded-md">
				<div className="flex justify-between items-center mb-2">
					<h2 className="text-onyx text-5 uppercase tracking-[0.8px] font-semibold">Category</h2>

					<button className="text-eerie-black text-2 font-semibold lg:hidden" data-mobile-menu-close-btn>
						<IoCloseOutline strokeWidth={50} />
					</button>
				</div>

				<ul className="sidebar-menu-category-list">
                {subCategrories.map((category, index)=>(
					<li className="sidebar-menu-category" key={index}>
						<button ref={btnRef} className="w-full flex justify-between items-center py-2 px-0" data-accordion-btn onClick={e=>toggleMenu(e, index)}>
							<div className="flex items-center gap-2">
								<img
									src={category.icon}
									alt={category.heading}
									width="20"
									height="20"
								/>

								<p className="text-5 text-sonic-silver font-medium">{category.heading}</p>
							</div>

							<div>
                            {active != index ? 
								<IoAddOutline />
                                :
								<IoRemoveOutline />
                            }
							</div>
						</button>
                        <ul className={`border-t border-cultured overflow-scroll has-scrollbar ${active === index ? "visible max-h-[122px] pt-3 px-0 pb-2" : "invisible max-h-0"} duration-500 ease-ease`} data-accordion >
                    {category.subLinks.map((subCategrory, index)=>(
                            <li className="sidebar-submenu-category" key={index}>
                                <a href="#" className="flex justify-between items-center text-sonic-silver text-7 py-0.5 px-0 hover:text-eerie-black">
                                    <p className="capitalize">{subCategrory.title}</p>
                                    <data value={subCategrory.stock} className="stock" title="Available Stock">
                                        {subCategrory.stock}
                                    </data>
                                </a>
                            </li>
                    ))}
                    </ul>
					</li>
                ))}
				</ul>
			</div>

			<div className="">
				<h3 className="text-5 font-semibold text-onyx uppercase tracking-[0.8px] mb-4">Best Sellers</h3>

				<div className="">
					<div className="">
						<div className="flex items-center gap-4">
							<a href="#" className="">
								<img
									src="/images/products/1.jpg"
									alt="baby fabric shoes"
									width="75"
									height="75"
									className="rounded-md"
								/>
							</a>

							<div className="w-[calc(100%-90px)]">
								<a href="#">
									<h4 className="text-onyx text-7 capitalize font-normal overflow-hidden whitespace-nowrap text-ellipsis tracking-[0.5px]">baby fabric shoes</h4>
								</a>

								<div className="flex items-center text-sandy-brown text-9 py-1 px-0">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarHalfOutline />
									<IoStarOutline />
								</div>

								<div className="flex items-center gap-4">
									<del className='text-sonic-silver text-9'>$5.00</del>
									<p className="text-7 font-semibold text-davys-gray">$4.00</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategorySidebar;
