"use client";
import React, { useState } from "react";
import whatsappIcon from "@/assets/social.png";
import telegramIcon from "@/assets/telegram.png";
import twitterIcon from "@/assets/twitter.png";
import ItemCard from "../item-card/horizental/ItemCard";

const TopFreeAppsWrapper = () => {
  const [appsList] = useState([
    {
      id: "1",
      iconUrl: whatsappIcon,
      title: "whatapp",
      category: {
        id: "1",
        categoryName: "social",
      },
      rating: 4.5,
      ratingCount: 600,
    },
    {
      id: "2",
      iconUrl: telegramIcon,
      title: "telegram",
      category: {
        id: "1",
        categoryName: "social",
      },
      rating: 4.8,
      ratingCount: 1600,
    },
    {
      id: "3",
      iconUrl: twitterIcon,
      title: "x",
      category: {
        id: "1",
        categoryName: "social",
      },
      rating: 3.8,
      ratingCount: 800,
    },
    {
      id: "4",
      iconUrl: twitterIcon,
      title: "x",
      category: {
        id: "1",
        categoryName: "social",
      },
      rating: 3.8,
      ratingCount: 800,
    },
  ]);
  return (
    <div className="w-full flex items-start justify-start gap-2 mb-8">
      <ul className="w-full grid grid-cols-2 gap-x-7 gap-y-5">
        {appsList.map((app) => (
          <ItemCard key={app.id} item={app} />
        ))}
      </ul>
    </div>
  );
};

export default TopFreeAppsWrapper;
