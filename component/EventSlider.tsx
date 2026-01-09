"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Users, Clock, Dog, DollarSign, ChevronDown } from "lucide-react";
import Image from "next/image";

interface ICardDataProps {
  id: number;
  title: string;
  price: string;
  time: string;
  guests: number;
  location: string;
  image: string;
}

const INITIAL_CARDS = [
  {
    id: 1,
    title: "Wellness Retreat",
    price: "100.0",
    time: "23:59-0:0",
    guests: 10,
    location: "Indore,  Madhya pradesh, IN",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
  },
  {
    id: 2,
    title: "Yoga Morning",
    price: "80.0",
    time: "23:59-0:0",
    guests: 10,
    location: "Indore,  Madhya pradesh, IN",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
  },
  {
    id: 3,
    title: "Meditation Sync",
    price: "120.0",
    time: "23:59-0:0",
    guests: 10,
    location: "Indore,  Madhya pradesh, IN",
    image: "https://images.unsplash.com/photo-1528319725582-ddc096101511",
  },
  {
    id: 4,
    title: "Sound Healing",
    price: "90.0",
    time: "23:59-0:0",
    guests: 10,
    location: "Indore,  Madhya pradesh, IN",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7",
  },
];

export default function StackedSlider() {
  const [cards, setCards] = useState<ICardDataProps[]>(INITIAL_CARDS);

  const handleNext = () => {
    setCards((prev) => {
      const newArray = [...prev];
      const firstItem = newArray.shift();
      if (firstItem) newArray.push(firstItem);
      return newArray;
    });
  };

  return (
    // 'touch-none' prevents the phone browser from scrolling while you swipe the card
    <div className="relative w-full max-w-[360px] h-[540px] mx-auto touch-none">
      <AnimatePresence mode="popLayout">
        {cards
          .slice(0, 3)
          .reverse()
          .map((card, index) => {
            const visualIndex = 2 - index;
            const isTop = visualIndex === 0;

            return (
              <Card
                key={card.id}
                card={card}
                isTop={isTop}
                index={visualIndex}
                handleNext={handleNext}
              />
            );
          })}
      </AnimatePresence>
    </div>
  );
}

interface ICardComponentProps {
  card: ICardDataProps;
  isTop: boolean;
  index: number;
  handleNext: () => void;
}

function Card({ card, isTop, index, handleNext }: ICardComponentProps) {
  const x = useMotionValue(0);

  // Dynamic UI transforms
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-150, -100, 0, 100, 150], [0, 1, 1, 1, 0]);
  const rotateChevron = useTransform(x, [-150, 0, 150], [-360, 0, 360]);

  return (
    <motion.div
      style={{
        x,
        rotate,
        opacity: isTop ? opacity : 1,
        zIndex: 50 - index,
        position: "absolute",
        willChange: "transform",
      }}
      // Physics and Drag Settings
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={(_, info) => {
        const swipeDistance = info.offset.x;
        const velocity = info.velocity.x;

        // If swipe distance is > 100px OR velocity is high (fast flick)
        if (Math.abs(swipeDistance) > 100 || Math.abs(velocity) > 500) {
          handleNext();
        }
      }}
      animate={{
        scale: 1 - index * 0.06,
        y: index * 18,
        opacity: index === 0 ? 1 : 1 - index * 0.2,
      }}
      // transition controls how fast the next card "steps up"
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 25,
        mass: 1.2,
      }}
      // exit controls how long the swiped card stays visible while flying away
      exit={{
        x: x.get() < 0 ? -600 : 600,
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      className="w-full h-full bg-[#0f0f0f] rounded-[40px] border border-zinc-800 shadow-2xl overflow-hidden origin-bottom select-none"
    >
      <div className="h-[60%] w-full relative pointer-events-none">
        <Image
          src={card.image}
          className="w-full h-full object-cover"
          alt="event"
          fill
        />
        <div className="absolute top-4 right-4 bg-black/60 px-3 font-semibold py-1 rounded-full flex items-center gap-1.5 text-[10px] text-white backdrop-blur-md">
          <Dog size={12} /> Pet Love
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between h-[40%] pointer-events-none">
        <div>
          <h3 className="text-white text-xl font-bold mb-2 tracking-tight">
            {card.title}
          </h3>

          <div className="flex items-center gap-4 text-sm mb-4">
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 bg-gray-50/50 grid place-content-center rounded-full">
                <DollarSign size={10} strokeWidth={3} />
              </div>
              <span className="text-yellow-500 text-md">{card.price}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 bg-gray-50/50 grid place-content-center rounded-full">
                <Clock size={10} strokeWidth={3} />
              </div>
              <span className="text-yellow-500 text-md">{card.price}</span>
            </div>

            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 bg-gray-50/50 grid place-content-center rounded-full">
                <Users size={10} strokeWidth={3} />
              </div>
              <span className="text-yellow-500 text-md">
                {card.guests} guests
              </span>
            </div>
          </div>

          <div className="text-sm flex items-center gap-2">
            <span>Location: </span>
            <span className="truncate text-yellow-500">
              Indore, Madhya Pradesh, IN
            </span>
          </div>
          <div className="text-sm flex items-center gap-2 mt-1.5">
            <span>Starts in</span> <Clock size={14} className="animate-spin" />
            <span className="text-yellow-500"> 7 hrs</span>
          </div>
        </div>

        <div className="flex justify-end items-center mb-2">
          <motion.button
            animate={{ rotate: isTop ? -360 : 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.8,
            }}
            className="bg-zinc-800 p-2 rounded-full text-white border border-zinc-700 pointer-events-auto"
          >
            <ChevronDown size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
