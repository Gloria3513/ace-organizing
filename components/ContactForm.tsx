"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  phone: string;
  area: string;
  spaces: string[];
  message: string;
}

const spaceOptions = [
  "주방",
  "거실",
  "침실",
  "옷장",
  "아이방",
  "서재",
  "사무실",
  "기타",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      alert("전송에 실패했습니다. 전화로 문의해주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-primary-dark">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center text-white"
        >
          <span className="text-5xl mb-4 block">✅</span>
          <h2 className="text-3xl font-bold mb-4">상담 신청이 완료되었습니다!</h2>
          <p className="text-white/80 text-lg">
            빠른 시일 내에 연락드리겠습니다.
            <br />
            감사합니다.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-primary-dark">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            무료 상담 신청하기
          </h2>
          <p className="text-white/70 text-lg">
            정리가 필요한 공간이 있다면 편하게 문의해주세요
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* 이름 */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name", { required: "이름을 입력해주세요" })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-dark focus:ring-1 focus:ring-primary-dark outline-none transition"
                placeholder="홍길동"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* 연락처 */}
            <div>
              <label className="block text-sm font-medium mb-1.5">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                {...register("phone", {
                  required: "연락처를 입력해주세요",
                  pattern: {
                    value: /^[0-9-]+$/,
                    message: "올바른 전화번호를 입력해주세요",
                  },
                })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-dark focus:ring-1 focus:ring-primary-dark outline-none transition"
                placeholder="010-1234-5678"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* 지역 */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1.5">지역</label>
            <input
              {...register("area")}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-dark focus:ring-1 focus:ring-primary-dark outline-none transition"
              placeholder="서울시 강남구"
            />
          </div>

          {/* 정리 희망 공간 */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2.5">
              정리 희망 공간 (복수 선택 가능)
            </label>
            <div className="flex flex-wrap gap-2">
              {spaceOptions.map((space) => (
                <label
                  key={space}
                  className="cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={space}
                    {...register("spaces")}
                    className="peer hidden"
                  />
                  <span className="inline-block px-4 py-2 rounded-full border border-gray-200 text-sm peer-checked:bg-primary-dark peer-checked:text-white peer-checked:border-primary-dark transition-colors">
                    {space}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 메시지 */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1.5">
              기타 요청사항
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-dark focus:ring-1 focus:ring-primary-dark outline-none transition resize-none"
              placeholder="정리가 필요한 상황을 자유롭게 적어주세요"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary-dark text-white py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors disabled:opacity-60"
          >
            {submitting ? "전송 중..." : "무료 상담 신청하기"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
