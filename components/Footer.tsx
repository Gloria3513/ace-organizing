export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">
              에이스정리수납
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              전문 정리수납 컨설턴트가
              <br />
              당신의 공간을 새롭게 바꿔드립니다
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-3">연락처</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>대표: 홍선아</p>
              <p>전화: 010-3465-0804</p>
              <p>이메일: hsahhh@naver.com</p>
            </div>
          </div>

          {/* SNS */}
          <div>
            <h4 className="font-bold mb-3">SNS</h4>
            <div className="flex gap-3">
              <a
                href="https://blog.naver.com/hsahhh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#03C75A] rounded-full flex items-center justify-center text-sm font-bold hover:opacity-80 transition-opacity"
              >
                N
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center text-sm hover:opacity-80 transition-opacity"
              >
                IG
              </a>
              <a
                href="https://www.facebook.com/hongseon.a.736172"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-sm hover:opacity-80 transition-opacity"
              >
                FB
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 에이스정리수납. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
