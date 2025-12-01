"use client";

import React from "react";

export default function Home() {
  const skills = [
    { name: "📊 MS Office Advanced (Excel·PPT·Word)", rate: 0.82, score: "4.1" },
    { name: "💻 Python Programming (Pandas·Matplotlib)", rate: 0.76, score: "3.8" },
    { name: "🖥 VS Code & Git Bash Workflow", rate: 0.74, score: "3.7" },
    { name: "📉 Econometrics (VAR·Granger·ADF)", rate: 0.72, score: "3.6" },
    { name: "🌍 GIS·입지분석 (국토부 자료·QGIS)", rate: 0.68, score: "3.4" },
    { name: "📝 Business Report Writing", rate: 0.70, score: "3.5" },
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

              {/* === 동그라미 버튼 3개: Project / Contact / Resume === */}
              <div className="hero-banner-buttons">
                <a href="#projects" className="hero-btn primary">
                  Project
                </a>
                <a href="#contact" className="hero-btn ghost">
                  Contact
                </a>
                <a href="#resume-section" className="hero-btn ghost">
                  Resume
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

            {/* 4. 동양엔지니어링 사무보조 */}
            <div className="timeline-item">
              <div className="dot" />
              <h3>2024.07 ~ 2024.08 / 2025.01 ~ 2025.02 · 동양엔지니어링 사무보조</h3>
              <p>
                문서 정리·발주처 서류 전달, 감리 현장 동행 등 사무·현장 지원 업무를
                수행했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* --- Projects --- */}
        <section id="projects" className="section reveal">
          <h2 className="section-title">Projects</h2>
          <p className="section-desc">학회·수업 기반 실전 프로젝트입니다.</p>

          <div className="cards">
            {/* 1. 평택 동삭동 IM */}
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

            {/* 2. 평택 동삭동 PF 사업수지표 */}
            <div className="card reveal">
              <div className="card-image">
                <img src="/projects/pyeongtaek-pf-thumb.png" alt="PF" />
              </div>
              <h3>PF 사업수지표 - 평택 동삭동</h3>
              <p>
                총사업비를 기준으로 PF 사업수지표를 작성하고 exit 분양률을
                산출한 프로젝트입니다.
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

            {/* 3. 주담대 금리 지연효과 분석 */}
            <div className="card reveal">
              <div className="card-image">
                <img
                  src="/projects/mortgage-lag-thumb.png"
                  alt="주택담보대출금리 지연효과 분석"
                />
              </div>
              <h3>주택담보대출금리의 지연효과에 관한 실증분석</h3>
              <p>
                2010~2024년 주택담보대출금리와 주택가격지수·거래량의 시차효과를
                VAR·Granger 검정으로 분석한 실증 연구 보고서입니다.
              </p>
              <a
                className="card-link"
                href="/projects/mortgage-lag-effect.pdf"
                target="_blank"
                rel="noreferrer"
              >
                리포트 열기 →
              </a>
            </div>

            {/* 4. 프로젝트 리츠 & PF 대출 */}
            <div className="card reveal">
              <div className="card-image">
                <img
                  src="/projects/project-reits-thumb.png"
                  alt="프로젝트 리츠와 PF 대출 비교"
                />
              </div>
              <h3>
                프로젝트 리츠의 구조적 특징과 PF 대출의 대체 가능성에 대한 실증적 고찰
              </h3>
              <p>
                프로젝트 리츠의 구조적 특징과 PF 대출의 대체 가능성을,
                하남 교산신도시 적용 시나리오와 해외 사례 비교를 통해 검토한
                보고서입니다.
              </p>
              <a
                className="card-link"
                href="/projects/project-reits-vs-pf.pdf"
                target="_blank"
                rel="noreferrer"
              >
                리포트 열기 →
              </a>
            </div>

            {/* 5. 인구구조와 주택시장 */}
            <div className="card reveal">
              <div className="card-image">
                <img
                  src="/projects/population-housing-structure-thumb.png"
                  alt="인구구조와 주택시장"
                />
              </div>
              <h3>인구구조 변화가 주택시장에 미치는 영향 -대전시-</h3>
              <p>
                인구구조 변화가 주택 수요·공급과 가격·거래량에 미치는 영향을
                연령별 인구구성, 순이동자수, 가구 구조 등을 중심으로 분석한
                연구 리포트입니다.
              </p>
              <a
                className="card-link"
                href="/projects/population-housing-structure.pdf"
                target="_blank"
                rel="noreferrer"
              >
                리포트 열기 →
              </a>
            </div>

            {/* 6. 8·16 주택공급정책 분석 */}
            <div className="card reveal">
              <div className="card-image">
                <img
                  src="/projects/housing-supply-816-policy-thumb.png"
                  alt="8·16 주택공급정책 분석"
                />
              </div>
              <h3>
                주택 공급정책 사례분석과 효과성 평가 - 윤석열 정부의 8·16 대책 -
              </h3>
              <p>
                윤석열 정부 8·16 대책을 중심으로 주요 주택공급정책의 구조와
                실행과정을 비교·분석하고 공급 확대 효과와 한계를 평가한
                정책 분석 보고서입니다.
              </p>
              <a
                className="card-link"
                href="/projects/housing-supply-816-policy.pdf"
                target="_blank"
                rel="noreferrer"
              >
                리포트 열기 →
              </a>
            </div>

            {/* 7. 대구 주택시장 수요·공급 사례 */}
            <div className="card reveal">
              <div className="card-image">
                <img
                  src="/projects/daegu-housing-demand-supply-thumb.png"
                  alt="대구 주택시장 수요·공급 분석"
                />
              </div>
              <h3>
                주택시장의 수요와 공급 원리의 적용 사례 분석 -대구시를 중심으로-
              </h3>
              <p>
                대구 주택시장을 사례로 2020~2025년 준공실적·거래량·가격·미분양
                재고를 분석해 수요·공급 이론이 실제 시장에서 어떻게 작동하고
                괴리되는지 검토한 실증 보고서입니다.
              </p>
              <a
                className="card-link"
                href="/projects/daegu-housing-demand-supply.pdf"
                target="_blank"
                rel="noreferrer"
              >
                리포트 열기 →
              </a>
            </div>

            {/* 8. DSR 정책 리포트 */}
            <div className="card reveal">
              <div className="card-image">
                <img
                  src="/projects/dsr-impact-housing-finance-thumb.png"
                  alt="DSR 정책이 주택금융시장에 미친 영향 분석"
                />
              </div>
              <h3>DSR 정책이 주택금융시장에 미친 영향 분석</h3>
              <p>
                총부채원리금상환비율(DSR) 및 스트레스 DSR 도입 이후,
                주택담보대출·거래량·가격지수 변화를 통해 규제 효과와 한계를
                분석한 보고서입니다.
              </p>
              <a
                className="card-link"
                href="/projects/dsr-impact-housing-finance.pdf"
                target="_blank"
                rel="noreferrer"
              >
                리포트 열기 →
              </a>
            </div>

            {/* 9. 둔촌주공 재건축 PF 리포트 */}
            <div className="card reveal">
              <div className="card-image">
                <img
                  src="/projects/reconstruction-pf-risk-dunchonju-thumb.png"
                  alt="재건축 PF사업의 구조적 리스크와 제도적 개선방안"
                />
              </div>
              <h3>
                재건축 PF사업의 구조적 리스크와 제도적 개선방안 - 둔촌주공 사례를 중심으로
              </h3>
              <p>
                둔촌주공 재건축 PF의 구조, 시공사 지급보증, 정부 개입 과정을
                정리하고 PF 구조 리스크와 제도적 개선방안을 제시한 사례 분석 리포트입니다.
              </p>
              <a
                className="card-link"
                href="/projects/reconstruction-pf-risk-dunchonju.pdf"
                target="_blank"
                rel="noreferrer"
              >
                리포트 열기 →
              </a>
            </div>

            {/* 10. 스폰서 리츠 구조 분석 */}
            <div className="card reveal">
              <div className="card-image">
                <img
                  src="/projects/sponsor-reits-limitations-icheon-water-center-thumb.png"
                  alt="국내 스폰서 리츠의 구조적 한계와 개선방안"
                />
              </div>
              <h3>
                국내 스폰서 리츠의 구조적 한계와 개선방안 - 이천 수처리센터 사례
              </h3>
              <p>
                이천 수처리센터 편입 사례를 통해 스폰서 리츠의 자본조달 구조와
                이해상충 리스크를 분석하고, 해외 사례와 프로젝트 리츠를 활용한
                개선방안을 제안한 보고서입니다.
              </p>
              <a
                className="card-link"
                href="/projects/sponsor-reits-limitations-icheon-water-center.pdf"
                target="_blank"
                rel="noreferrer"
              >
                리포트 열기 →
              </a>
            </div>

            {/* 11. 한미반도체 기업 리서치 */}
            <div className="card reveal">
              <div className="card-image">
                <img
                  src="/projects/hanmi-semiconductor-equity-research-thumb.png"
                  alt="한미반도체 기업·밸류에이션 리서치"
                />
              </div>
              <h3>한미반도체(042700) 기업·밸류에이션 리서치</h3>
              <p>
                HBM 성장과 TC Bonder 경쟁력을 중심으로 한미반도체의 사업 구조와
                글로벌 전략을 분석하고, DCF·상대가치평가를 통해 목표주가를
                산출한 종합 기업 리포트입니다.
              </p>
              <a
                className="card-link"
                href="/projects/hanmi-semiconductor-equity-research.pdf"
                target="_blank"
                rel="noreferrer"
              >
                리포트 열기 →
              </a>
            </div>

            {/* 12. New Project */}
            <div className="card reveal card-empty">
              <div className="card-image card-image-empty">
                <span>+</span>
              </div>
              <h3>New Project</h3>
              <p>새로운 프로젝트가 추가될 예정입니다.</p>
            </div>
          </div>
        </section>

        {/* --- Skills --- */}
        <section className="section reveal">
          <h2 className="section-title">Skills</h2>
          <p className="section-desc">
            실무에 바로 활용 가능한 도구·분석 역량을 5점 만점 기준으로 정리했습니다.
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
                    · 기업분석 보고서 작성 (메가스터디교육)
                    <br />
                    · 기업분석 보고서 작성 (한미반도체)
                    <br />
                    · DIFF 펀드 운용
                  </td>
                </tr>
                <tr>
                  <td>2024.02 ~ 2024.06</td>
                  <td>
                    단국대학교 도시개발·부동산학회 URID 12기
                    <br />
                    · '성수 SK V1 센터' 임장활동
                    <br />
                    · 선배 인터뷰 진행 (신탁사)
                    <br />
                    · 개발 IM 프로젝트 (동삭동 라움프라자)
                    <br />
                    · 단·중·건 연합학술제 해외 부동산 리서치 발표
                  </td>
                </tr>
                <tr>
                  <td>2024.12 ~ 2025.02</td>
                  <td>금융사관학교 기업금융 과정 (최우수조 수료)</td>
                </tr>
                <tr>
                  <td>2024.07 ~ 2024.08 / 2025.01 ~ 2025.02</td>
                  <td>동양엔지니어링 사무보조</td>
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
