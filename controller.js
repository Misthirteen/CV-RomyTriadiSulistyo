let currentLang = localStorage.getItem('cv_lang') || 'id';
let currentTheme = localStorage.getItem('cv_theme') || 'dark';
let radarChartInstance = null;
let barChartInstance = null;
let isLangSwitching = false;

let scrollObserver = null;
let chartObserver = null;
let techObserver = null;
let avatarObserver = null;

document.documentElement.setAttribute('data-theme', currentTheme);

// Semua elemen teks termasuk Nama, Jabatan, Lokasi, Link Sosial, dan Tombol ikut bertransisi
const LANG_TEXT_SELECTORS = [
  '#full-name', '#job-title', '#basic-meta', '.social-row-item',
  '#label-summary', '#btn-download-pdf', '#summary-text',
  '#label-tech-logos', '#label-radar-chart', '#label-bar-chart',
  '#label-jump-skills', '#label-jump-exp', '#label-core-skills',
  '#skills-accordion', '#label-education', '#education-list',
  '#label-languages', '#languages-list', '#label-certifications',
  '#certifications-list', '#label-experience', '#experience-list',
  '#label-achievements', '#achievements-list', '#footer-text'
].join(',');

function updateThemeUI() {
  const slider = document.getElementById('theme-slider');
  const opts = document.querySelectorAll('#theme-toggle .pill-option');
  if (slider) {
    slider.classList.toggle('slide-right', currentTheme === 'dark');
  }
  opts.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.val === currentTheme);
  });
}

function updateLangUI() {
  const slider = document.getElementById('lang-slider');
  const opts = document.querySelectorAll('#lang-toggle .pill-option');
  if (slider) {
    slider.classList.toggle('slide-right', currentLang === 'en');
  }
  opts.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.val === currentLang);
  });
  document.documentElement.setAttribute('lang', currentLang);
}

// Transisi Smooth Cross-Fade untuk Header + Semua Teks saat Switch Bahasa
function switchLanguageSmooth(newLang) {
  if (isLangSwitching || currentLang === newLang) return;
  isLangSwitching = true;

  currentLang = newLang;
  localStorage.setItem('cv_lang', currentLang);
  updateLangUI();

  const targets = document.querySelectorAll(LANG_TEXT_SELECTORS);

  // 1. Fade out lembut seluruh teks & header (220ms)
  targets.forEach(el => {
    el.classList.add('lang-text-target', 'text-fading-out');
  });

  setTimeout(() => {
    // 2. Render ulang konten bahasa baru
    renderContent(true);

    const newTargets = document.querySelectorAll(LANG_TEXT_SELECTORS);
    newTargets.forEach(el => {
      el.classList.add('lang-text-target', 'text-fading-in');
    });

    void document.body.offsetHeight;

    // 3. Fade in beruntun secara halus dari header ke bawah
    requestAnimationFrame(() => {
      newTargets.forEach((el, idx) => {
        el.style.transitionDelay = `${Math.min(idx * 25, 220)}ms`;
        el.classList.remove('text-fading-in', 'text-fading-out');
      });

      setTimeout(() => {
        newTargets.forEach(el => {
          el.style.transitionDelay = '0ms';
        });
        isLangSwitching = false;
      }, 480);
    });
  }, 220);
}

