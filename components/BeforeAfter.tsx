"use client";

import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "주방 정리",
    location: "아파트 32평",
    duration: "4시간",
    beforeColor: "from-red-200 to-orange-200",
    afterColor: "from-green-200 to-emerald-200",
  },
  {
    title: "옷장 정리",
    location: "아파트 24평",
    duration: "3시간",
    beforeColor: "from-yellow-200 to-red-200",
    afterColor: "from-teal-200 to-cyan-200",
  },
  {
    title: "아이방 정리",
    location: "아파트 28평",
    duration: "5시간",
    beforeColor: "from-purple-200 to-pink-200",
    afterColor: "from-blue-200 to-indigo-200",
  },
  {
    title: "거실 수납",
    location: "빌라 18평",
    duration: "3시간",
    beforeColor: "from-orange-200 to-yellow-200",
    afterColor: "from-emerald-200 to-teal-200",
  },
];

export default function BeforeAfter() {
  return (
    <section id="portfolio" className="section-padding bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-light/60 text-primary-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            포트폴리오
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            눈으로 확인하세요, Before &amp; After
          </h2>
          <p className="text-muted text-lg">
            실제 작업 사례를 확인해보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Before / After placeholder */}
              <div className="grid grid-cols-2 h-48">
                <div
                  className={`bg-gradient-to-br ${item.beforeColor} flex items-center justify-center relative`}
                >
                  <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    Before
                  </span>
                  <span className="text-4xl opacity-50">📷</span>
                </div>
                <div
                  className={`bg-gradient-to-br ${item.afterColor} flex items-center justify-center relative`}
                >
                  <span className="absolute top-3 right-3 bg-primary-dark text-white text-xs px-2 py-1 rounded">
                    After
                  </span>
                  <span className="text-4xl opacity-50">✨</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <div className="flex gap-4 text-sm text-muted">
                  <span>{item.location}</span>
                  <span>|</span>
                  <span>소요시간 {item.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted mt-8 text-sm"
        >
          * 실제 작업 사진은 고객 동의 후 업데이트됩니다
        </motion.p>
      </div>
    </section>
  );
}
