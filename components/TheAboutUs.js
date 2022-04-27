export const TheAboutUs = () => {
    return(
        <>
            <div className="h-screen flex flex-col items-center flex-col-reverse py-12
                        xl:hidden
                        sm:bg-about-us-mobile sm:bg-left sm:bg-cover
                        md:bg-about-us-mobile md:bg-left md:bg-cover
                        lg:bg-about-us-mobile lg:bg-left lg:bg-cover
                        ">
                <div>
                    <div className="bg-gray-1000 text-center rounded-md
                                sm:w-about-btn-mobile-width sm:h-about-btn-mobile-height sm:py-2.5 sm:px-4
                                md:w-about-btn-mobile-width md:h-about-btn-mobile-height md:py-2.5 sm:px-4
                                lg:w-about-btn-mobile-width lg:h-about-btn-mobile-height lg:py-2.5 sm:px-4
                                ">
                    <span className="sm:text-white sm:font-medium sm:text-base
                                     md:text-white md:font-medium md:text-base
                                     lg:text-white lg:font-medium lg:text-base
                                    ">ABOUT US</span>
                    </div>
                </div>
            </div>
        </>
    )
}