"use client";

import { motion } from "framer-motion";

const promises = [
  {
    icon: "🎯",
    title: "100%",
    subtitle: "맞춤 컨설팅으로",
    desc: "고객님의 생활 습관과 공간에 딱 맞는 수납 방법을 제안합니다",
  },
  {
    icon: "🛒",
    title: "수납용품 0원",
    subtitle: "이미 있는 걸 활용",
    desc: "불필요한 수납용품 구매 없이, 있는 것을 최대한 활용합니다",
  },
  {
    icon: "✅",
    title: "작업 Zero!",
    subtitle: "추가 비용 없이",
    desc: "견적 이후 추가 비용 없이 깔끔하게 작업을 완료합니다",
  },
];

export default function Promise() {
  return (
    <section className="section-padding bg-primary-dark text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            정리정돈은 한 번으로
            <br />
            끝나지 않습니다.
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            그래서 에이스정리수납은 단순 정리가 아닌,
            <br />
            유지 가능한 수납 시스템을 만들어 드립니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promises.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-colors"
            >
              <span className="text-4xl block mb-4">{item.icon}</span>
              <div className="text-3xl font-bold mb-1 text-primary-light">
                {item.title}
              </div>
              <div className="text-sm font-medium text-white/80 mb-3">
                {item.subtitle}
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
