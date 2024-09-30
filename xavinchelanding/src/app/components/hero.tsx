'use client';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section>
        <div className="lg:max-w-5xl mx-auto lg:min-h-[300px] lg:mt-24 mt-14 md:px-24 lg:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }} // Start slightly lower and transparent
                animate={{ opacity: 1, y: 0 }} // End at full opacity and original position
                transition={{ duration: 0.5 }} // Duration of the animation
            >
                <h1 className="lg:text-5xl text-3xl text-center lg:px-16 font-bold font-raleway px-10">
                    <span className="bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
                        XaVinche:
                    </span>
                    Transforming engagement and monetizing your creativity.
                </h1>
                <p className="text-center text-sm text-gray-500 font-raleway lg:px-40 lg:pt-5">
                    XaVinche enables users to control their digital identities and monetize content effortlessly. Leveraging the Solana blockchain, we offer a decentralized platform that rewards engagement and fosters genuine connections in social media.
                </p>
            </motion.div>
        </div>
        </section>
    );
}
