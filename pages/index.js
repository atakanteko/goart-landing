import { TheMoveToEarn } from "../components/TheMoveToEarn";
import { TheSectionBgCover } from "../components/TheSectionBgCover";
import { TheWalkingGirl} from "../components/TheWalkingGirl";
// import { TheMeetTeam } from "../components/TheMeetTeam";
import { ThePurpleBicycle } from "../components/ThePurpleBicycle";
import { TheAboutUs } from "../components/TheAboutUs";
import { TheRoadMap } from "../components/TheRoadMap";
export default function Home() {
  return (
   <>
     
    <ThePurpleBicycle />
    <TheSectionBgCover />
    <TheWalkingGirl />
    
    <TheRoadMap />
     {/*<TheMeetTeam />*/}
    <TheAboutUs />
   </>
  )
}
