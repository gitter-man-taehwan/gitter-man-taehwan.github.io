"use client";

import React from "react";

export default function Home() {
  return (
    <main>
      {/* ====== 위쪽: 포트폴리리오 섹션 ====== */}
      <div className="container">
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <p className="tag">Portfolio · Real Estate &amp; Finance</p>

            <h1 className="title">
              평(坪)을 보던 눈으로,
              <br />
              <span>퍼센트(%)를 봅니다.</span>
            </h1>

            <p className="subtitle">준비된 지원자 박태환입니다.</p>

            <div className="hero-buttons">
              <a href="#timeline" className="btn primary">
                연혁
              </a>
              <a href="#projects" className="btn ghost">
                프로젝트
              </a>
              <a href="#skills" className="btn ghost">
                스킬
              </a>
              <a href="#resume" className="btn ghost">
                이력서
              </a>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="section">
          <h2 className="section-title">My Story</h2>
          <p className="section-desc">제가 걸어온 길을 시간순으로 정리했습니다.</p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="dot" />
              <div className="content">
                <h3>2019~2020 · "Kream" 플랫폼 리셀</h3>
                <p>노동의 한계와 자본의 크기를 체감했습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="dot" />
              <div className="content">
                <h3>2020 · 군 전역 후 편입 준비</h3>
                <p>기초부터 다시 공부하며 1년 반 투자했습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="dot" />
              <div className="content">
                <h3>2022 · 부동산학과 편입 성공</h3>
                <p>본격적으로 금융·자산관리 공부 시작.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="dot" />
              <div className="content">
                <h3>2023~2025 · 학회·리포트·정책 분석</h3>
                <p>PF·신탁·정책·기업분석 등 다양한 실무 분석 수행.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <p className="section-desc">학회·수업에서 진행한 실전 업무형 프로젝트입니다.</p>

          <div className="cards">
            {/* IF 프로젝트 */}
            <div className="card">
              <h3>개발 IM - 평택시 동삭동 라움 프라자</h3>
              <p>
                사업 개요, 금융 구조, 분양가 산정, 입지 분석, 리스크까지 풀
                스코프 IM 문서.
              </p>
              <p className="tagline">#IM #PF #평택 #근린시설</p>
              <a
                href="/projects/pyeongtaek-im.pdf"
                target="_blank"
                className="card-link"
              >
                IM 보고서 열기
              </a>
            </div>

            <div className="card">
              <h3>PF 사업수지표 - 평택 동삭동</h3>
              <p>총사업비·필수사업비·분양수입·LTV·ROI 등 실전 PF 모델링.</p>
              <p className="tagline">#PF #사업수지 #엑셀모델링</p>
              <a
                href="/projects/pyeongtaek-pf.xls"
                target="_blank"
                className="card-link"
              >
                사업수지표 열기
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS (업그레이드 버전) */}
        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <p className="section-desc">
            학회·수업·프로젝트를 기준으로 5점 만점 자기 평가를 정리했습니다.
          </p>

          <div className="skill-table">
            <div className="skill-row">
              <div className="skill-name">📊 Real Estate Analysis</div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: "85%" }} />
              </div>
              <div className="skill-score">4.3 / 5.0</div>
            </div>

            <div className="skill-row">
              <div className="skill-name">🏦 PF / Trust Structure</div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: "80%" }} />
              </div>
              <div className="skill-score">4.0 / 5.0</div>
            </div>

            <div className="skill-row">
              <div className="skill-name">🏙 Housing Policy</div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: "75%" }} />
              </div>
              <div className="skill-score">3.8 / 5.0</div>
            </div>

            <div className="skill-row">
              <div className="skill-name">📚 Asset Management</div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: "70%" }} />
              </div>
              <div className="skill-score">3.5 / 5.0</div>
            </div>

            <div className="skill-row">
              <div className="skill-name">💻 Python / Excel</div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: "65%" }} />
              </div>
              <div className="skill-score">3.3 / 5.0</div>
            </div>

            <div className="skill-row">
              <div className="skill-name">📈 기업/산업 리서치</div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: "80%" }} />
              </div>
              <div className="skill-score">4.0 / 5.0</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="section-desc">편하게 연락 주세요.</p>

          <div className="contact-box">
            <p>📧 이메일: dhffp345@naver.com</p>
            <p>💼 GitHub: github.com/gitter-man-taehwan</p>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} TaeHwan Park. All rights reserved.</p>
        </footer>
      </div>

      {/* ====== 아래쪽: 이력서(Resume) 섹션 ====== */}
      <section id="resume" className="resume-page">
        <div className="resume-wrapper">
          {/* 왼쪽 */}
          <aside className="resume-left">
            <div className="resume-photo">
              <img
                src="/uploads/KakaoTalk_20250812_161410113.jpg"
                alt="박태환 증명사진"
              />
            </div>

            <section className="resume-left-block">
              <h2 className="resume-left-title">인적사항</h2>

              <dl className="resume-info-list">
                <div>
                  <dt>이름</dt>
                  <dd>박태환</dd>
                </div>
                <div>
                  <dt>주소</dt>
                  <dd>
                    경기 용인시 수지구 죽전동
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
            </section>
          </aside>

          {/* 오른쪽 */}
          <section className="resume-right">
            <div className="resume-top-line" />

            {/* 학력 */}
            <section className="resume-section">
              <h2 className="resume-right-title">학력사항</h2>

              <table className="resume-table">
                <thead>
                  <tr>
                    <th>기간</th>
                    <th>구분</th>
                    <th>내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2016.03 ~ 2019.02</td>
                    <td>학교</td>
                    <td>대전 유성고등학교</td>
                  </tr>
                  <tr>
                    <td />
                    <td>전공</td>
                    <td>자연계열</td>
                  </tr>
                  <tr>
                    <td>2024.03 ~ 현재</td>
                    <td>학교</td>
                    <td>단국대학교</td>
                  </tr>
                  <tr>
                    <td />
                    <td>전공</td>
                    <td>부동산학</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* 자격 */}
            <section className="resume-section">
              <h2 className="resume-right-title">자격사항</h2>

              <table className="resume-table">
                <thead>
                  <tr>
                    <th>취득일자</th>
                    <th>자격명</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2024.01.03</td>
                    <td>항공관리사 3급</td>
                    <td />
                  </tr>
                </tbody>
              </table>
            </section>

            {/* 활동 */}
            <section className="resume-section">
              <h2 className="resume-right-title">활동사항</h2>

              <table className="resume-table">
                <thead>
                  <tr>
                    <th>기간</th>
                    <th>내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2024.03 ~ 2024.12</td>
                    <td>
                      단국대 금융학회 IF
                      <br />- 기업분석 보고서 (버스케이스터디)
                      <br />- 기업분석 보고서 (한미반도체)
                      <br />- DIFF 팀 활동
                    </td>
                  </tr>

                  <tr>
                    <td>2024.03 ~ 2024.06</td>
                    <td>
                      도시부동산학회 URID 12기
                      <br />- 자료 정리
                      <br />- 선배 인터뷰
                      <br />- 개발 프로젝트 참여
                    </td>
                  </tr>

                  <tr>
                    <td>2024.12 ~ 2025.02</td>
                    <td>
                      금융사탐구반 기업금융 과정(예정)
                      <br />- PF·기업대출·REITs 기초 학습 예정
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}
