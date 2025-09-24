import React from 'react';
import { motion } from 'framer-motion';

// You'll define your topics here.
// Each topic object includes:
// - title: The name of the topic
// - status: Current progress ('seed', 'sprouting', 'growing', 'flowering', 'harvested')
// - description: A brief explanation or what you're currently focusing on
// - link (optional): A link to a related resource, project, or future blog post
const learningTopics = [
  {
    title: "Microservices Architecture with Spring Boot",
    status: "growing",
    description: "Designing and building scalable, independently deployable services for complex backend systems.",
    link: "https://spring.io/microservices"
  },
  {
    title: "GraphQL API Design",
    status: "growing",
    description: "Exploring alternatives to REST for building more efficient and flexible client-server communication.",
    link: "https://graphql.org/learn/"
  },
  {
    title: "Advanced React Hooks & Performance",
    status: "growing",
    description: "Mastering custom hooks, memoization, and context API for building highly performant and maintainable UIs.",
    link: "https://react.dev/reference/react/hooks"
  },
  {
    title: "CI/CD Pipelines with GitHub Actions",
    status: "growing",
    description: "Automating build, test, and deployment workflows to improve development velocity and reliability.",
    link: "https://docs.github.com/en/actions"
  },
  {
    title: "Container Orchestration with Kubernetes",
    status: "growing",
    description: "Consolidated knowledge on deploying, managing, and scaling containerized applications.",
    link: "https://kubernetes.io/docs/concepts/overview/"
  },
  {
    title: "Secure API Design (OAuth 2.0 & JWT)",
    status: "growing",
    description: "Applying security principles to API development by implementing modern authentication and authorization patterns.",
    link: "https://oauth.net/2/"
  },
];

// Helper to map status to colors or icons if desired
const getStatusColor = (status) => {
  switch (status) {
    case 'seed': return 'text-gray-500';
    case 'sprouting': return 'text-yellow-500';
    case 'growing': return 'text-blue-400';
    case 'flowering': return 'text-purple-400';
    case 'harvested': return 'text-teal-400'; // Your primary accent color
    default: return 'text-gray-400';
  }
};

const getStatusEmoji = (status) => {
  switch (status) {
    case 'seed': return '🌱';
    case 'sprouting': return '🌿';
    case 'growing': return '🌳';
    case 'flowering': return '🌸';
    case 'harvested': return '📚'; // Represents knowledge gathered
    default: return '✨';
  }
};


const DigitalGarden = () => {
  return (
    <motion.section
      id="digital-garden"
      className="bg-[#112240] py-20 px-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 text-center mb-8">
        My Digital Garden / Knowledge Hub
      </h2>
      <p className="text-gray-300 text-lg max-w-2xl text-center mb-12">
        A glimpse into the technologies and concepts I'm currently exploring, nurturing, and growing my expertise in.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {learningTopics.map((topic, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg bg-[#0F172A] border border-teal-700 flex flex-col justify-between"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{topic.description}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-teal-800/50">
              <span className={`text-base font-medium ${getStatusColor(topic.status)}`}>
                {getStatusEmoji(topic.status)} {topic.status.charAt(0).toUpperCase() + topic.status.slice(1)}
              </span>
              {topic.link && (
                <a
                  href={topic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 text-sm flex items-center group"
                  aria-label={`Learn more about ${topic.title}`}
                >
                  Explore
                  <svg
                    className="ml-1 w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default DigitalGarden;