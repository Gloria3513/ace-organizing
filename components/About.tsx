"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding bg-section-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-light/60 text-primary-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            대표 소개
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center shadow-lg">
              <span className="text-6xl">👩‍💼</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              안녕하세요,
              <br />
              <span className="text-primary-dark">홍선아</span>입니다
            </h2>
            <p className="text-muted leading-relaxed mb-6 text-lg">
              에이스정리수납 대표로서 수많은 가정과 사무실의 공간을
              변화시켜 왔습니다. 단순한 정리가 아닌, 생활 습관에 맞는
              맞춤 수납 솔루션을 제공하여 정리된 공간이 오래 유지될 수
              있도록 도와드립니다.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              깔끔한 공간은 마음의 여유를 만들어줍니다.
              <br />
              정리가 필요한 순간, 편하게 연락주세요.
            </p>
            <div className="flex gap-4">
              <a
                href="https://blog.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#03C75A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                블로그
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                인스타그램
              </a>
              <a
                href="https://www.facebook.com/hongseon.a.736172"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                페이스북
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
