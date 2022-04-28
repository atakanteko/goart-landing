import socialIcons from "../../public/static/social-icons";
import Link from "next/link";

const SocialFooter = () => {
    return(
        <div className="sm:about-padding-top
                        md:about-padding-top
                        lg:pt-52
                        pb-8 flex flex-col items-center xl:hidden">
            <div>
                <ul className="flex flex-row">
                    {socialIcons.map((item, index) => (
                        <li key={index} className="mr-waitList-social-icons-margin-right last:m-0">
                            <Link href={item.url}>
                                <a className="text-white">
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-5">
                <span className="text-white text-lg font-normal">© 2022 GoArt Inc. All rights reserved.</span>
            </div>
        </div>
    )
}

export default SocialFooter;