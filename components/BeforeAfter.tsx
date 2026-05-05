"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PortfolioItem {
  title: string;
  location: string;
  type: "image" | "video";
  before: string;
  after: string;
}

// Cloudinary base URL
const CLD = "https://res.cloudinary.com/dnmsgqwll";

// 구글 시트 연동 전까지 사용할 기본 데이터
const defaultItems: PortfolioItem[] = [
  {
    title: "옷장 정리",
    location: "가정",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/closet-before.jpg`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/closet-after.jpg`,
  },
  {
    title: "드레스룸 정리",
    location: "가정",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/dressroom-before.jpg`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/dressroom-after.jpg`,
  },
  {
    title: "아이방 정리",
    location: "가정",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/kidsroom-before.jpg`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/kidsroom-after.jpg`,
  },
  {
    title: "팬트리 · 창고",
    location: "가정",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/pantry2-before.jpg`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/pantry2-after.jpg`,
  },
  {
    title: "거실 정리",
    location: "가정",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/living-before.jpg`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/living-after.jpg`,
  },
  {
    title: "거실 정리 2",
    location: "가정",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/living2-before.jpg`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/living2-after.jpg`,
  },
  {
    title: "사무실 정리",
    location: "사무실",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/office-before.jpg`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/office-after.jpg`,
  },
  {
    title: "창고 · 수납실",
    location: "사무실",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/storage-before.png`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/storage-after.png`,
  },
  {
    title: "수납장 · 선반",
    location: "어린이집",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/shelf-before.png`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/shelf-after.png`,
  },
  {
    title: "팬트리 · 창고",
    location: "가정",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/pantry-before.png`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/pantry-after.png`,
  },
  {
    title: "사무공간 1",
    location: "사무실",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/office1-before.png`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/office1-after.png`,
  },
  {
    title: "사무공간 2",
    location: "사무실",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/office2-before.png`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/office2-after.png`,
  },
  {
    title: "사무실 정리 2",
    location: "사무실",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/office2-before.jpg`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/office2-after.jpg`,
  },
  {
    title: "드레스룸 정리 2",
    location: "가정",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/dressroom2-before.jpg`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/dressroom2-after.jpg`,
  },
  {
    title: "팬트리 · 수납",
    location: "유치원",
    type: "image",
    before: `${CLD}/image/upload/ace-portfolio/before-after/kindergarten-pantry-before.jpg`,
    after: `${CLD}/image/upload/ace-portfolio/before-after/kindergarten-pantry-after.jpg`,
  },
];

const defaultVideos = [
  `${CLD}/video/upload/ace-portfolio/videos/ace-1.mp4`,
  `${CLD}/video/upload/ace-portfolio/videos/ace-2.mp4`,
  `${CLD}/video/upload/ace-portfolio/videos/ace-3.mp4`,
];

export default function BeforeAfter() {
  const [imageItems, setImageItems] = useState<PortfolioItem[]>(defaultItems);
  const [videoItems, setVideoItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data: PortfolioItem[]) => {
        if (data.length > 0) {
          setImageItems(data.filter((item) => item.type === "image"));
          setVideoItems(data.filter((item) => item.type === "video"));
        }
      })
      .catch(() => {
        // 구글 시트 연동 전이면 기본 데이터 사용
      });
  }, []);

  const videos =
    videoItems.length > 0
      ? videoItems.map((v) => v.before)
      : defaultVideos;

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
          <p className="text-muted text-lg">실제 작업 사례를 확인해보세요</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {imageItems.map((item, i) => (
            <motion.div
              key={`${item.title}-${i}`}
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.before}
                    alt={`${item.title} Before`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.after}
                    alt={`${item.title} After`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-2 right-2 bg-primary-dark text-white text-xs px-3 py-1 rounded-full font-medium">
                    After
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            영상으로 보는 정리 과정
          </h3>
          <p className="text-muted">실제 작업 현장을 영상으로 확인해보세요</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {videos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-[9/16] object-cover"
              />
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/labeling.png"
              alt="라벨링 작업"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
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
