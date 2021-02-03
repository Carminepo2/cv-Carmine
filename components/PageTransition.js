import { motion } from "framer-motion";

export default function PageTransition({ router, children }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      transition={{ duration: 0.3 }}
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          scale: 1.5,
        },
        pageAnimate: {
          scale: 1,
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
