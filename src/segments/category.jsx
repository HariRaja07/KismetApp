import React, { useRef, useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import "../App.css"

const categories = [
  { title: "Occupational Therapy", image: img1 },
  { title: "Physical Therapy", image: img2 },
  { title: "Speech Therapy", image: img3 },
  { title: "Mental Health", image: img1 },
  { title: "Nutrition", image: img2 },
  { title: "Rehabilitation", image: img3 },
  { title: "Wellness", image: img1 },
  { title: "Home Health", image: img2 },
];

const Category = () => {
  const scrollRef = useRef(null);
  const [iconColors, setIconColors] = useState({ left: 'secondary', right: 'secondary' });

  const updateIconColors = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const isLeftmost = scrollLeft === 0;
    const isRightmost = scrollLeft + clientWidth >= scrollWidth;

    setIconColors({
      left: isLeftmost ? 'primary' : 'secondary',
      right: isRightmost ? 'primary' : 'secondary',
    });
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -424 : 424;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      updateIconColors();
    }
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    const startX = e.pageX - scrollRef.current.offsetLeft;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1;
      scrollRef.current.scrollLeft = scrollLeft - walk;
      updateIconColors();
    };

    const handleMouseUp = () => {
      scrollRef.current.removeEventListener('mousemove', handleMouseMove);
      scrollRef.current.removeEventListener('mouseup', handleMouseUp);
      scrollRef.current.removeEventListener('mouseleave', handleMouseUp);
      updateIconColors();
    };

    scrollRef.current.addEventListener('mousemove', handleMouseMove);
    scrollRef.current.addEventListener('mouseup', handleMouseUp);
    scrollRef.current.addEventListener('mouseleave', handleMouseUp);
  };

  useEffect(() => {
    updateIconColors();
    const ref = scrollRef.current;
    ref.addEventListener('scroll', updateIconColors);

    return () => {
      ref.removeEventListener('scroll', updateIconColors);
    };
  }, []);

  return (
    <div className="flex w-full flex-col gap-8 overflow-hidden pb-8 pt-16 sm:py-12">
      <div className="flex w-full justify-center px-4 sm:px-8">
        <div className="flex w-full max-w-7xl flex-col">
          <div className="flex items-center justify-between">
            <p className="text-4xl font-[350] sm:text-display-xs">Popular Categories</p>
            <div className="flex justify-between">
              <button onClick={() => handleScroll('left')}>
                <FaAngleLeft className={iconColors.left === 'primary' ? "text-primary" : "text-secondary"} />
              </button>
              <button onClick={() => handleScroll('right')}>
                <FaAngleRight className={iconColors.right === 'primary' ? "text-primary" : "text-secondary"} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center px-4 sm:px-8">
        <div className="flex w-full flex-col relative -ml-6">
          <div className="flex w-full touch-pan-y flex-col items-center gap-8">
            <div
              ref={scrollRef}
              className="relative flex w-full touch-auto select-none cursor-grab overflow-x-auto scrollbar-hidden"
              style={{ maxHeight: '580px', minHeight: '580px' }}
              onMouseDown={handleDragStart}
            >
              <div className="flex transition-transform duration-400 ease-out">
                {categories.map((category, index) => (
                  <div key={index} style={{ minWidth: '424px', maxWidth: '424px', marginRight: '16px' }}>
                    <a className="group relative flex h-full min-w-[424px] overflow-hidden rounded-lg" href="">
                      <img
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                        src={category.image}
                        alt={category.title}
                      />
                      <div className="bg-gradient-image-overlay absolute inset-0"></div>
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <div className="text-white text-2xl flex items-end justify-between">
                          {category.title}
                          {}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
