import { ReactNode } from "react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../utils/AnimateOnScroll";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  imageUrl: string;
  delay?: string;
}

const ServiceCard = ({
  id,
  title,
  description,
  icon,
  imageUrl,
  delay = "",
}: ServiceCardProps) => {
  return (
    <AnimateOnScroll className="h-full" delay={delay}>
      <div
        id={id}
        className="service-card bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6 flex-grow">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-blue-500">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-slate-700 mb-4">{description}</p>
          <Link
            to={`/services#${id}`}
            className="text-blue-500 font-medium hover:text-blue-600 inline-flex items-center gap-1 transition-colors duration-300"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default ServiceCard;
