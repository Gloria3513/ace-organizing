"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "전화상담",
    desc: "전화 또는 카카오톡으로 정리 고민을 편하게 공유해주세요",
    icon: "📞",
  },
  {
    step: "02",
    title: "방문견적",
    desc: "직접 방문하여 공간 확인 후 맞춤 견적을 안내해드립니다",
    icon: "🏠",
  },
  {
    step: "03",
    title: "작업수행",
    desc: "분류 → 정리 → 수납 → 라벨링까지 체계적으로 진행합니다",
    icon: "✨",
  },
  {
    step: "04",
    title: "사후관리",
    desc: "정리 유지 팁 안내 및 필요시 재방문 서비스를 제공합니다",
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
            작업 Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            이렇게 진행됩니다
          </h2>
          <p className="text-muted text-lg">
            상담부터 사후관리까지 꼼꼼하게
          </p>
        </motion.div>

        {/* Horizontal process flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[12%] right-[12%] h-0.5 bg-primary-light" />

          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Step circle */}
              <div className="w-28 h-28 mx-auto mb-5 bg-white rounded-full border-3 border-primary-dark flex flex-col items-center justify-center shadow-md relative z-10">
                <span className="text-3xl mb-1">{item.icon}</span>
                <span className="text-xs font-bold text-primary-dark">
                  STEP {item.step}
                </span>
              </div>

              {/* Arrow (between steps, desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 -right-3 text-primary-dark text-lg z-20">
                  →
                </div>
              )}

              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed px-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
