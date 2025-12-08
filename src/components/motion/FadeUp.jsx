import { motion } from "framer-motion";

const FadeUp = ({ children, duration, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, ease: "easeOut" }}
            style={{
                opacity: 0,
                y: 20,
            }}
            className={` transition-opacity duration-${duration} ease-out ${className}`} // to allow the user to add custom classes
        >
            {children}
        </motion.div>
    );
};

export default FadeUp;
