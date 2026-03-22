"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    icon: "📦",
    title: "물건이 넘쳐나요",
    desc: "정리할 엄두가 안 나고 어디서부터 시작해야 할지 모르겠어요",
  },
  {
    icon: "🔄",
    title: "정리해도 금방 어질러져요",
    desc: "열심히 정리해도 일주일이면 다시 원래대로 돌아가요",
  },
  {
    icon: "🏠",
    title: "이사 후 짐 정리가 막막해요",
    desc: "새 집에 짐을 어디에 어떻게 넣어야 할지 감이 안 잡혀요",
  },
  {
    icon: "🗄️",
    title: "수납공간을 활용 못 해요",
    desc: "수납장은 있는데 제대로 활용하지 못하고 있어요",
  },
  {
    icon: "🍳",
    title: "주방이 늘 정신없어요",
    desc: "요리할 때마다 필요한 걸 찾느라 시간을 허비해요",
  },
  {
    icon: "👕",
    title: "옷장 문을 못 열겠어요",
    desc: "옷이 쏟아져 나올 것 같아서 문 열기가 두려워요",
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
            이런 고민, 혹시 나만 하는 건 아니겠죠?
          </h2>
          <p className="text-muted text-lg">
            혼자 해결하기 어려운 정리 고민, 전문가에게 맡겨보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
