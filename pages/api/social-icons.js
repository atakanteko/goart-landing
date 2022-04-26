// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { BsFacebook, BsTelegram } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

export default function handler(req, res) {
  res.status(200).json([
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
  ])
}
