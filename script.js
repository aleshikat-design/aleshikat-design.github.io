/**
 * Екатерина — Портфолио графического дизайнера
 * Interactive Logic: Portfolio Filter, Lightbox Modal, Quick Telegram Message, Theme Switcher
 */

// Portfolio database with all 35 project images from image/
const portfolioItems = [
  {
    id: 1,
    img: "image/photo_1_2026-10-13_22-30-30.jpg",
    title: "Личная история эксперта",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Сторис",
    desc: "Серия вовлекающих историй для преподавателя математики @Mathwithangelina. Знакомство с аудиторией и личный бренд."
  },
  {
    id: 2,
    img: "image/photo_2_2026-10-13_22-30-30.jpg",
    title: "Методология: «Что делали?»",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Сторис",
    desc: "Структурированный слайд с описанием программы занятий, разбором формул и закреплением материала."
  },
  {
    id: 3,
    img: "image/photo_3_2026-10-13_22-30-30.jpg",
    title: "Кейс ученика: «Точка А»",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Сторис",
    desc: "Визуализация проблемной ситуации до обучения: сложности с геометрией, формулами и оценками."
  },
  {
    id: 4,
    img: "image/photo_4_2026-10-13_22-30-30.jpg",
    title: "Кейс ученика: «Точка В»",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Сторис",
    desc: "Наглядная демонстрация результатов за 4 месяца: сдача экзамена на 5 и реальный отзыв в переписке."
  },
  {
    id: 5,
    img: "image/photo_5_2026-10-13_22-30-30.jpg",
    title: "Финал кейса и призыв к действию",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Сторис",
    desc: "Закрывающий слайд серии прогрева с акцентом на результат и мягким предложением записаться на диагностику."
  },
  {
    id: 6,
    img: "image/photo_6_2026-10-13_22-30-30.jpg",
    title: "Карусель: Задания 11 и 12",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Карусель",
    desc: "Полезный экспертный пост с оригинальным маскотом для сообщества «Анастасия Алексеева. Репетитор в деле»."
  },
  {
    id: 7,
    img: "image/photo_7_2026-10-13_22-30-30.jpg",
    title: "Пост: «Занятость и безработица»",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Пост",
    desc: "Оформление тематического разбора тем ЕГЭ по обществознанию в теплой эстетичной палитре с векторной иллюстрацией."
  },
  {
    id: 8,
    img: "image/photo_8_2026-10-13_22-30-30.jpg",
    title: "Тематический пост для соцсетей",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Пост",
    desc: "Чистый дизайн публикаций с фокусом на удобочитаемость сложного учебного материала."
  },
  {
    id: 9,
    img: "image/photo_9_2026-10-13_22-30-30.jpg",
    title: "Слайд экспертной карусели",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Карусель",
    desc: "Единый визуальный стиль экспертного блога преподавателя: гармония цветов, полей и типографики."
  },
  {
    id: 10,
    img: "image/photo_10_2026-10-13_22-30-30.jpg",
    title: "Баннер: «Открыт набор на новый год»",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Промо",
    desc: "Рекламный вертикальный макет с 3D-персонажем и плашками ключевых школьных дисциплин."
  },
  {
    id: 11,
    img: "image/photo_11_2026-10-13_22-30-30.jpg",
    title: "Арт-постер «Наша Любовь»",
    category: "posters",
    categoryLabel: "Постеры & Графика",
    badge: "Арт-постер",
    desc: "Эстетичный художественный постер с выразительной акцидентной типографикой и чувственной метафорой."
  },
  {
    id: 12,
    img: "image/photo_12_2026-10-13_22-30-30.jpg",
    title: "Праздничная открытка «8 Марта»",
    category: "posters",
    categoryLabel: "Постеры & Графика",
    badge: "Полиграфия",
    desc: "Изящная поздравительная открытка с ботанической иллюстрацией лилий и винтажной каллиграфией."
  },
  {
    id: 13,
    img: "image/photo_13_2026-10-13_22-30-30.jpg",
    title: "Постер «Iced Matcha Latte»",
    category: "posters",
    categoryLabel: "Постеры & Графика",
    badge: "Y2K Арт",
    desc: "Трендовый фуд-постер в эстетике Tokyo Pop / Y2K с дерзкой акцидентной типографикой и сочными всплесками."
  },
  {
    id: 14,
    img: "image/photo_14_2026-10-13_22-30-30.jpg",
    title: "Инфографика: Итоговое сочинение",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Инфографика",
    desc: "Новостной образовательный пост с 3D-маскотом совы и структурированным анонсом тем 11 класса."
  },
  {
    id: 15,
    img: "image/photo_15_2026-10-13_22-30-30.jpg",
    title: "Страница гайда: «Природа и культура»",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "PDF Гайд",
    desc: "Верстка методического обучающего пособия с продуманной иерархией списков и пиксельными акцентами."
  },
  {
    id: 16,
    img: "image/photo_16_2026-10-13_22-30-30.jpg",
    title: "Карусель: Изменения ОГЭ (Слайд 1/4)",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Карусель",
    desc: "Обложка серии карточек с вкладками навигации по предметам ОГЭ-2027."
  },
  {
    id: 17,
    img: "image/photo_17_2026-10-13_22-30-30.jpg",
    title: "Карусель: Разбор демоверсий (Слайд 2/4)",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Карусель",
    desc: "Продолжение экспертной карусели с детализацией новых формулировок экзаменационных заданий."
  },
  {
    id: 18,
    img: "image/photo_18_2026-10-13_22-30-30.jpg",
    title: "Карусель: Анализ нововведений (Слайд 3/4)",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Карусель",
    desc: "Сравнительные блоки с подсветкой важных нюансов для абитуриентов и школьников."
  },
  {
    id: 19,
    img: "image/photo_19_2026-10-13_22-30-30.jpg",
    title: "Карусель: Итоги и чек-лист (Слайд 4/4)",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Карусель",
    desc: "Финальный слайд карусели с призывом сохранить материал и подписаться на полезный Telegram-канал."
  },
  {
    id: 20,
    img: "image/photo_20_2026-10-13_22-30-30.jpg",
    title: "Карточка: Банк тем сочинений",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Пост",
    desc: "Фирменный макет для соцсетей с акцентом на официальные материалы и требования ФИПИ."
  },
  {
    id: 21,
    img: "image/photo_21_2026-10-13_22-30-30.jpg",
    title: "Сторис: «Занятия на летних каникулах»",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Сторис",
    desc: "Эстетичные продающие сторис в нежных розово-салатовых тонах с лепестками сакуры и аргументами в пользу ранней подготовки."
  },
  {
    id: 22,
    img: "image/photo_22_2026-10-13_22-30-30.jpg",
    title: "Сторис: «Идёт набор в мини-группы»",
    category: "social",
    categoryLabel: "Соцсети & Эксперты",
    badge: "Анонс",
    desc: "Яркий и динамичный сторис-анонс расписания в сиреневой школьной стилистике со стикерами."
  },
  {
    id: 23,
    img: "image/photo_23_2026-10-13_22-30-30.jpg",
    title: "Гайд: Responsive Website Layout",
    category: "web",
    categoryLabel: "Веб & Лендинги",
    badge: "Веб-гайд",
    desc: "Контрастный и технологичный длинный лендинг в черно-желтой палитре: единицы измерения REM, VW, PX и сетка."
  },
  {
    id: 24,
    img: "image/photo_24_2026-10-13_22-30-30.jpg",
    title: "Промо-баннер: Realme Buds Air 5 Pro",
    category: "market",
    categoryLabel: "Маркетплейсы & Баннеры",
    badge: "Промо-баннер",
    desc: "Энергичный сочный баннер для наушников Realme с акцентом на Hi-Res звук, влагозащиту IPX5 и динамичные волны."
  },
  {
    id: 25,
    img: "image/photo_25_2026-10-13_22-30-30.jpg",
    title: "Лендинг для Школы Танцев",
    category: "web",
    categoryLabel: "Веб & Лендинги",
    badge: "Лендинг",
    desc: "Полноценный дизайн главной страницы танцевальной студии: направления хип-хоп, цены, абонементы, педагоги и запись."
  },
  {
    id: 26,
    img: "image/photo_26_2026-10-13_22-30-30.jpg",
    title: "Кейс @aleshikat: «Точка В — 84 балла»",
    category: "cases",
    categoryLabel: "Кейсы & Карусели",
    badge: "Кейс 5/5",
    desc: "Заключительный слайд кейса ученика: победа над геометрией, решение за 35 минут и искренний отзыв в Telegram."
  },
  {
    id: 27,
    img: "image/photo_27_2026-10-13_22-30-30.jpg",
    title: "Кейс @aleshikat: «Что делали»",
    category: "cases",
    categoryLabel: "Кейсы & Карусели",
    badge: "Кейс 4/5",
    desc: "Пошаговая методика работы: чек-листы проверки, отработка параметров и шаблоны экономических задач."
  },
  {
    id: 28,
    img: "image/photo_28_2026-10-13_22-30-30.jpg",
    title: "Кейс @aleshikat: «Страхи ученика»",
    category: "cases",
    categoryLabel: "Кейсы & Карусели",
    badge: "Кейс 3/5",
    desc: "Психологический срез проблем: паника перед стереометрией, глупые ошибки по невнимательности и нехватка времени."
  },
  {
    id: 29,
    img: "image/photo_29_2026-10-13_22-30-30.jpg",
    title: "Кейс @aleshikat: «Точка А»",
    category: "cases",
    categoryLabel: "Кейсы & Карусели",
    badge: "Кейс 2/5",
    desc: "Исходный уровень до старта программы: непонимание формул и страх перед сложными номерами экзамена."
  },
  {
    id: 30,
    img: "image/photo_30_2026-10-13_22-30-30.jpg",
    title: "Кейс @aleshikat: Титульная обложка",
    category: "cases",
    categoryLabel: "Кейсы & Карусели",
    badge: "Кейс 1/5",
    desc: "Обложка серии кейса с авторским брендингом дизайнера @aleshikat для упаковки портфолио репетитора."
  },
  {
    id: 31,
    img: "image/photo_31_2026-10-13_22-30-30.jpg",
    title: "Презентация тура: «Южная Африка»",
    category: "presentation",
    categoryLabel: "Презентации",
    badge: "Презентация",
    desc: "Атмосферный слайд туристической презентации с величественными слонами сафари, закатом и карточкой стоимости тура."
  },
  {
    id: 32,
    img: "image/photo_32_2026-10-13_22-30-30.jpg",
    title: "Презентация тура: «Дубай, ОАЭ»",
    category: "presentation",
    categoryLabel: "Презентации",
    badge: "Презентация",
    desc: "Премиальный travel-слайд с видами небоскребов Дубая, пальмами и тарифами Эконом, Комфорт и Бизнес."
  },
  {
    id: 33,
    img: "image/photo_1_2026-10-13_22-32-06.jpg",
    title: "Чайник электрический REDMOND",
    category: "market",
    categoryLabel: "Маркетплейсы & Баннеры",
    badge: "Карточка WB/Ozon",
    desc: "Инфографика карточки товара для маркетплейсов в благородной теплой бежевой гамме со скрытым нагревателем и сталью AISI 304."
  },
  {
    id: 34,
    img: "image/photo_2_2026-10-13_22-32-06.jpg",
    title: "Профессиональные микрофоны 2 шт",
    category: "market",
    categoryLabel: "Маркетплейсы & Баннеры",
    badge: "Карточка WB/Ozon",
    desc: "Контрастная и технологичная карточка в сине-фиолетовых неоновых тонах: дальность 50 м, 10 часов работы и 6 аккумуляторов в подарок."
  },
  {
    id: 35,
    img: "image/photo_3_2026-10-13_22-32-06.jpg",
    title: "Беспроводные наушники A.Pods Pro 2",
    category: "market",
    categoryLabel: "Маркетплейсы & Баннеры",
    badge: "Карточка WB/Ozon",
    desc: "Сочная продающая инфографика в неоновом футуристичном стиле с акцентами на сенсорное управление и чехол в подарок."
  }
];

