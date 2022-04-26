import purpleIcons from "../public/static/purple-icons";
import Image from "next/image";
export const ThePurpleBicycle = () => {
    return(
        <div className="h-screen px-6
                        sm:bg-purple-bicycle sm:bg-right-top md:bg-cover
                        md:bg-purple-bicycle md:bg-center md:bg-cover
                        lg:bg-purple-bicycle lg:bg-center lg:bg-cover
                        xl:hidden
                        ">
            <div>
                <div className="flex flex-col items-start pt-12 ">
                    {purpleIcons.map((icon, index) => {
                        return(
                          <div key={index} className="mb-6 last:mb-0">
                              <Image src={icon.path}
                                     alt={icon.alt}
                              />
                          </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}