"use client";

import { motion } from "framer-motion";

export default function KakaoButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone button - mobile only */}
      <motion.a
        href="tel:010-3465-0804"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="md:hidden w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="전화 걸기"
      >
        <span className="text-2xl">📞</span>
      </motion.a>

      {/* KakaoTalk button */}
      <motion.a
        href="#contact"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="w-14 h-14 bg-[#FEE500] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="상담 신청"
      >
        <span className="text-2xl">💬</span>
      </motion.a>
    </div>
  );
}
