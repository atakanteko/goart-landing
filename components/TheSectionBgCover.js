import { useEffect, useRef, useState } from "react";
import useCollapse from 'react-collapsed';
import Image from "next/image";
import place from "../public/assets/images/purple-bg-third-icon.svg"
import exit from "../public/assets/images/exit.svg"

export const TheSectionBgCover = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [id, setId] = useState(0);
    const textInfo = [
        {
            id : 0,
            title: "WHAT IS MOVE TO EARN POINT?",
            body: "Cras feugiat erat gravida nibh congue iaculis. Duis fermentum scelerisque ullamcorper. Cras eget diam blandit, sagittis metus vel, imperdiet justo. Nulla vitae nisi ac velit scelerisque suscipit id in erat. Quisque dictum sapien id est cursus elementum. In vitae nunc ante. Donec laoreet neque nisl, et elementum erat elementum sit amet. Duis viverra lectus sit amet arcu fringilla venenatis. Sed dictum nibh quis dui lacinia, iaculis interdum felis vestibulum."
        },
        {
            id : 1,
            title: "WHAT IS MOVE TO EARN POINT?",
            body: "Cras feugiat erat gravida nibh congue iaculis. Duis fermentum scelerisque ullamcorper. Cras eget diam blandit, sagittis metus vel, imperdiet justo. Nulla vitae nisi ac velit scelerisque suscipit id in erat. Quisque dictum sapien id est cursus elementum. In vitae nunc ante. Donec laoreet neque nisl, et elementum erat elementum sit amet. Duis viverra lectus sit amet arcu fringilla venenatis. Sed dictum nibh quis dui lacinia, iaculis interdum felis vestibulum."
        },
        {
            id : 2,
            title: "WHAT IS MOVE TO EARN POINT?",
            body: "Cras feugiat erat gravida nibh congue iaculis. Duis fermentum scelerisque ullamcorper. Cras eget diam blandit, sagittis metus vel, imperdiet justo. Nulla vitae nisi ac velit scelerisque suscipit id in erat. Quisque dictum sapien id est cursus elementum. In vitae nunc ante. Donec laoreet neque nisl, et elementum erat elementum sit amet. Duis viverra lectus sit amet arcu fringilla venenatis. Sed dictum nibh quis dui lacinia, iaculis interdum felis vestibulum."
        },
        {
            id : 3,
            title: "WHAT IS MOVE TO EARN POINT?",
            body: "Cras feugiat erat gravida nibh congue iaculis. Duis fermentum scelerisque ullamcorper. Cras eget diam blandit, sagittis metus vel, imperdiet justo. Nulla vitae nisi ac velit scelerisque suscipit id in erat. Quisque dictum sapien id est cursus elementum. In vitae nunc ante. Donec laoreet neque nisl, et elementum erat elementum sit amet. Duis viverra lectus sit amet arcu fringilla venenatis. Sed dictum nibh quis dui lacinia, iaculis interdum felis vestibulum."
        },
    ]
    return(
        <div className={`bg-cover bg-center bg-section-two-bg-cover h-screen sm:hidden md:hidden`}>
            <div className="flex flex-row justify-between pt-64 max-w-full max-h-full  px-48">
                {
                    textInfo.map((item, index) => {
                        return(
                            <div className="mb-6 last:mb-0 odd:mt-96" key={index}>
                                <div {...getToggleProps({
                                    onClick: () => setId(item.id)
                                     })} >
                                    {(isExpanded && id===item.id) ? <div className="flex flex-row
                                              items-start
                                              rounded-md
                                              bg-second-page-information-box-bg
                                              w-second-page-information-card-width
                                              ">
                                        <div className="mr-3 bg-second-page-information-box-exit-bg py-2.5 px-3" {...getCollapseProps()}>
                                            <Image src={exit} width={60} height={60} />
                                        </div>
                                        <div className="mb-12">
                                            <div className="mt-6">
                                                <span className="text-2xl leading-4	text-white font-black">{item.title}</span>
                                            </div>
                                            <div className="mt-8">
                                        <span className="text-base font-normal text-white">
                                            {item.body}
                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                        : <div className={`${(id!==item.id && isExpanded) ? "hidden" : ""}`}>
                                            <Image src={place} />
                                          </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}