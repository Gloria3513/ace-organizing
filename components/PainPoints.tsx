"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    icon: "😰",
    question: "매일 물건을 찾느라 스트레스 받아보신 적 있으시다면?",
  },
  {
    icon: "📦",
    question: "이사 후 짐 정리, 어디서부터 시작해야 할지 막막하다면?",
  },
  {
    icon: "🔄",
    question: "정리해도 금방 어질러져서 포기한 적 있으시다면?",
  },
  {
    icon: "🗄️",
    question: "수납공간은 있는데 제대로 활용을 못 하고 계신다면?",
  },
  {
    icon: "👕",
    question: "옷장 문 열기가 두려우실 정도라면?",
  },
  {
    icon: "🍳",
    question: "주방이 늘 정신없어서 요리가 싫어지셨다면?",
  },
];

export default function PainPoints() {
  return (
    <section className="section-padding bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            혹시 이런 경험,
            <br />
            <span className="text-primary-dark">있으시다면?</span>
          </h2>
          <p className="text-muted text-lg">
            하나라도 해당된다면, 전문가의 도움이 필요한 순간입니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painPoints.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 border-l-4 border-primary-dark"
            >
              <span className="text-3xl shrink-0">{item.icon}</span>
              <p className="text-foreground font-medium leading-relaxed">
                {item.question}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
