import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import roadmapText from '../public/assets/images/roadmap-text.svg';
export const TheRoadMap = () => {
    const roadMap = [
        {
            title: "2021 Q3",
            description:"Cras feugiat erat gravida nibh congue iaculis. Duis fermentum scelerisque ullamcorper. Cras eget diam blandit, sagittis metus vel, imperdiet justo. Nulla vitae nisi ac velit scelerisque suscipit id in erat. Quisque dictum sapien id est cursus elementum. Nulla vitae nisi ac velit scelerisque suscipit id in erat."
        },
        {
            title: "2021 Q3",
            description:"Cras feugiat erat gravida nibh congue iaculis. Duis fermentum scelerisque ullamcorper. Cras eget diam blandit, sagittis metus vel, imperdiet justo. Nulla vitae nisi ac velit scelerisque suscipit id in erat. Quisque dictum sapien id est cursus elementum. Nulla vitae nisi ac velit scelerisque suscipit id in erat."
        },
        {
            title: "2021 Q3",
            description:"Cras feugiat erat gravida nibh congue iaculis. Duis fermentum scelerisque ullamcorper. Cras eget diam blandit, sagittis metus vel, imperdiet justo. Nulla vitae nisi ac velit scelerisque suscipit id in erat. Quisque dictum sapien id est cursus elementum. Nulla vitae nisi ac velit scelerisque suscipit id in erat."
        },
        {
            title: "2021 Q3",
            description:"Cras feugiat erat gravida nibh congue iaculis. Duis fermentum scelerisque ullamcorper. Cras eget diam blandit, sagittis metus vel, imperdiet justo. Nulla vitae nisi ac velit scelerisque suscipit id in erat. Quisque dictum sapien id est cursus elementum. Nulla vitae nisi ac velit scelerisque suscipit id in erat."
        },
    ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <>
            <div className="h-screen px-6 py-64
                            bg-gray-1000 sm:hidden md:hidden lg:hidden">
                <div className="mx-40 mb-11">
                    <Image src={roadmapText} alt="Roadmap"/>
                </div>
                <div className="mx-40">
                    <Slider {...settings}>
                            <div className="flex flex-col ml-2">
                                <div>
                                    <span className="text-4xl text-gray-300 font-bold">2021 Q3</span>
                                </div>
                                <div className="mt-6 ml-4 mr-8 w-80">
                                    <ul className="list-disc">
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col ml-2">
                                <div>
                                    <span className="text-4xl text-gray-300 font-bold">2021 Q3</span>
                                </div>
                                <div className=" mt-6 ml-4 mr-8 w-80">
                                    <ul className="list-disc">
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col ml-2">
                                <div>
                                    <span className="text-4xl text-gray-300 font-bold">2021 Q3</span>
                                </div>
                                <div className=" mt-6 ml-4 mr-8 w-80">
                                    <ul className="list-disc">
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col ml-2">
                                <div>
                                    <span className="text-4xl text-gray-300 font-bold">2021 Q3</span>
                                </div>
                                <div className=" mt-6 ml-4 mr-8 w-80">
                                    <ul className="list-disc">
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col ml-2">
                                <div>
                                    <span className="text-4xl text-gray-300 font-bold">2021 Q3</span>
                                </div>
                                <div className=" mt-6 ml-4 mr-8 w-80">
                                    <ul className="list-disc">
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col ml-2">
                                <div>
                                    <span className="text-4xl text-gray-300 font-bold">2021 Q3</span>
                                </div>
                                <div className=" mt-6 ml-4 mr-8 w-80">
                                    <ul className="list-disc">
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                        <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col ml-2">
                            <div>
                                <span className="text-4xl text-gray-300 font-bold">2021 Q3</span>
                            </div>
                            <div className=" mt-6 ml-4 mr-8 w-80">
                                <ul className="list-disc">
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                </ul>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="bg-gray-1000 h-screen sm:px-7 sm:py-16 md:hidden xl:hidden lg:hidden">
                <div className="sm:mx-8">
                    <Image src={roadmapText} alt="Roadmap"/>
                </div>
                <div className="sm:px-8">
                    <Slider {...settings}>
                        <div className="flex flex-col ml-6">
                            <div className=" w-full sm:py-8">
                                <span className="text-3xl text-gray-300 font-bold sm:ml-14">2021 Q3</span>
                            </div>
                            <div className="">
                                <ul className="list-disc">
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col ml-6">
                            <div className=" w-full sm:py-8">
                                <span className="text-3xl text-gray-300 font-bold sm:ml-14">2021 Q3</span>
                            </div>
                            <div className="">
                                <ul className="list-disc">
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col ml-6">
                            <div className=" w-full sm:py-8">
                                <span className="text-3xl text-gray-300 font-bold sm:ml-14">2021 Q3</span>
                            </div>
                            <div className="">
                                <ul className="list-disc">
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col ml-6">
                            <div className=" w-full sm:py-8">
                                <span className="text-3xl text-gray-300 font-bold sm:ml-14">2021 Q3</span>
                            </div>
                            <div className="">
                                <ul className="list-disc">
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                </ul>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="bg-gray-1000 md:h-screen md:px-7 md:py-44 sm:hidden xl:hidden lg:hidden">
                <div className="sm:mx-8 md:mx-8">
                    <Image src={roadmapText} alt="Roadmap"/>
                </div>
                <div className="sm:px-8 md:px-8">
                    <Slider {...settings}>
                        <div className="flex flex-col ml-6">
                            <div className="w-full sm:py-8 md:py-8">
                                <span className="text-3xl text-gray-300 font-bold sm:ml-14 md:ml-14">2021 Q3</span>
                            </div>
                            <div className="">
                                <ul className="list-disc">
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col ml-6">
                            <div className="w-full sm:py-8 md:py-8">
                                <span className="text-3xl text-gray-300 font-bold sm:ml-14 md:ml-14">2021 Q3</span>
                            </div>
                            <div className="">
                                <ul className="list-disc">
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                </ul>
                            </div>
                        </div>
                    </Slider>
            </div>
        </div>
            <div className="bg-gray-1000 lg:h-screen lg:px-7 lg:py-80 sm:hidden xl:hidden md:hidden">
                <div className="lg:mx-8 lg:mx-8">
                    <Image src={roadmapText} alt="Roadmap"/>
                </div>
                <div className="lg:px-8 lg:px-8">
                    <Slider {...settings}>
                        <div className="flex flex-col ml-6">
                            <div className="w-full lg:py-8 lg:py-8 text-center">
                                <span className="text-3xl text-gray-300 font-bold lg:ml-14 text-center">2021 Q3</span>
                            </div>
                            <div className="">
                                <ul className="list-disc">
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.e iaculis.e iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida iaculisiaculisiaculisiaculis congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat eratiaculisiaculisiaculis gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat iaculisiaculisiaculis nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiatiaculisiaculisiaculiss erat gravida nibh coiaculisiaculisiaculisiaculisiaculisngue iaculis.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col ml-6">
                            <div className="w-full lg:py-8 lg:py-8 text-center">
                                <span className="text-3xl text-gray-300 font-bold lg:ml-14 text-center">2021 Q3</span>
                            </div>
                            <div className="">
                                <ul className="list-disc">
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                    <li className="text-xl text-white font-extralight">Cras feugiat erat gravida nibh congue iaculis.</li>
                                </ul>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}