// Active state for Lightbox navigation
let currentFilter = "all";
let currentModalIndex = 0;
let currentFilteredList = [...portfolioItems];

// DOM Elements
const portfolioGrid = document.getElementById("portfolioGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const lightboxModal = document.getElementById("lightboxModal");
const lightboxBackdrop = document.getElementById("lightboxBackdrop");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCategory = document.getElementById("lightboxCategory");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxDesc = document.getElementById("lightboxDesc");
const lightboxOrderBtn = document.getElementById("lightboxOrderBtn");

// Render Portfolio Cards
function renderPortfolio(items) {
  portfolioGrid.innerHTML = "";

  if (items.length === 0) {
    portfolioGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">В данной категории пока нет работ.</p>`;
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "work-card";
    card.setAttribute("data-id", item.id);
    card.innerHTML = `
      <div class="work-thumb-wrapper">
        <span class="work-badge">${item.badge}</span>
        <img src="${item.img}" alt="${item.title}" class="work-thumb" loading="lazy">
        <div class="work-overlay">
          <span class="work-overlay-btn">
            <span>Просмотр</span>
            <span>↗</span>
          </span>
        </div>
      </div>
      <div class="work-info">
        <span class="work-category">${item.categoryLabel}</span>
        <h3 class="work-title">${item.title}</h3>
        <p class="work-desc">${item.desc}</p>
      </div>
    `;

    // Click handler to open lightbox
    card.addEventListener("click", () => {
      openLightbox(index);
    });

    portfolioGrid.appendChild(card);
  });
}

