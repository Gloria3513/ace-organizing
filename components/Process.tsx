"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "상담 신청",
    desc: "카카오톡 또는 전화로 정리 고민을 편하게 공유해주세요.",
    icon: "💬",
  },
  {
    step: "02",
    title: "현장 방문",
    desc: "직접 방문하여 공간을 확인하고 맞춤 플랜을 제안해드립니다.",
    icon: "🏠",
  },
  {
    step: "03",
    title: "정리 시작",
    desc: "분류 → 정리 → 수납 → 라벨링까지 체계적으로 진행합니다.",
    icon: "✨",
  },
  {
    step: "04",
    title: "사후 관리",
    desc: "정리 유지 팁을 안내하고, 필요시 재방문 서비스를 제공합니다.",
    icon: "💝",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary-light/60 text-primary-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            진행 과정
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            이렇게 진행됩니다
          </h2>
          <p className="text-muted text-lg">
            상담부터 사후관리까지 꼼꼼하게
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary-light -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`md:flex items-center md:mb-16 ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <span className="text-3xl mb-3 block">{item.icon}</span>
                    <div className="text-primary-dark font-bold text-sm mb-2">
                      STEP {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 bg-primary-dark rounded-full text-white font-bold text-sm shrink-0 relative z-10">
                  {item.step}
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
