/* ===== Animals Data ===== */
const animals = [
    {
        id: 1, name: "Барсік", type: "cat", age: "2 роки", gender: "хлопчик",
        character: "Лагідний, спокійний, любить сидіти на колінах і муркотіти.",
        description: "Барсік потрапив до нас після того, як його господарі переїхали. Він дуже лагідний і вже звик до людей. Ідеально підійде для квартири.",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80",
        tags: ["стерилізований", "вакцинація", "ласкавий"]
    },
    {
        id: 2, name: "Рекс", type: "dog", age: "3 роки", gender: "хлопчик",
        character: "Енергійний, відданий, любить прогулянки та ігри з м’ячем.",
        description: "Рекс — справжній друг людини. Потрапив до притулку після втрати господаря. Швидко звикає, слухняний, чудово ладнає з дітьми.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
        tags: ["стерилізований", "вакцинація", "активний"]
    },
    {
        id: 3, name: "Муся", type: "cat", age: "1 рік", gender: "дівчинка",
        character: "Граблива, цікава, обожнює іграшки-мишки.",
        description: "Молода і дуже грайлива киця. Шукає дім, де буде багато уваги та простору для пригод. Добре ладнає з іншими котами.",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
        tags: ["стерилізована", "вакцинація", "грайлива"]
    },
    {
        id: 4, name: "Бім", type: "dog", age: "5 років", gender: "хлопчик",
        character: "Спокійний, розумний, чудовий компаньйон для прогулянок.",
        description: "Бім — спокійний і мудрий пес. Ідеально підійде людям, які шукають вірного друга без зайвої гіперактивності.",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
        tags: ["стерилізований", "вакцинація", "спокійний"]
    },
    {
        id: 5, name: "Луна", type: "cat", age: "4 роки", gender: "дівчинка",
        character: "Незалежна, але дуже ласкава, коли сама цього хоче.",
        description: "Луна — справжня леді. Любить спостерігати з підвіконня та отримувати ласку на своїх умовах. Чудово підійде для спокійного дому.",
        image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=600&q=80",
        tags: ["стерилізована", "вакцинація", "незалежна"]
    },
    {
        id: 6, name: "Дружок", type: "dog", age: "2 роки", gender: "хлопчик",
        character: "Веселий, товариський, обожнює дітей і інші собаки.",
        description: "Дружок — справжній «сонечко». Завжди з усмішкою, любить ігри та обійми. Ідеальний кандидат у сімейні улюбленці.",
        image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=600&q=80",
        tags: ["стерилізований", "вакцинація", "дружелюбний"]
    },
    {
        id: 7, name: "Сніжинка", type: "cat", age: "8 місяців", gender: "дівчинка",
        character: "Маленька бешкетниця з білосніжною шубкою.",
        description: "Сніжинка ще зовсім юна. Повна енергії та цікавості. Шукає дім, де зможе рости в любові та безпеці.",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
        tags: ["стерилізована", "вакцинація", "молоденька"]
    },
    {
        id: 8, name: "Тайсон", type: "dog", age: "4 роки", gender: "хлопчик",
        character: "Сильний, відданий, потребує досвідченого господаря.",
        description: "Тайсон — великий і дуже відданий пес. Потребує активного господаря та регулярних прогулянок. У правильних руках стане найкращим захисником.",
        image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=600&q=80",
        tags: ["стерилізований", "вакцинація", "великий"]
    }
];

/* ===== Common Elements ===== */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const header = document.getElementById('header');

/* ===== Mobile Menu ===== */
if (burger && nav) {
    burger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        burger.classList.toggle('active', isOpen);
        burger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
}

/* ===== Header scroll ===== */
window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
});

/* ===== Fade-up animation ===== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ===== Stats Counter (only on index) ===== */
const statNumbers = document.querySelectorAll('.stat-card__number');
let statsAnimated = false;

function animateStats() {
    if (statsAnimated || !statNumbers.length) return;
    statsAnimated = true;
    statNumbers.forEach(el => {
        const target = +el.dataset.target;
        const duration = 1800;
        const start = performance.now();
        function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(target * ease).toLocaleString('uk-UA');
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target.toLocaleString('uk-UA') + (target > 10 ? '+' : '');
        }
        requestAnimationFrame(update);
    });
}

const statsSection = document.getElementById('stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) animateStats();
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
}

