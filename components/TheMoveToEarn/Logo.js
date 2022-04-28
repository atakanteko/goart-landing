import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/goart-logo.svg";


const Logo = () => {
  return (
      <div className="mt-3 min-w-max z-30 xl:ml-192 sm:ml-6 md:ml-6 lg:ml-6">
          <Link href="/" >
              <a>
                  <Image src={logo} alt="GoArt Metaverse" className="mt-3" />
              </a>
          </Link>
      </div>
  );
};

export default memo(Logo);