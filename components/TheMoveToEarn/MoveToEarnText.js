import Image from "next/image";
import moveToEarn from "../../public/assets/images/move-to-earn-home-page-text.svg";

const MoveToEarnText = () => {
    return (
        <>
            <div className="mt-342 sm:mt-10">
                <Image src={moveToEarn} alt="Move To Earn" className="mt-3" />
            </div>
        </>

    )
}

export default MoveToEarnText;