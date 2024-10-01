'use client'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function SectionTwo() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className="max-w-5xl mx-auto lg:min-h-[600px] lg:flex lg:flex-col relative overflow-hidden"
      initial={{ opacity: 0, x: 100 }} // Start off-screen (right side)
      animate={isInView ? { opacity: 1, x: 0 } : {}} // Slide in and fade in when in view
      transition={{ duration: 1 }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#32172f] to-transparent via-transparent opacity-30"></div>

      <div className="lg:min-h-[400px] w-full lg:flex lg:p-20 p-10 transition-transform duration-300 ease-in-out hover:scale-105 border border-[#cccccc39] rounded-md relative z-10">
        <div className="lg:flex lg:flex-col gap-5 lg:w-1/2 justify-center">
          <h2 className="text-3xl text-white">Long Term Perspective</h2>
          <p className="text-gray-300 text-sm">
            XaVinche enables users to control their digital identities and monetize content effortlessly. Leveraging the Solana blockchain, we offer a decentralized platform that rewards engagement and fosters genuine connections in social media.
          </p>
        </div>
        <div className="lg:w-1/2">
          {/* Additional Content Here */}
          <img
            src="/images/longterm.png"
            alt="img"
          />
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 gap-3 lg:mt-3 relative z-10">
        <motion.div
          className="lg:min-h-[300px] min-h-auto lg:flex lg:flex-col gap-2 lg:px-20 px-10 py-10 justify-center transition-transform duration-300 ease-in-out hover:scale-105 lg:border border-[#cccccc39] rounded-md"
          initial={{ opacity: 0, x: 100 }} // Start off-screen from the right
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }} // Delay to stagger animation
        >
          <h2 className="text-2xl text-white">Long Term Perspective</h2>
          <p className="text-gray-300 text-sm">
            XaVinche enables users to control their digital identities and monetize content effortlessly. Leveraging the Solana blockchain, we offer a decentralized platform that rewards engagement and fosters genuine connections in social media.
          </p>
        </motion.div>

        <motion.div
          className="lg:min-h-[300px] transition-transform duration-300 ease-in-out hover:scale-105 lg:border border-[#cccccc39] rounded-md"
          initial={{ opacity: 0, x: 100 }} // Start off-screen from the right
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }} // Longer delay for stagger effect
        >
          <div className="lg:min-h-[300px] lg:flex lg:flex-col gap-2 lg:px-20 px-10 py-10 justify-center">
            <h2 className="text-2xl text-white">Long Term Perspective</h2>
            <p className="text-gray-300 text-sm">
              XaVinche enables users to control their digital identities and monetize content effortlessly. Leveraging the Solana blockchain, we offer a decentralized platform that rewards engagement and fosters genuine connections in social media.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
