import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      {/* Body DIV */}
      <motion.div
        className="bodyDiv"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 32,
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
          x: 0,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 1,
        }}
      ></motion.div>
      {/* 1st CONTENT */}
      <motion.div
        id="first"
        className="content"
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
      ></motion.div>
      {/* 2nd CONTENT */}
      <motion.div
        id="second"
        className="content"
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
      ></motion.div>
      {/* 3rd CONTENT */}
      <motion.div
        id="third"
        className="content"
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
      ></motion.div>
      {/* Footer DIV */}
      <motion.div
        className="footerDiv"
        initial={{
          x: -2000,
          scale: 0,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 1.5,
        }}
      ></motion.div>
      {/* First Circle */}
      <motion.div
        id="firstCircle"
        className="circles"
        initial={{
          x: -70,
          y: -100,
          scale: 0,
        }}
        animate={{
          x: -70,
          y: 250,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 15,
          delay: 3.5,
        }}
      ></motion.div>
      {/* Second Circle */}
      <motion.div
        id="secondCircle"
        className="circles"
        initial={{
          y: -100,
          scale: 0,
        }}
        animate={{
          y: 250,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 15,
          delay: 4,
        }}
      ></motion.div>
      {/* third Circle */}
      <motion.div
        id="thirdCircle"
        className="circles"
        initial={{
          x: 70,
          y: -100,
          scale: 0,
        }}
        animate={{
          x: 70,
          y: 110,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 15,
          delay: 4.5,
        }}
      ></motion.div>
    </>
  );
}

export default App;
