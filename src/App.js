import "./App.css";
import { motion, useSpring } from "framer-motion";

function App() {
  return (
    <>
      {/* Body DIV */}
      <motion.div
        className="bodyDiv"
        initial={{
          y: -2000,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 55,
        }}
      ></motion.div>
      {/* Header DIV */}
      <motion.div
        className="headerDiv"
        initial={{
          x: 2000,
          scale: 0,
        }}
        animate={{
          x: 10,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 1,
        }}
      >
        <div>HEADER</div>
      </motion.div>
      {/* 1st CONTENT */}
      <motion.div
        id="first"
        initial={{
          y: 1000,
          scale: 0,
          borderRadius: 0,
        }}
        animate={{
          y: 60,
          scale: 1,
          borderRadius: 10,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          delay: 3,
        }}
      >
        CONTENT
      </motion.div>
      {/* 2nd CONTENT */}
      <motion.div
        id="second"
        initial={{
          y: 1000,
          scale: 0,
          borderRadius: 0,
        }}
        animate={{
          y: 60,
          scale: 1,
          borderRadius: 10,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          delay: 3.5,
        }}
      >
        CONTENT
      </motion.div>
      {/* 3rd CONTENT */}
      <motion.div
        id="third"
        initial={{
          y: 1000,
          scale: 0,
          borderRadius: 0,
        }}
        animate={{
          y: 60,
          scale: 1,
          borderRadius: 10,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          delay: 4,
        }}
      >
        CONTENT
      </motion.div>
      {/* Footer DIV */}
      <motion.div
        className="footerDiv"
        initial={{
          x: -2000,
          scale: 0,
        }}
        animate={{
          x: -20,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 1.5,
        }}
      >
        FOOTER
      </motion.div>
    </>
  );
}

export default App;
