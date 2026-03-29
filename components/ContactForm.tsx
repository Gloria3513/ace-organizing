"use client";

import { motion } from "framer-motion";

const steps = [
  { icon: "📸", text: "정리가 필요한 공간 사진을 찍어주세요" },
  { icon: "💬", text: "카카오톡으로 사진과 함께 문의해주세요" },
  { icon: "📋", text: "맞춤 견적과 일정을 안내드립니다" },
];

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding bg-primary-dark">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            무료 상담 신청하기
          </h2>
          <p className="text-white/70 text-lg">
            사진 한 장이면 맞춤 견적을 받아보실 수 있어요
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-xl"
        >
          {/* 상담 진행 단계 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{step.icon}</div>
                <div className="text-xs text-primary-dark font-bold mb-1">
                  STEP {i + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-8">
            {/* 카카오톡 상담 버튼 */}
            <a
              href="https://pf.kakao.com/_GDxixdX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#FEE500] text-[#1A1A1A] py-4 rounded-full text-lg font-bold hover:brightness-95 transition"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.67-.15.56-.96 3.58-1 3.73 0 .09.03.18.1.23a.26.26 0 00.25.02c.33-.05 3.83-2.5 4.44-2.93.5.07 1.02.1 1.55.1 5.52 0 10-3.58 10-7.82S17.52 3 12 3z" />
              </svg>
              카카오톡으로 상담하기
            </a>

            {/* 전화 상담 */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400 mb-2">
                전화 상담도 가능합니다
              </p>
              <a
                href="tel:010-3465-0804"
                className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:underline"
              >
                📞 010-3465-0804
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
