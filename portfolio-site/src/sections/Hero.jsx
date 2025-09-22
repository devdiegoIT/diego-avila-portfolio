import { motion } from "framer-motion";

const Hero = () => (
  <motion.section
    id="hero"
    className="flex flex-col items-center justify-center text-center flex-grow mt-16 px-6"
    style={{ minHeight: "calc(100vh - 64px)" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.9 }}
  >
    <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-teal-400 max-w-4xl">
      Hello, I’m Diego Avila
    </h2>
    <p className="text-lg sm:text-xl max-w-3xl mb-10 leading-relaxed text-gray-400">
      Aspiring Software Engineer passionate about building reliable, scalable applications with a focus on full-stack development.
    </p>
    <a
      href="#projects"
      className="inline-block bg-teal-500 hover:bg-teal-600 transition px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
    >
      Explore My Projects
    </a>
    <p className="mt-10 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-400">
      I recently completed my B.S. in Information Technology with a Minor in Secure Computing & Networking at UCF.
      I'm actively expanding my skills in Java, Spring Boot, React, and cloud-native technologies while contributing to open-source projects and applying modern development practices to build resilient, high-performance software.
    </p>
  </motion.section>
);

export default Hero;
