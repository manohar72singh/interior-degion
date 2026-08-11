"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";

const SPLASH_DURATION = 1800;

export default function SplashScreen() {
  // Always starts visible — no persistence, so it plays on every fresh
  // page load (hard refresh included). Same value on server and client
  // render, so there's no hydration mismatch or flash of the page beneath.
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setShow(false), SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) {
      document.body.style.overflow = "";
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Logo light markClassName="h-14 w-14" wordmarkClassName="text-base" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
