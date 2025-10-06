import { useState } from "react";
import AnimateOnScroll from "../utils/AnimateOnScroll";

interface PortfolioItemProps {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  beforeImage?: string;
  afterImage?: string;
  delay?: string;
}

const PortfolioItem = ({
  id,
  title,
  category,
  description,
  imageUrl,
  beforeImage,
  afterImage,
  delay = "",
}: PortfolioItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AnimateOnScroll className="h-full" delay={delay}>
        <div
          id={id}
          className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="relative h-56 overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded">
              {category}
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-slate-700 mb-4 line-clamp-3">{description}</p>
            <button
              className="mt-auto text-blue-500 font-medium hover:text-blue-600 inline-flex items-center gap-1 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              Ver Detalhes
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
            </button>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4">
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <span className="inline-block bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded mt-2">
                    {category}
                  </span>
                </div>
                <button
                  className="text-slate-500 hover:text-slate-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>

              {beforeImage && afterImage ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-slate-500 mb-2 font-medium">
                      ANTES
                    </p>
                    <img
                      src={beforeImage}
                      alt={`${title} Before`}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-2 font-medium">
                      DEPOIS
                    </p>
                    <img
                      src={afterImage}
                      alt={`${title} After`}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Detalhes do Projeto
                </h4>
                <p className="text-slate-700 mb-6">{description}</p>
              </div>

              <div className="flex justify-end">
                <button
                  className="btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioItem;