function renderContent(isSwitch = false) {
  const data = cvData[currentLang];
  const common = cvData.common;

  const activeAccordions = new Set();
  document.querySelectorAll('#skills-accordion .accordion-item').forEach((item, idx) => {
    if (item.classList.contains('active')) activeAccordions.add(idx);
  });
  if (activeAccordions.size === 0 && !isSwitch) {
    activeAccordions.add(0);
  }

  document.getElementById('full-name').textContent = common.name;
  document.getElementById('job-title').textContent = data.roleTitle;

  const waNumber = common.phone.replace(/[^0-9]/g, '');
  document.getElementById('basic-meta').innerHTML = `
    <a href="${common.locationUrl}" target="_blank" rel="noopener noreferrer" class="meta-link" title="Lihat Estimasi Lokasi di Google Maps"><span class="no-print">📍 </span>${common.location}</a><span class="meta-sep"> | </span><a href="mailto:${common.email}" class="meta-link" title="Email Me"><span class="no-print">✉️ </span>${common.email}</a><span class="meta-sep"> | </span><a href="https://wa.me{waNumber}" target="_blank" rel="noopener noreferrer" class="meta-link" title="WhatsApp Me"><span class="no-print">💬 </span>${common.phone}</a>
  `;

  document.getElementById('social-links').innerHTML = common.socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-row-item">
      <span>${s.icon}</span> <span>${s.label}</span>
    </a>
  `).join('');

  document.getElementById('label-summary').textContent = data.labels.summary;
  document.getElementById('label-download').textContent = data.labels.downloadPdf;
  document.getElementById('summary-text').textContent = data.summary;

  document.getElementById('label-tech-logos').textContent = data.labels.techLogos;
  document.getElementById('tech-logos-grid').innerHTML = common.techLogos.map(logo => `
    <div class="tech-logo-item" data-tooltip="${logo.name}">
      <img src="${logo.icon}" alt="${logo.name}" loading="lazy" />
    </div>
  `).join('');

  document.getElementById('label-radar-chart').textContent = data.labels.radarChart;
  document.getElementById('label-bar-chart').textContent = data.labels.barChart;
  document.getElementById('label-jump-skills').textContent = data.labels.jumpSkills;
  document.getElementById('label-jump-exp').textContent = data.labels.jumpExp;

  document.getElementById('label-core-skills').textContent = data.labels.coreSkills;
  const countUnit = currentLang === 'id' ? 'Kompetensi' : 'Skills';
  document.getElementById('skills-accordion').innerHTML = data.coreSkills.map((group, idx) => `
    <div class="accordion-item ${activeAccordions.has(idx) ? 'active' : ''}">
      <button class="accordion-header" type="button">
        <span class="accordion-title">${group.category}</span>
        <span class="accordion-right">
          <small class="skill-count-badge">${group.items.length} ${countUnit}</small>
          <span class="accordion-arrow">▼</span>
        </span>
      </button>
      <div class="accordion-body">
        <div class="accordion-inner">
          <div class="skill-tags">
            ${group.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('active');
    });
  });

  document.getElementById('label-education').textContent = data.labels.education;
  document.getElementById('education-list').innerHTML = data.education.map(edu => `
    <div class="edu-item">
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-meta">${edu.institution} (${edu.period})</div>
      <div class="edu-meta">${edu.gpa}</div>
    </div>
  `).join('');

  document.getElementById('label-languages').textContent = data.labels.languages;
  document.getElementById('languages-list').innerHTML = data.languages.map(lang => `
    <div class="lang-item">
      <div class="lang-name">${lang.name}</div>
      <div class="lang-level">${lang.level}</div>
    </div>
  `).join('');

  document.getElementById('label-certifications').textContent = data.labels.certifications;
  document.getElementById('certifications-list').innerHTML = data.certifications.map(cert => `
    <div class="cert-item">
      <div class="cert-title">${cert.title}</div>
      <div class="cert-meta">${cert.issuer} • ${cert.year}</div>
      ${cert.file ? `<a href="${cert.file}" target="_blank" class="cert-link">📄 ${data.labels.viewCert}</a>` : ''}
    </div>
  `).join('');

  document.getElementById('label-experience').textContent = data.labels.experience;
  document.getElementById('experience-list').innerHTML = data.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-period">${exp.period}</div>
      <div class="timeline-role">${exp.role}</div>
      <div class="timeline-org">${exp.company} | ${exp.location}</div>
      <ul class="timeline-bullets">
        ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  document.getElementById('label-achievements').textContent = data.labels.achievements;
  document.getElementById('achievements-list').innerHTML = data.achievements.map(ach => `
    <div class="timeline-item">
      <div class="timeline-period">${ach.period}</div>
      <div class="timeline-role">${ach.title}</div>
      <ul class="timeline-bullets">
        ${ach.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  document.getElementById('footer-text').textContent = data.footer;

  document.querySelectorAll(LANG_TEXT_SELECTORS).forEach(el => {
    el.classList.add('lang-text-target');
  });

  initScrollAnimations(isSwitch);
}
function initScrollAnimations(isSwitch = false) {
  if (scrollObserver) scrollObserver.disconnect();
  if (chartObserver) chartObserver.disconnect();
  if (techObserver) techObserver.disconnect();
  if (avatarObserver) avatarObserver.disconnect();

  // 1. Foto Profil: Tahan 80ms saat buka web agar transisi fade-in terlihat jelas
  const avatarPhoto = document.querySelector('.avatar-photo');
  if (avatarPhoto) {
    if (!isSwitch) avatarPhoto.classList.remove('is-visible');
    avatarObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, isSwitch ? 0 : 80);
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.1 });
    avatarObserver.observe(avatarPhoto);
  }

  // 2. Icon aplikasi pumping 1 by 1
  const techGrid = document.getElementById('tech-logos-grid');
  if (techGrid) {
    techObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const items = entry.target.querySelectorAll('.tech-logo-item');
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            item.style.animationDelay = `${index * 65}ms`;
            item.classList.add('animate-pump');
          });
        } else {
          items.forEach(item => {
            item.classList.remove('animate-pump');
            item.style.animationDelay = '0ms';
          });
        }
      });
    }, { threshold: 0.15 });
    techObserver.observe(techGrid);
  }

  // 3. Chart (Berjalan per kanvas saat masuk 25% area layar)
  if (isSwitch) {
    updateChartLabelsSmooth();
  }

  const radarCanvas = document.getElementById('radarChart');
  const barCanvas = document.getElementById('barChart');
  const radarArea = radarCanvas ? (radarCanvas.parentElement || radarCanvas) : null;
  const barArea = barCanvas ? (barCanvas.parentElement || barCanvas) : null;

  chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const target = entry.target;

      if (radarArea && target === radarArea) {
        if (entry.isIntersecting) {
          if (!radarChartInstance) renderRadarChart();
        } else if (radarChartInstance) {
          radarChartInstance.destroy();
          radarChartInstance = null;
        }
      }

      if (barArea && target === barArea) {
        if (entry.isIntersecting) {
          if (!barChartInstance) renderBarChart();
        } else if (barChartInstance) {
          barChartInstance.destroy();
          barChartInstance = null;
        }
      }
    });
  }, { threshold: 0.25 });

  if (radarArea) chartObserver.observe(radarArea);
  if (barArea) chartObserver.observe(barArea);

  // 4. Seluruh teks termasuk Nama, Jabatan, Lokasi, Link Sosial, Summary, hingga bawah
  const textTargets = document.querySelectorAll(
    '#full-name, #job-title, #basic-meta, .social-row-item, .summary-text, .card h3, .timeline-item, .timeline-bullets li, .edu-item, .lang-item, .cert-item, .accordion-item, .tech-summary-item'
  );

  textTargets.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isSwitch && isInViewport) {
      el.classList.add('reveal-on-scroll', 'is-visible');
    } else {
      el.classList.remove('is-visible');
      el.classList.add('reveal-on-scroll');
    }
  });

  // Jeda 100ms saat pertama kali halaman dibuka agar animasi masuk bagian atas terlihat jelas
  setTimeout(() => {
    let initialDelayCounter = 0;

    scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const rect = entry.target.getBoundingClientRect();
          const isTopIntro = !isSwitch && rect.top < window.innerHeight && window.scrollY < 50;

          if (isTopIntro) {
            const delay = Math.min(initialDelayCounter * 55, 550);
            initialDelayCounter++;
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('is-visible');
            setTimeout(() => {
              entry.target.style.transitionDelay = '0ms';
            }, delay + 750);
          } else {
            entry.target.style.transitionDelay = '0ms';
            entry.target.classList.add('is-visible');
          }
        } else {
          entry.target.style.transitionDelay = '0ms';
          entry.target.classList.remove('is-visible');
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -10px 0px'
    });

    textTargets.forEach(el => scrollObserver.observe(el));
  }, isSwitch ? 0 : 100);
}

function updateChartLabelsSmooth() {
  const data = cvData[currentLang];
  const unitLabel = currentLang === 'id' ? 'Kompetensi' : 'Competencies';

  if (radarChartInstance) {
    radarChartInstance.data.labels = data.charts.radarLabels;
    radarChartInstance.data.datasets.forEach(ds => {
      ds.label = unitLabel;
    });
    radarChartInstance.update('active');
  }
  if (barChartInstance) {
    barChartInstance.data.labels = data.charts.barLabels;
    barChartInstance.update('active');
  }
}
function getChartThemeConfig() {
  const isDark = currentTheme === 'dark';
  return {
    isDark,
    textColor: isDark ? '#cbd5e1' : '#334155',
    gridColor: isDark ? 'rgba(148, 163, 184, 0.2)' : 'rgba(71, 85, 105, 0.15)',
    accentColor: isDark ? '#38bdf8' : '#0284c7'
  };
}

function renderRadarChart() {
  const radarEl = document.getElementById('radarChart');
  if (typeof Chart === 'undefined' || !radarEl) return;

  const data = cvData[currentLang];
  const { isDark, textColor, gridColor, accentColor } = getChartThemeConfig();

  if (radarChartInstance) radarChartInstance.destroy();

  const dynamicRadarScores = data.coreSkills.map(group => group.items.length);
  const highestScore = Math.max(...dynamicRadarScores, 5);
  const maxRadarScale = Math.ceil(highestScore / 5) * 5;
  const unitLabel = currentLang === 'id' ? 'Kompetensi' : 'Competencies';

  radarChartInstance = new Chart(radarEl.getContext('2d'), {
    type: 'radar',
    data: {
      labels: data.charts.radarLabels,
      datasets: [{
        label: unitLabel,
        data: dynamicRadarScores,
        backgroundColor: isDark ? 'rgba(56, 189, 248, 0.22)' : 'rgba(2, 132, 199, 0.2)',
        borderColor: accentColor,
        pointBackgroundColor: accentColor,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1300,
        easing: 'easeOutQuart'
      },
      scales: {
        r: {
          min: 0,
          max: maxRadarScale,
          ticks: {
            stepSize: 5,
            color: textColor,
            backdropColor: 'transparent',
            font: { size: 10, weight: '600' }
          },
          grid: { color: gridColor },
          angleLines: { color: gridColor },
          pointLabels: { color: textColor, font: { size: 11, weight: '600' } }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.raw} ${unitLabel}`
          }
        }
      }
    }
  });
}

