"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useWindowSize } from "@/hooks/window";
import { FileQuestion, DollarSign, Bell, MapIcon } from "lucide-react";

// Define type for each item in the accordion
interface AccordionItem {
  id: number;
  title: string;
  Icon: React.ElementType;
  imgSrc: string;
  description: string;
}

// Define type for Panel props
interface PanelProps {
  open: number;
  setOpen: (id: number) => void;
  id: number;
  Icon: React.ElementType;
  title: string;
  imgSrc: string;
  description: string;
}

const VerticalAccordion = () => {
  const [open, setOpen] = useState<number>(items[0].id);

  return (
    <section className="p-4 bg-gradient-to-b from-transparent/80 via-transparent/95 to-black">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden rounded-3xl">
        {items.map((item) => (
          <Panel
            key={item.id}
            open={open}
            setOpen={setOpen}
            id={item.id}
            Icon={item.Icon}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

const Panel: React.FC<PanelProps> = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description,
}) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-[#1c1c1d] hover:bg-[#434343] transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-900 text-white flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{ writingMode: "vertical-lr" }}
          className="hidden  lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square rounded-full bg-orange-600 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-[#1c1c1d] group-hover:bg-[#434343] transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-700 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: { width: "100%", height: "100%" },
  closed: { width: "0%", height: "100%" },
};

const panelVariantsSm = {
  open: { width: "100%", height: "200px" },
  closed: { width: "100%", height: "0px" },
};

const descriptionVariants = {
  open: { opacity: 1, y: "0%", transition: { delay: 0.125 } },
  closed: { opacity: 0, y: "100%" },
};

// Define items array with proper types
const items: AccordionItem[] = [
  {
    id: 1,
    title: "General Information",
    Icon: DollarSign,
    imgSrc: "/accordian/accordian1.png",
    description:
      "Find answers about entry, registration, and eligibility criteria.",
  },
  {
    id: 2,
    title: "Event Guidelines",
    Icon: FileQuestion,
    imgSrc: "/accordian/accordian2.png",
    description:
      "Learn about event rules, participation guidelines, and conduct policies.",
  },
  {
    id: 3,
    title: "Competition Rules",
    Icon: Bell,
    imgSrc: "/accordian/accordian3.png",
    description:
      "Detailed rules and judging criteria for various competitions.",
  },
  {
    id: 4,
    title: "Venue & Facilities",
    Icon: MapIcon,
    imgSrc: "/accordian/accordian4.png",
    description:
      "Information on venue layout, facilities, and accessibility options.",
  },
];
