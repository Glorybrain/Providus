import { Youtube } from "@/data";
import { YouTubeIcon } from "@/data/Icons";
import { Play } from "lucide-react";
import React, { useState } from "react";

const Iframe = ({ srcLink = "" }) => {
  return (
    <iframe
      className="w-full h-full min-h-[280px] border-0 v-iframe rounded-sm"
      src={srcLink}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      // referrerPolicy="strict-origin-when-cross-origin"
      // referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen></iframe>
  );
};

export default Iframe;
