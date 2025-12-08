import { motion } from "framer-motion";

const FadeUp = ({ children, duration, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }} // Animate once when 80% of the element is in view
            transition={{ duration: duration, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeUp;
