import { memo } from "react";
import Link from "next/link";
import socialIcons from "../../public/static/social-icons";

const SocialNavbar = () => {
    return (
        <div className="mt-26 sm:hidden md:hidden lg:hidden z-30 mr-192">
            <nav>
                <ul className="flex flex-row">
                    {socialIcons.map((item, index) => (
                        <li key={index} className="mr-14 last:m-0">
                            <Link href={item.url}>
                                <a className="text-white">
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default memo(SocialNavbar);