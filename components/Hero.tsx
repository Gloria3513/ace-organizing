"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const credentials = [
  { icon: "🏆", label: "이사경력 9년" },
  { icon: "🤝", label: "4년 단체협회 보유" },
  { icon: "📜", label: "1급 자격증 보유" },
  { icon: "🎓", label: "전문 강사" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-kitchen.png"
          alt="깔끔하게 정리된 주방"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-primary-light/60 text-primary-dark px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            공간과 생활을 설계하는
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
        >
          <span className="text-primary-dark">홍선아</span>
          <br />
          정리수납 전문가
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <Image
            src="/images/ace-logo.png"
            alt="에이스정리수납 로고"
            width={100}
            height={33}
            className="h-7 md:h-8 w-auto brightness-0"
          />
          <span className="text-lg md:text-xl text-muted">대표</span>
        </motion.div>

        <motion.a
          href="tel:010-3465-0804"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="inline-block text-2xl md:text-3xl font-bold text-primary-dark mb-10"
        >
          📞 010-3465-0804
        </motion.a>

        {/* Credentials badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10"
        >
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-xl px-4 py-3 shadow-sm"
            >
              <span className="text-2xl block mb-1">{cred.icon}</span>
              <span className="text-sm font-medium text-foreground">
                {cred.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors shadow-lg hover:shadow-xl"
          >
            무료 상담 신청하기
          </a>
          <a
            href="#portfolio"
            className="bg-white text-foreground px-8 py-4 rounded-full text-lg font-medium border-2 border-gray-200 hover:border-primary-dark hover:text-primary-dark transition-colors"
          >
            포트폴리오 보기
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
