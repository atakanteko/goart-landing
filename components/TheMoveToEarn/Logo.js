import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/goart-logo.svg";


const Logo = () => {
  return (
      <div className="mt-3 min-w-max">
          <Link href="/" >
              <a>
                  <Image src={logo} alt="GoArt Metaverse" className="mt-3" />
              </a>
          </Link>
      </div>
  );
};

export default memo(Logo);