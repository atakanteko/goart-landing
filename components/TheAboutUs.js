import Image from "next/image";
import SocialFooter from "./TheMeetTeam/SocialFooter";
import aboutUs from "../public/assets/images/about-us-mobile-svg.svg";
export const TheAboutUs = () => {
    return(
        <>
            <div className="
                            sm:bg-[#181819] sm:h-max
                            md:bg-[#181819] md:h-max
                            lg:bg-[#181819] lg:h-max
                            xl:bg-about-us-new-bg xl:bg-cover xl:h-screen xl:px-48
                            ">
                <div>
                    <div className="sm:relative sm:bg-about-us-mobile sm:flex sm:flex-col sm:items-center sm:bg-cover
                                    md:relative md:bg-about-us-mobile md:flex md:flex-col md:items-center md:bg-cover
                                    lg:relative lg:bg-about-us-new-bg lg:flex lg:flex-col lg:items-center lg:bg-center
                                    xl:relative xl:flex xl:flex-col xl:items-start xl:pt-60
                                    ">
                        <div className="sm:mt-about-us-margin-top sm:mb-52
                                        md:mt-about-us-margin-top md:mb-52
                                        lg:mt-about-us-margin-top lg:mb-52
                                    xl:hidden
                                        ">
                            <Image src={aboutUs} alt="About Us"/>
                        </div>
                        <div className="sm:mt-about-us-margin-top sm:mb-52
                                        md:mt-about-us-margin-top md:mb-52
                                        lg:mt-about-us-margin-top lg:mb-52
                                        lg:hidden sm:hidden md:hidden
                                        ">
                            <Image src={aboutUs} alt="About Us" width={500} height={500}/>
                        </div>
                        <div className="sm:absolute sm:about-top sm:bg-second-page-information-box-exit-bg sm:h-max sm:py-12 sm:px-6 sm:rounded-md
                                        md:absolute md:about-top md:bg-second-page-information-box-exit-bg md:h-max md:py-12 md:px-6 md:rounded-md
                                        lg:absolute lg:about-top lg:bg-second-page-information-box-exit-bg lg:h-max lg:py-12 lg:px-6 lg:rounded-md
                                        xl:absolute xl:about-top-xl xl:bg-second-page-information-box-bg xl:h-max xl:py-12 xl:px-6 xl:rounded-md
                                        ">
                            <div className="sm:w-60 md:w-60 lg:w-96">
                                <span className="text-white font-normal text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu justo turpis. Curabitur tempus massa ac euismod tempor. Fusce finibus porttitor ligula, mattis commodo felis dignissim in. Praesent condimentum libero nunc, sed lobortis eros consequat eget. Pellentesque suscipit viverra metus sit amet tempus. Nam dignissim augue et gravida molestie. Suspendisse at iaculis justo, at venenatis ipsum.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <SocialFooter />
            </div>
        </>
    )
}