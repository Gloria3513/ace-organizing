"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🏠",
    title: "가정 정리수납",
    desc: "주방, 거실, 침실, 아이방 등 공간별 맞춤 정리로 쾌적한 생활공간을 만들어 드립니다.",
    features: ["주방 정리", "옷장 정리", "아이방 정리", "거실 정리"],
  },
  {
    icon: "🏢",
    title: "사무실 정리",
    desc: "업무 효율을 높이는 오피스 정리 컨설팅으로 깔끔한 업무 환경을 제공합니다.",
    features: ["서류 정리", "책상 정리", "수납 시스템", "공용공간 정리"],
  },
  {
    icon: "📦",
    title: "이사·입주 정리",
    desc: "새 공간에 맞는 수납 동선 설계부터 짐 정리까지 한 번에 해결해 드립니다.",
    features: ["동선 설계", "짐 배치", "수납용품 추천", "라벨링"],
  },
  {
    icon: "📋",
    title: "정리수납 컨설팅",
    desc: "1:1 맞춤 상담으로 나에게 맞는 정리 습관과 수납 방법을 코칭해 드립니다.",
    features: ["1:1 상담", "정리 습관 코칭", "수납 방법 교육", "사후 관리"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-light/60 text-primary-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            서비스 안내
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            에이스정리수납이 도와드립니다
          </h2>
          <p className="text-muted text-lg">
            공간에 맞는 최적의 정리수납 솔루션을 제공합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted mb-5 leading-relaxed">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="bg-section-bg text-sm text-muted px-3 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