function renderBarChart() {
  const barEl = document.getElementById('barChart');
  if (typeof Chart === 'undefined' || !barEl) return;

  const data = cvData[currentLang];
  const { textColor, gridColor, accentColor } = getChartThemeConfig();

  if (barChartInstance) barChartInstance.destroy();

  barChartInstance = new Chart(barEl.getContext('2d'), {
    type: 'bar',
    data: {
      labels: data.charts.barLabels,
      datasets: [{
        data: cvData.common.barDurations,
        backgroundColor: accentColor,
        borderRadius: 6
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1200,
        easing: 'easeOutQuart',
        delay: (context) => {
          return context.type === 'data' && context.mode === 'default' ? context.dataIndex * 120 : 0;
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: gridColor },
          ticks: { color: textColor }
        },
        y: {
          grid: { display: false },
          ticks: { color: textColor, font: { size: 11, weight: '500' } }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const totalMonths = Math.round(ctx.raw * 12);
              const years = Math.floor(totalMonths / 12);
              const months = totalMonths % 12;

              if (currentLang === 'id') {
                if (years > 0 && months > 0) return ` ${years} Tahun ${months} Bulan`;
                if (years > 0) return ` ${years} Tahun`;
                return ` ${months} Bulan`;
              } else {
                const yStr = years > 0 ? `${years} ${years === 1 ? 'Year' : 'Years'}` : '';
                const mStr = months > 0 ? `${months} ${months === 1 ? 'Month' : 'Months'}` : '';
                return ` ${[yStr, mStr].filter(Boolean).join(' ')}`;
              }
            }
          }
        }
      }
    }
  });
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('cv_theme', currentTheme);
  updateThemeUI();
  if (radarChartInstance) renderRadarChart();
  if (barChartInstance) renderBarChart();
});

document.getElementById('lang-toggle').addEventListener('click', () => {
  const nextLang = currentLang === 'id' ? 'en' : 'id';
  switchLanguageSmooth(nextLang);
});

document.getElementById('btn-download-pdf').addEventListener('click', () => {
  window.print();
});

updateThemeUI();
updateLangUI();
renderContent(false);
