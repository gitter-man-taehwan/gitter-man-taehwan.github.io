"use client";

import React from "react";

export default function Home() {
  const skills = [
    { name: "📊 Real Estate Analysis", rate: 0.85, score: "4.3" },
    { name: "🏦 PF / Trust Structure", rate: 0.8, score: "4.0" },
    { name: "🏙 Housing Policy", rate: 0.75, score: "3.8" },
    { name: "📚 Asset Management", rate: 0.7, score: "3.5" },
    { name: "💻 Python / Excel", rate: 0.65, score: "3.3" },
    { name: "📈 기업·산업 리서치", rate: 0.8, score: "4.0" },
  ];

  React.useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main>
      {/* ===== 위쪽 포트폴리오 영역 ===== */}
      <div className="container">
        {/* --- HERO 배너 --- */}
        <section className="hero">
          <div className="hero-banner">
            {/* 왼쪽 텍스트 */}
            <div className="hero-banner-text">
              <p className="hero-banner-label">
                PORTFOLIO · REAL ESTATE &amp; FINANCE
              </p>

              <h1 className="hero-banner-name">박태환</h1>

              <p className="hero-banner-title">
                평(坪)을 보던 눈으로, 퍼센트(%)를 봅니다.
              </p>

              <p className="hero-banner-sub">
                부동산과 금융을 함께 보는 준비된 지원자 박태환입니다.
              </p>

              <div className="hero-banner-contact">
                <div>
                  <span className="hero-icon">📧</span>
                  <span>dhffp345@naver.com</span>
                </div>
                <div>
                  <span className="hero-icon">🌐</span>
                  <span>github.com/gitter-man-taehwan</span>
                </div>
                <div>
                  <span className="hero-icon">📍</span>
                  <span>경기도 용인 · 단국대학교 부동산학과</span>
                </div>
              </div>

              <div className="hero-banner-buttons">
                <a href="#projects" className="hero-btn primary">
                  프로젝트 보기
                </a>
                <a href="#contact" className="hero-btn ghost">
                  Contact
                </a>
              </div>
            </div>

            {/* 오른쪽 동그란 사진 */}
            <div className="hero-banner-photo">
              <div className="hero-banner-photo-circle">
                <img
                  src="/uploads/KakaoTalk_20250812_161410113.jpg"
                  alt="박태환 프로필"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- My Story --- */}
        <section className="section reveal">
          <h2 className="section-title">My Story</h2>
          <p className="section-desc">제가 걸어온 길을 시간순으로 정리했습니다.</p>

          <div className="timeline">
            {/* 1. 리셀 */}
            <div className="timeline-item">
              <div className="dot" />
              <h3>2019~2020 · "Kream" 플랫폼 리셀러</h3>
              <p>
                리셀 경험으로 ‘가치를 빠르게 읽는 눈’을 갖게 되었습니다.
                <br />
                작은 거래를 넘어서 더 큰 시장을 배우고 싶다는 방향성이 생겼습니다.
              </p>
            </div>

            {/* 2. 군 복무 */}
            <div className="timeline-item">
              <div className="dot" />
              <h3>2020~2022 · 대한민국 육군 병역 이행(지휘관 운전병)</h3>
              <p>
                지휘관을 모시며 기본 예의와 태도가 어떤 상황에서도 흔들리면
                안 된다는 것을 깨달았습니다.
              </p>
            </div>

            {/* 3. 편입 준비 & 성공 */}
            <div className="timeline-item">
              <div className="dot" />
              <h3>2022~2024 · 단국대학교 부동산학과 편입 성공</h3>
              <p>
                더 큰 시장을 목표로 삼고 기초를 쌓기 위해 편입공부에 몰입했고,
                <br />
                새벽 신문배달과 병행하며 끝까지 버틴 결과 부동산학과 편입에
                성공했습니다.
              </p>
            </div>

            {/* 4. 학회·리포트·정책 분석 */}
            <div className="timeline-item">
              <div className="dot" />
              <h3>2024.07 ~ 2024.08 / 2025.01 ~ 2025.02 · 동양엔지니어링 사무보조</h3>
              <p>
                문서 정리·발주처 서류 전달, 감리 현장 동행 등 
                사무·현장 지원 업무를 수행했습니다.
            
              </p>
            </div>

            {/*
            // 5. 연혁 한 칸 더 추가하고 싶을 때 참고용 템플릿
            <div className="timeline-item">
              <div className="dot" />
              <h3>20XX~20XX · 추가 연혁 제목</h3>
              <p>
                첫 번째 문장입니다.
                <br />
                두 번째 문장을 이렇게 아래 줄에 적으면 됩니다.
              </p>
            </div>
            */}
          </div>
        </section>

        {/* --- Projects --- */}
        <section id="projects" className="section reveal">
          <h2 className="section-title">Projects</h2>
          <p className="section-desc">학회·수업 기반 실전 프로젝트입니다.</p>

          <div className="cards">
            <div className="card reveal">
              <div className="card-image">
                <img src="/projects/pyeongtaek-im-thumb.png" alt="IM" />
              </div>
              <h3>개발 IM - 평택시 동삭동 라움 프라자</h3>
              <p>
                사업 개요, 금융 구조, 입지 분석, 분양가 산정, 리스크까지 포함한
                풀 스코프 IM 문서입니다.
              </p>
              <a
                className="card-link"
                href="/projects/pyeongtaek-im.pdf"
                target="_blank"
                rel="noreferrer"
              >
                IM 보고서 열기 →
              </a>
            </div>

            <div className="card reveal">
              <div className="card-image">
                <img src="/projects/pyeongtaek-pf-thumb.png" alt="PF" />
              </div>
              <h3>PF 사업수지표 - 평택 동삭동</h3>
              <p>
                총사업비, 필수사업비, 분양수입, LTV 분석 등 PF 금융모델 원천
                데이터 구성.
              </p>
              <a
                className="card-link"
                href="/projects/pyeongtaek-pf.xls"
                target="_blank"
                rel="noreferrer"
              >
                사업수지표 열기 →
              </a>
            </div>

            <div className="card reveal">
              <h3>New Project</h3>
              <p>새로운 프로젝트가 추가될 예정입니다.</p>
            </div>
          </div>
        </section>

        {/* --- Skills --- */}
        <section className="section reveal">
          <h2 className="section-title">Skills</h2>
          <p className="section-desc">
            학회·수업·프로젝트 기반 5점 만점 자기 평가입니다.
          </p>

          <div className="skill-table">
            {skills.map((s) => (
              <div className="skill-row" key={s.name}>
                <div className="skill-name">{s.name}</div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${s.rate * 100}%` }}
                  />
                </div>
                <div className="skill-score">{s.score} / 5.0</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Contact --- */}
        <section id="contact" className="section reveal">
          <h2 className="section-title">Contact</h2>
          <p className="section-desc">편하게 연락 주세요.</p>

          <div className="contact-box">
            <p>
              <span>📧 이메일</span> : dhffp345@naver.com
            </p>
            <p style={{ marginTop: "0.6rem" }}>
              <span>💼 GitHub</span> : github.com/gitter-man-taehwan
            </p>
          </div>
        </section>
      </div>

      {/* ===== 마지막: 이력서 섹션 ===== */}
      <section id="resume-section" className="reveal">
        <div className="resume-wrapper">
          {/* 왼쪽 인적사항 */}
          <aside className="resume-left">
            <div className="resume-photo">
              <img
                src="/uploads/KakaoTalk_20250812_161410113.jpg"
                alt="프로필 사진"
              />
            </div>

            <h3 className="resume-left-title">인적사항</h3>
            <dl className="resume-info-list">
              <div>
                <dt>이름</dt>
                <dd>박태환</dd>
              </div>
              <div>
                <dt>주소</dt>
                <dd>
                  경기도 용인시 수지구 죽전동
                  <br />
                  1369
                </dd>
              </div>
              <div>
                <dt>휴대전화</dt>
                <dd>010-6693-7901</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>dhffp345@naver.com</dd>
              </div>
            </dl>
          </aside>

          {/* 오른쪽 학력/자격/활동 */}
          <section className="resume-right">
            <div className="resume-top-line" />

            {/* 학력사항 */}
            <h2 className="resume-right-title">학력사항</h2>
            <table className="resume-table">
              <thead>
                <tr>
                  <th>재학 기간</th>
                  <th>구분</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2016.03 ~ 2019.02</td>
                  <td>학교 / 전공</td>
                  <td>대전 유성고등학교 · 자연계열</td>
                </tr>
                <tr>
                  <td>2024.03 ~ 현재</td>
                  <td>학교 / 전공</td>
                  <td>단국대학교 · 부동산학</td>
                </tr>
              </tbody>
            </table>

            {/* 자격사항 */}
            <h2 className="resume-right-title">자격사항</h2>
            <table className="resume-table">
              <thead>
                <tr>
                  <th>취득 기간</th>
                  <th>자격명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024/01/03</td>
                  <td>행정관리사 3급</td>
                </tr>
              </tbody>
            </table>

            {/* 활동사항 */}
            <h2 className="resume-right-title">활동사항</h2>
            <table className="resume-table">
              <thead>
                <tr>
                  <th>활동 기간</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024.03 ~ 2024.12</td>
                  <td>
                    단국대학교 금융학회 IF 33–34기
                    <br />
                    · 기업분석 보고서 작성 (비교스터디)
                    <br />
                    · 기업분석 보고서 작성 (한미반도체)
                    <br />
                    · DCF 리포트 도출
                  </td>
                </tr>
                <tr>
                  <td>2024.02 ~ 2024.06</td>
                  <td>
                    단국대학교 도시개발·부동산학회 URID 12기
                    <br />
                    · 지역 임장활동 수행
                    <br />
                    · 선배 인터뷰 진행
                    <br />
                    · 개발 프로젝트 (상업용 테마로제스) 분석
                    <br />
                    · 판교, 둔전·경기용인 처인 일대 부동산 타겟지 발표
                  </td>
                </tr>
                <tr>
                  <td>2024.12 ~ 2025.02</td>
                  <td>금융사관학교 기업금융 과정 (예정 수료)</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </section>

      {/* 맨 마지막 Footer */}
      <div className="footer">
        © {new Date().getFullYear()} TaeHwan Park. All rights reserved.
      </div>
    </main>
  );
}
