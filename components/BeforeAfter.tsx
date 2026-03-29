"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  {
    title: "옷장 정리",
    location: "가정",
    before: "/images/before-after/closet-before.jpeg",
    after: "/images/before-after/closet-after.jpeg",
  },
  {
    title: "드레스룸 정리",
    location: "가정",
    before: "/images/before-after/dressroom-before.jpeg",
    after: "/images/before-after/dressroom-after.jpeg",
  },
  {
    title: "아이방 정리",
    location: "가정",
    before: "/images/before-after/kidsroom-before.jpeg",
    after: "/images/before-after/kidsroom-after.jpeg",
  },
  {
    title: "팬트리 · 창고",
    location: "가정",
    before: "/images/before-after/pantry2-before.jpeg",
    after: "/images/before-after/pantry2-after.jpeg",
  },
  {
    title: "거실 정리",
    location: "가정",
    before: "/images/before-after/living-before.jpeg",
    after: "/images/before-after/living-after.jpeg",
  },
  {
    title: "거실 정리 2",
    location: "가정",
    before: "/images/before-after/living2-before.jpeg",
    after: "/images/before-after/living2-after.jpeg",
  },
  {
    title: "사무실 정리",
    location: "사무실",
    before: "/images/before-after/office-before.jpeg",
    after: "/images/before-after/office-after.jpeg",
  },
  {
    title: "창고 · 수납실",
    location: "사무실",
    before: "/images/before-after/storage-before.png",
    after: "/images/before-after/storage-after.png",
  },
  {
    title: "수납장 · 선반",
    location: "어린이집",
    before: "/images/before-after/shelf-before.png",
    after: "/images/before-after/shelf-after.png",
  },
  {
    title: "팬트리 · 창고",
    location: "가정",
    before: "/images/before-after/pantry-before.png",
    after: "/images/before-after/pantry-after.png",
  },
  {
    title: "사무공간 1",
    location: "사무실",
    before: "/images/before-after/office1-before.png",
    after: "/images/before-after/office1-after.png",
  },
  {
    title: "사무공간 2",
    location: "사무실",
    before: "/images/before-after/office2-before.png",
    after: "/images/before-after/office2-after.png",
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
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="p-4 pb-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className="text-sm text-muted">{item.location}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 px-4 pb-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={item.before}
                    alt={`${item.title} Before`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 280px"
                  />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={item.after}
                    alt={`${item.title} After`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 280px"
                  />
                  <span className="absolute top-2 right-2 bg-primary-dark text-white text-xs px-3 py-1 rounded-full font-medium">
                    After
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Labeling showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white rounded-2xl overflow-hidden shadow-sm max-w-md mx-auto"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/labeling.png"
              alt="라벨링 작업"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-bold text-base">라벨링으로 완벽 마무리</h3>
            <p className="text-sm text-muted">
              모든 수납 공간에 라벨링까지 완료하여 누구나 쉽게 찾을 수 있습니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
