import playStoreIcons from "../../public/static/play-store-icons";
import Image from "next/image";

const IconDisplay = ({type,width,height}) => {
    return(
        <div className={`${type}:flex ${type}:flex-row ${type}:mt-mobile-icons-space-sm`}>
            {playStoreIcons.map((element, i) =>
                <div className={`${type}:mr-mobile-icons-responsive-margin-right ${type}:last:mr-0`}
                     key={i}>
                    <Image src={element.path}
                           alt={element.alt}
                           width={width}
                           height={height}
                    />
                </div>
            )}
        </div>
    )
}

export default IconDisplay;