// Filter Portfolio
function setupFilters() {
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      currentFilter = filter;

      if (filter === "all") {
        currentFilteredList = [...portfolioItems];
      } else {
        currentFilteredList = portfolioItems.filter(item => item.category === filter);
      }

      renderPortfolio(currentFilteredList);
    });
  });
}

// Lightbox Modal Controls
function openLightbox(index) {
  currentModalIndex = index;
  updateLightboxContent();
  lightboxModal.classList.add("active");
  lightboxModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightboxModal.classList.remove("active");
  lightboxModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateLightboxContent() {
  const item = currentFilteredList[currentModalIndex];
  if (!item) return;

  lightboxImg.src = item.img;
  lightboxImg.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxCategory.textContent = item.categoryLabel;
  lightboxDesc.textContent = item.desc;
  lightboxCounter.textContent = `${currentModalIndex + 1} / ${currentFilteredList.length}`;

  // Update Telegram order link with pre-filled message
  const tgText = encodeURIComponent(`Здравствуйте, Екатерина! Увидела в вашем портфолио работу «${item.title}» (${item.categoryLabel}). Хочу заказать похожий дизайн для своего проекта.`);
  lightboxOrderBtn.href = `https://t.me/aleshikat?text=${tgText}`;
}

function showNextItem() {
  if (currentFilteredList.length === 0) return;
  currentModalIndex = (currentModalIndex + 1) % currentFilteredList.length;
  updateLightboxContent();
}

function showPrevItem() {
  if (currentFilteredList.length === 0) return;
  currentModalIndex = (currentModalIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
  updateLightboxContent();
}

// Event Listeners for Lightbox
lightboxClose.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", showNextItem);
lightboxPrev.addEventListener("click", showPrevItem);

document.addEventListener("keydown", (e) => {
  if (!lightboxModal.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNextItem();
  if (e.key === "ArrowLeft") showPrevItem();
});

// Quick Inquiry Box Logic
function setupQuickInquiry() {
  const tags = document.querySelectorAll(".tag-choice");
  const input = document.getElementById("quickInquiryInput");
  const sendBtn = document.getElementById("sendQuickTgBtn");

  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      tags.forEach(t => t.classList.remove("selected"));
      tag.classList.add("selected");
      const topic = tag.getAttribute("data-topic");
      input.value = `Хочу заказать: ${topic}. `;
      input.focus();
    });
  });

  sendBtn.addEventListener("click", () => {
    const text = input.value.trim() || "Здравствуйте, хочу обсудить дизайн проекта!";
    const url = `https://t.me/aleshikat?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });
}

// Theme Switcher (Light Blush / Dark Noir Glam)
function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("ekaterina_theme");

  if (savedTheme === "dark") {
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
  } else {
    document.body.classList.add("theme-light");
    document.body.classList.remove("theme-dark");
  }

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("theme-dark");
    if (isDark) {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
      localStorage.setItem("ekaterina_theme", "light");
    } else {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      localStorage.setItem("ekaterina_theme", "dark");
    }
  });
}

// Mobile Hamburger Menu
function setupMobileMenu() {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    mobileDrawer.classList.toggle("open");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      burgerBtn.classList.remove("active");
      mobileDrawer.classList.remove("open");
    });
  });
}

// Dynamic Year in Footer
function setupCurrentYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Initialize Everything
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio(currentFilteredList);
  setupFilters();
  setupQuickInquiry();
  setupThemeToggle();
  setupMobileMenu();
  setupCurrentYear();
});
