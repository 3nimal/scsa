import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  link?: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const LeadershipCard = ({ icon, title, description, link, setSelectedPage }: Props) => {
  console.log('-> ' + link)
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-blue-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-200 bg-blue-200 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold text-blue-800 text-2xl">{title}</h4>
      <p className="my-3 text-blue-500 text-xl">{description}</p>
      <a
        className="text-lg font-bold text-blue-500 underline hover:text-secondary-500 cursor-pointer"
        href={link}
        target="_blank" // Opens link in new tab (optional)
        rel="noopener noreferrer" // Security measure for new tab links
      >
        Learn More
      </a>

    </motion.div>
  );
};



export default LeadershipCard;