/* ===== Animals Page Logic ===== */
const animalsGrid = document.getElementById('animalsGrid');
const previewGrid = document.getElementById('previewGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');
const animalSelect = document.getElementById('animal');
const modal = document.getElementById('animalModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.getElementById('modalOverlay');
const adoptionForm = document.getElementById('adoptionForm');
const toast = document.getElementById('toast');

let currentFilter = 'all';
let currentSearch = '';

function createCard(animal, delay = 0) {
    const card = document.createElement('article');
    card.className = 'animal-card';
    card.style.transitionDelay = `${delay}s`;
    card.innerHTML = `
    <div class="animal-card__img-wrap">
      <img src="${animal.image}" alt="${animal.name}" class="animal-card__img" width="400" height="300" loading="lazy">
      <span class="animal-card__badge">${animal.type === 'dog' ? 'Собака' : 'Кіт'}</span>
    </div>
    <div class="animal-card__body">
      <h3 class="animal-card__name">${animal.name}</h3>
      <p class="animal-card__meta">${animal.age} · ${animal.gender}</p>
      <p class="animal-card__character">${animal.character}</p>
      <button class="btn btn--primary" data-id="${animal.id}">Познайомитися</button>
    </div>
  `;
    return card;
}

function renderAnimals() {
    if (!animalsGrid) return;
    const filtered = animals.filter(a => {
        const matchType = currentFilter === 'all' || a.type === currentFilter;
        const matchSearch = a.name.toLowerCase().includes(currentSearch.toLowerCase());
        return matchType && matchSearch;
    });

    animalsGrid.innerHTML = '';
    if (filtered.length === 0) {
        if (noResults) noResults.hidden = false;
        return;
    }
    if (noResults) noResults.hidden = true;

    filtered.forEach((animal, i) => {
        const card = createCard(animal, i * 0.08);
        animalsGrid.appendChild(card);
        requestAnimationFrame(() => card.classList.add('visible'));
    });

    animalsGrid.querySelectorAll('button[data-id]').forEach(btn => {
        btn.addEventListener('click', () => openModal(+btn.dataset.id));
    });
}

function renderPreview() {
    if (!previewGrid) return;
    const preview = animals.slice(0, 3);
    preview.forEach((animal, i) => {
        const card = createCard(animal, i * 0.1);
        previewGrid.appendChild(card);
        requestAnimationFrame(() => card.classList.add('visible'));
    });
    previewGrid.querySelectorAll('button[data-id]').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = `animals.html`;
        });
    });
}

function fillAnimalSelect() {
    if (!animalSelect) return;
    animals.forEach(a => {
        const opt = document.createElement('option');
        opt.value = a.id;
        opt.textContent = `${a.name} (${a.type === 'dog' ? 'собака' : 'кіт'})`;
        animalSelect.appendChild(opt);
    });
}

/* Filters */
if (filterBtns.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderAnimals();
        });
    });
}

if (searchInput) {
    searchInput.addEventListener('input', e => {
        currentSearch = e.target.value.trim();
        renderAnimals();
    });
}

/* Modal */
function openModal(id) {
    const animal = animals.find(a => a.id === id);
    if (!animal || !modal) return;

    modalBody.innerHTML = `
    <img src="${animal.image}" alt="${animal.name}" class="modal__img" width="400" height="500">
    <div class="modal__info">
      <h2 class="modal__name" id="modalTitle">${animal.name}</h2>
      <p class="modal__meta">${animal.age} · ${animal.gender} · ${animal.type === 'dog' ? 'Собака' : 'Кіт'}</p>
      <p class="modal__desc">${animal.description}</p>
      <div class="modal__tags">
        ${animal.tags.map(t => `<span class="modal__tag">${t}</span>`).join('')}
      </div>
      <a href="contacts.html" class="btn btn--primary">Залишити заявку</a>
    </div>
  `;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (modalClose) modalClose.focus();
}

function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
});

/* Form */
if (adoptionForm) {
    adoptionForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name');
        const phone = document.getElementById('phone');
        const email = document.getElementById('email');
        const animal = document.getElementById('animal');
        let valid = true;

        [name, phone, email, animal].forEach(el => {
            if (el) {
                el.classList.remove('error');
                const err = document.getElementById(el.id + 'Error');
                if (err) err.textContent = '';
            }
        });

        if (!name.value.trim()) {
            name.classList.add('error');
            document.getElementById('nameError').textContent = 'Введіть ваше ім’я';
            valid = false;
        }
        const phoneVal = phone.value.trim();
        if (!phoneVal) {
            phone.classList.add('error');
            document.getElementById('phoneError').textContent = 'Введіть номер телефону';
            valid = false;
        } else if (!/^[\d\s+\-()]{10,}$/.test(phoneVal)) {
            phone.classList.add('error');
            document.getElementById('phoneError').textContent = 'Невірний формат телефону';
            valid = false;
        }
        if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            email.classList.add('error');
            document.getElementById('emailError').textContent = 'Невірний email';
            valid = false;
        }
        if (!animal.value) {
            animal.classList.add('error');
            document.getElementById('animalError').textContent = 'Оберіть тварину';
            valid = false;
        }

        if (!valid) return;
        showToast();
        adoptionForm.reset();
    });
}

function showToast() {
    if (!toast) return;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.hidden = true, 400);
    }, 3500);
}

/* Init */
renderAnimals();
renderPreview();
fillAnimalSelect();