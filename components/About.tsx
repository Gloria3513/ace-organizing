"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            한번 맺은 인연은
            <br />
            <span className="text-primary-dark">소중합니다.</span>
          </h2>
          <p className="text-muted text-lg">
            공간이 변하면 생활이 달라집니다
          </p>
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
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/images/lectures.png"
                alt="홍선아 대표 강의 활동"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              에이스정리수납
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary-dark">홍선아</span> 대표
            </h2>
            <p className="text-muted leading-relaxed mb-6 text-lg">
              수많은 가정과 사무실의 공간을 변화시켜 왔습니다.
              단순한 정리가 아닌, 생활 습관에 맞는 맞춤 수납 솔루션을
              제공하여 정리된 공간이 오래 유지될 수 있도록 도와드립니다.
            </p>

            <a
              href="tel:010-3465-0804"
              className="inline-block text-2xl md:text-3xl font-bold text-primary-dark mb-6 hover:underline"
            >
              📞 010-3465-0804
            </a>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://blog.naver.com/hsahhh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#03C75A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                네이버 블로그
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
