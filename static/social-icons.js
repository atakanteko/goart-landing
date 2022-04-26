import {BsFacebook, BsTelegram} from "react-icons/bs";
import {AiFillLinkedin, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaDiscord} from "react-icons/fa";

const socialIcons = [
    {
        title: <BsFacebook size={24} />,
        url: "/facebook"
    },
    {
        title: <AiOutlineTwitter size={24} />,
        url: "/twitter"
    },
    {
        title: <AiOutlineInstagram size={24} />,
        url: "/instagram"
    },
    {
        title: <AiFillLinkedin size={24} />,
        url: "/linkedin"
    },
    {
        title: <AiFillYoutube size={24} />,
        url: "/youtube"
    },
    {
        title: <BsTelegram size={24} />,
        url: "/telegram"
    },
    {
        title: <FaDiscord size={24} />,
        url: "/discord"
    },
];
export default socialIcons;