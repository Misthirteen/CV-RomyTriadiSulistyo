let currentLang = localStorage.getItem('cv_lang') || 'id';
let currentTheme = localStorage.getItem('cv_theme') || 'dark';
let radarChartInstance = null;
let barChartInstance = null;

// Menyimpan instance IntersectionObserver agar tidak menumpuk saat ganti bahasa
let scrollObserver = null;
let chartObserver = null;
let techObserver = null;

document.documentElement.setAttribute('data-theme', currentTheme);

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

function renderContent() {
  const data = cvData[currentLang];
  const common = cvData.common;

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
    <div class="accordion-item ${idx === 0 ? 'active' : ''}">
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

  initScrollAnimations();
}
function initScrollAnimations() {
  if (scrollObserver) scrollObserver.disconnect();
  if (chartObserver) chartObserver.disconnect();
  if (techObserver) techObserver.disconnect();

  if (radarChartInstance) {
    radarChartInstance.destroy();
    radarChartInstance = null;
  }
  if (barChartInstance) {
    barChartInstance.destroy();
    barChartInstance = null;
  }

  // 1. Icon aplikasi pumping 1 by 1 hingga akhir
  const techGrid = document.getElementById('tech-logos-grid');
  if (techGrid) {
    techObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.tech-logo-item');
          items.forEach((item, index) => {
            item.style.animationDelay = `${index * 65}ms`;
            item.classList.add('animate-pump');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    techObserver.observe(techGrid);
  }

  // 2. Chart bergerak dari 0 sesuai nilai ketika masuk area container
  const chartsContainer = document.querySelector('.charts-grid') || document.getElementById('radarChart');
  if (chartsContainer) {
    chartObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          renderCharts();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    chartObserver.observe(chartsContainer);
  }

  // 3. Semua teks dan item detail muncul dengan animasi saat scroll down
  const textTargets = document.querySelectorAll(
    '.summary-text, .card h3, .timeline-item, .timeline-bullets li, .edu-item, .lang-item, .cert-item, .accordion-item, .tech-summary-item'
  );

  scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  textTargets.forEach(el => {
    el.classList.add('reveal-on-scroll');
    scrollObserver.observe(el);
  });
}

function renderCharts() {
  if (typeof Chart === 'undefined') return;
  const data = cvData[currentLang];
  const isDark = currentTheme === 'dark';
  const textColor = isDark ? '#cbd5e1' : '#334155';
  const gridColor = isDark ? 'rgba(148, 163, 184, 0.2)' : 'rgba(71, 85, 105, 0.15)';
  const accentColor = isDark ? '#38bdf8' : '#0284c7';

  if (radarChartInstance) radarChartInstance.destroy();
  if (barChartInstance) barChartInstance.destroy();

  const dynamicRadarScores = data.coreSkills.map(group => group.items.length);
  const highestScore = Math.max(...dynamicRadarScores, 5);
  const maxRadarScale = Math.ceil(highestScore / 5) * 5;
  const unitLabel = currentLang === 'id' ? 'Kompetensi' : 'Competencies';

  const radarCtx = document.getElementById('radarChart').getContext('2d');
  radarChartInstance = new Chart(radarCtx, {
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

  const barCtx = document.getElementById('barChart').getContext('2d');
  barChartInstance = new Chart(barCtx, {
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
  if (radarChartInstance || barChartInstance) {
    renderCharts();
  }
});

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  localStorage.setItem('cv_lang', currentLang);
  updateLangUI();
  renderContent();
});

document.getElementById('btn-download-pdf').addEventListener('click', () => {
  window.print();
});

updateThemeUI();
updateLangUI();
renderContent();
