import { motion } from "framer-motion"

export default function PageTransition({ router, children }) {

    return (
        <motion.div key={router.route} initial="pageInitial" transition={{ duration: 0.2 }} animate="pageAnimate" variants={{
            pageInitial: {
              scale: 1.1,
              opacity: 0.7
            },
            pageAnimate: {
              scale: 1,
              opacity: 1
            },
          }}>
              {children}
        </motion.div>
    )
}