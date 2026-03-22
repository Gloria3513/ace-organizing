"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "김○○",
    location: "서울",
    rating: 5,
    text: "주방이 이렇게 넓었나 싶을 정도로 달라졌어요! 수납 동선까지 고려해주셔서 요리할 때 너무 편해졌습니다.",
  },
  {
    name: "이○○",
    location: "경기",
    rating: 5,
    text: "이사 후 짐 정리를 맡겼는데, 혼자 했으면 일주일은 걸렸을 일을 하루 만에 끝내주셨어요. 라벨링까지 해주시니 찾기도 편해요!",
  },
  {
    name: "박○○",
    location: "인천",
    rating: 5,
    text: "아이방 정리를 부탁했는데, 아이가 스스로 정리하는 습관이 생겼어요. 아이 눈높이에 맞춘 수납이 정말 좋았습니다.",
  },
  {
    name: "정○○",
    location: "서울",
    rating: 5,
    text: "옷장 정리 후 안 입는 옷을 정리하니 마음까지 가벼워졌어요. 홍선아 대표님 정말 감사합니다!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-light/60 text-primary-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            고객 후기
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            정리 받으신 분들의 한마디
          </h2>
          <p className="text-muted text-lg">
            실제 고객분들의 솔직한 후기입니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-section-bg rounded-2xl p-6"
            >
              <Stars count={review.rating} />
              <p className="text-foreground leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="text-sm text-muted">
                {review.name}님 · {review.location}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
