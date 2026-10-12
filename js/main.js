/**
 * Pygmatour - Interactive Script & Portfolio Engine
 * Manages timeline year filters, dynamic tour gallery, lightbox modal,
 * animations, and corporate email inquiry workflows.
 */

(function () {
    'use strict';

    // Full Portfolio Dataset from img/tahun/ (2013 - 2026) in English
    const tourPhotos = [
        // === 2026 ===
        {
            id: 1,
            year: "2026",
            client: "Acer Predator",
            destination: "India",
            title: "Acer Predator Tour India 2026",
            src: "img/tahun/2026/Acer Predator India 2026.jpg",
            tag: "Incentive Tour"
        },
        {
            id: 2,
            year: "2026",
            client: "Advanta",
            destination: "South Korea",
            title: "Advanta Incentive Tour Korea 2026",
            src: "img/tahun/2026/Advanta Korea 2026.jpg",
            tag: "Corporate Gathering"
        },
        {
            id: 3,
            year: "2026",
            client: "Anker",
            destination: "South Korea",
            title: "Anker Team Gathering Korea 2026",
            src: "img/tahun/2026/Anker Korea 2026.jpg",
            tag: "Team Building"
        },
        {
            id: 4,
            year: "2026",
            client: "Danastra",
            destination: "Khao Yai, Thailand",
            title: "Danastra Corporate Trip Khao Yai 2026",
            src: "img/tahun/2026/Danastra Khao Yai 2026.jpg",
            tag: "Incentive Tour"
        },
        {
            id: 5,
            year: "2026",
            client: "Dunia Central Aroma",
            destination: "Japan",
            title: "Dunia Central Aroma Japan Tour 2026",
            src: "img/tahun/2026/Dunia Central Aroma Japan 2026.jpg",
            tag: "Executive Tour"
        },
        {
            id: 6,
            year: "2026",
            client: "FastrataBuana",
            destination: "Danang, Vietnam",
            title: "FastrataBuana Annual Incentive Danang 2026",
            src: "img/tahun/2026/Fastratabuana Danang 2026.jpg",
            tag: "Annual Incentive"
        },

        // === 2025 ===
        {
            id: 7,
            year: "2025",
            client: "Bintang Toedjoe",
            destination: "Russia",
            title: "Bintang Toedjoe Russia Discovery 2025",
            src: "img/tahun/2025/Bintang Toedjoe Russia 2025.jpg",
            tag: "Special Expedition"
        },
        {
            id: 8,
            year: "2025",
            client: "FastrataBuana",
            destination: "Australia",
            title: "FastrataBuana Australia Experience 2025",
            src: "img/tahun/2025/FastrataBuana Australia 2025.jpg",
            tag: "Incentive Tour"
        },
        {
            id: 9,
            year: "2025",
            client: "Good Day",
            destination: "Singapore",
            title: "Good Day Coffee Singapore Trip 2025",
            src: "img/tahun/2025/Good Day Singapore 2025.jpg",
            tag: "Dealer Gathering"
        },
        {
            id: 10,
            year: "2025",
            client: "Intra Asia",
            destination: "China",
            title: "Intra Asia China Grand Tour 2025",
            src: "img/tahun/2025/Intra Asia china 2025.jpg",
            tag: "Corporate Tour"
        },

        // === 2024 ===
        {
            id: 11,
            year: "2024",
            client: "Acer",
            destination: "Portugal",
            title: "Acer Executive Tour Portugal 2024",
            src: "img/tahun/2024/Acer Portugal 2024.jpg",
            tag: "Executive Tour"
        },
        {
            id: 12,
            year: "2024",
            client: "Buana Finance",
            destination: "Australia",
            title: "Buana Finance Australia Journey 2024",
            src: "img/tahun/2024/Buana Finance Australia 2024.jpg",
            tag: "Incentive Tour"
        },
        {
            id: 13,
            year: "2024",
            client: "Buana Finance",
            destination: "Singapore",
            title: "Buana Finance Singapore Gathering 2024",
            src: "img/tahun/2024/Buana Finance Singapore 2024.jpg",
            tag: "Team Gathering"
        },
        {
            id: 14,
            year: "2024",
            client: "FastrataBuana",
            destination: "China",
            title: "FastrataBuana China Heritage 2024",
            src: "img/tahun/2024/FastrataBuana China 2024.jpg",
            tag: "Incentive Tour"
        },
        {
            id: 15,
            year: "2024",
            client: "Intra Asia",
            destination: "Hong Kong & Macau",
            title: "Intra Asia Hong Kong & Macau Trip 2024",
            src: "img/tahun/2024/Intra Asia Hong Kong - Macau 2024.jpg",
            tag: "Corporate Trip"
        },
        {
            id: 16,
            year: "2024",
            client: "Kapal Api",
            destination: "Spain & Portugal",
            title: "Kapal Api Spain & Portugal Grand Tour 2024",
            src: "img/tahun/2024/Kapal Api Spain Portugal 2024.jpg",
            tag: "European Grand Tour"
        },
        {
            id: 17,
            year: "2024",
            client: "Kopi ABC",
            destination: "Genting Dream Cruise",
            title: "Kopi ABC Genting Dream Cruise 2024",
            src: "img/tahun/2024/Kopi ABC Genting Dream Cruise 2024.jpg",
            tag: "Cruise Experience"
        },

        // === 2023 ===
        {
            id: 18,
            year: "2023",
            client: "Acer",
            destination: "China",
            title: "Acer China Incentive Journey 2023",
            src: "img/tahun/2023/Acer China 2023.jpg",
            tag: "Incentive Tour"
        },
        {
            id: 19,
            year: "2023",
            client: "Acer",
            destination: "Hong Kong",
            title: "Acer Hong Kong Leadership Trip 2023",
            src: "img/tahun/2023/Acer Hong Kong 2023.jpg",
            tag: "Leadership Summit"
        },
        {
            id: 20,
            year: "2023",
            client: "Bintang Toedjoe",
            destination: "Japan",
            title: "Bintang Toedjoe Japan Autumn 2023",
            src: "img/tahun/2023/Bintang Toedjoe Japan 2023.jpg",
            tag: "Incentive Tour"
        },
        {
            id: 21,
            year: "2023",
            client: "FIFGroup",
            destination: "South Korea",
            title: "FIFGroup South Korea Adventure 2023",
            src: "img/tahun/2023/FIF Group South Korea 2023.jpg",
            tag: "National Incentive"
        },
        {
            id: 22,
            year: "2023",
            client: "Hyundai",
            destination: "Turkey",
            title: "Hyundai Turkey MICE Experience 2023",
            src: "img/tahun/2023/Hyundai Turkey 2023.jpg",
            tag: "MICE & Incentive"
        },
        {
            id: 23,
            year: "2023",
            client: "Kalbe Nutritionals",
            destination: "Japan",
            title: "Kalbe Nutritionals Japan Tour 2023",
            src: "img/tahun/2023/Kalbe Nutritionals Japan 2023.jpg",
            tag: "Corporate Gathering"
        },
        {
            id: 24,
            year: "2023",
            client: "Kapal Api",
            destination: "Eastern Europe",
            title: "Kapal Api East Europe Highlights 2023",
            src: "img/tahun/2023/Kapal Api East Europe 2023.jpg",
            tag: "European Tour"
        },

        // === 2022 ===
        {
            id: 25,
            year: "2022",
            client: "Extra Joss",
            destination: "Labuan Bajo, Indonesia",
            title: "Extra Joss Labuan Bajo Expedition 2022",
            src: "img/tahun/2022/Extrajoss Labuan Bajo 2022.jpg",
            tag: "Premium Expedition"
        },
        {
            id: 26,
            year: "2022",
            client: "FastrataBuana",
            destination: "Japan",
            title: "FastrataBuana Japan Sakura 2022",
            src: "img/tahun/2022/FastrataBuana Japan 2022.jpg",
            tag: "Incentive Tour"
        },

        // === 2019 ===
        {
            id: 27,
            year: "2019",
            client: "Acer",
            destination: "Taiwan",
            title: "Acer Taiwan Partnership Trip 2019",
            src: "img/tahun/2019/Acer Taiwan 2019 .jpg",
            tag: "Partnership Trip"
        },
        {
            id: 28,
            year: "2019",
            client: "Kapal Api",
            destination: "Balkan Peninsula",
            title: "Kapal Api Balkan Panorama 2019",
            src: "img/tahun/2019/Kapal Api Balkan 2019.jpg",
            tag: "Balkan Tour"
        },

        // === 2018 ===
        {
            id: 29,
            year: "2018",
            client: "Anugerah Perdana",
            destination: "Western Europe",
            title: "Anugerah Perdana Europe Tour 2018",
            src: "img/tahun/2018/Anugerah Perdana Europe 2018 .jpg",
            tag: "Europe Tour"
        },
        {
            id: 30,
            year: "2018",
            client: "Duraskin",
            destination: "Spain",
            title: "Duraskin Spain Discovery 2018",
            src: "img/tahun/2018/Duraskin Spain  2018 .jpg",
            tag: "Incentive Tour"
        },

        // === 2017 ===
        {
            id: 31,
            year: "2017",
            client: "Kapal Api",
            destination: "Scotland & England",
            title: "Kapal Api Scotland & England 2017",
            src: "img/tahun/2017/KAPAL API SCOTLAND + ENGLAND.jpg",
            tag: "UK Grand Journey"
        },
        {
            id: 32,
            year: "2017",
            client: "PT Lani Santoso Setia",
            destination: "United States",
            title: "PT Lani Santoso Setia USA Tour 2017",
            src: "img/tahun/2017/PT Lani Santoso Setia USA 2017.jpg",
            tag: "USA Discovery"
        },

        // === 2016 ===
        {
            id: 33,
            year: "2016",
            client: "FIFGroup",
            destination: "Chiang Rai, Thailand",
            title: "FIFGroup Chiang Rai Experience 2016",
            src: "img/tahun/2016/FIF Group Chiang Rai.jpg",
            tag: "Thailand Tour"
        },
        {
            id: 34,
            year: "2016",
            client: "FIFGroup",
            destination: "Japan",
            title: "FIFGroup Japan Culture & Ninja Tour 2016",
            src: "img/tahun/2016/FIF Japan Ninja Costume.jpg",
            tag: "Cultural Experience"
        },
        {
            id: 35,
            year: "2016",
            client: "Gunung Slamat",
            destination: "China",
            title: "Gunung Slamat China Trip 2016",
            src: "img/tahun/2016/Gunung Slamat China Trip 2016.jpg",
            tag: "Corporate Tour"
        },
        {
            id: 36,
            year: "2016",
            client: "Pralon",
            destination: "Sapporo, Japan",
            title: "Pralon Sapporo Winter Journey 2016",
            src: "img/tahun/2016/Pralon Sapporo February 2016.jpg",
            tag: "Winter Journey"
        },
        {
            id: 37,
            year: "2016",
            client: "SHP",
            destination: "Dubai, UAE",
            title: "SHP Dubai Desert & Luxury 2016",
            src: "img/tahun/2016/SHP Dubai June 2016.JPG",
            tag: "Middle East"
        },

        // === 2015 ===
        {
            id: 38,
            year: "2015",
            client: "FIFGroup",
            destination: "South Korea",
            title: "FIFGroup Korea Winter Journey 2015",
            src: "img/tahun/2015/FIFGroup Korea Winter 2015.JPG",
            tag: "Winter Incentive"
        },
        {
            id: 39,
            year: "2015",
            client: "FIFGroup",
            destination: "Shanghai, China",
            title: "FIFGroup Shanghai Metropolis 2015",
            src: "img/tahun/2015/FIFGroup Shanghai 2015.jpg",
            tag: "Incentive Tour"
        },
        {
            id: 40,
            year: "2015",
            client: "FIFGroup",
            destination: "Vietnam",
            title: "FIFGroup Vietnam Highlights 2015",
            src: "img/tahun/2015/FIFGroup Vietnam 2015.jpg",
            tag: "Incentive Tour"
        },
        {
            id: 41,
            year: "2015",
            client: "Gandum Mas Kencana",
            destination: "Japan",
            title: "Gandum Mas Kencana Japan Tour 2015",
            src: "img/tahun/2015/GANDUM MAS KENCANA JAPAN.JPG",
            tag: "Incentive Tour"
        },
        {
            id: 42,
            year: "2015",
            client: "Corporate Gathering",
            destination: "International Tour",
            title: "Corporate Incentive Tour 2015",
            src: "img/tahun/2015/Photo 8.JPG",
            tag: "Group Tour"
        },
        {
            id: 43,
            year: "2015",
            client: "Corporate Incentive",
            destination: "East Coast USA",
            title: "Wonderful East Coast USA Tour 2015",
            src: "img/tahun/2015/Wonderful East Coast USA Oct 2015 2.jpg",
            tag: "USA Grand Tour"
        },

        // === 2014 ===
        {
            id: 44,
            year: "2014",
            client: "Acer",
            destination: "Vietnam",
            title: "Acer Vietnam Expedition 2014",
            src: "img/tahun/2014/ACER Vietnam Nov 2014.jpg",
            tag: "Partner Tour"
        },
        {
            id: 45,
            year: "2014",
            client: "Duraskin",
            destination: "Japan",
            title: "Duraskin Group Trip Japan 2014",
            src: "img/tahun/2014/DURASKIN FOTO GROUP JAPAN 09SEP.JPG",
            tag: "Incentive Tour"
        },
        {
            id: 46,
            year: "2014",
            client: "FIFGroup",
            destination: "Legoland Malaysia",
            title: "FIFGroup Legoland Family Trip 2014",
            src: "img/tahun/2014/FIFGroup Legoland Trip 2014.JPG",
            tag: "Corporate Family"
        },
        {
            id: 47,
            year: "2014",
            client: "FIFGroup",
            destination: "Singapore",
            title: "FIFGroup Singapore Year-End 2014",
            src: "img/tahun/2014/FIFGroup Singapore Dec 2014.JPG",
            tag: "Year End Tour"
        },
        {
            id: 48,
            year: "2014",
            client: "Kalbe International",
            destination: "Royal Caribbean Cruise",
            title: "Kalbe International Royal Caribbean Cruise 2014",
            src: "img/tahun/2014/Kalbe International Royal Caribbean Cruise 02 - 07 March 2014.jpg",
            tag: "Luxury Cruise"
        },
        {
            id: 49,
            year: "2014",
            client: "Corporate Incentive",
            destination: "Hong Kong & Macau",
            title: "Wonderful Hong Kong & Macau Trip 2014",
            src: "img/tahun/2014/Wonderful HongKong Macau Trip 2014.jpg",
            tag: "Incentive Tour"
        },

        // === 2013 ===
        {
            id: 50,
            year: "2013",
            client: "Corporate Gathering",
            destination: "Incentive Journey",
            title: "Incentive Travel Gathering 2013",
            src: "img/tahun/2013/20131013_090329.jpg",
            tag: "Group Tour"
        },
        {
            id: 51,
            year: "2013",
            client: "Corporate Gathering",
            destination: "Incentive Journey",
            title: "Corporate Team Building Trip 2013",
            src: "img/tahun/2013/20131028_154444.jpg",
            tag: "Team Building"
        },
        {
            id: 52,
            year: "2013",
            client: "CIMB Niaga",
            destination: "Hong Kong",
            title: "CIMB Niaga Hong Kong Incentive 2013",
            src: "img/tahun/2013/CIMB HONGKONG 22 - 26 JAN (2).jpg",
            tag: "Banking Incentive"
        },
        {
            id: 53,
            year: "2013",
            client: "Dexa Medica",
            destination: "Japan",
            title: "Dexa Medica Japan Spring Tour 2013",
            src: "img/tahun/2013/DEXA - JEPANG 07 - 10 MAY.JPG",
            tag: "Incentive Tour"
        },
        {
            id: 54,
            year: "2013",
            client: "Dexa Medica",
            destination: "Bangkok, Thailand",
            title: "Dexa Medica Bangkok Trip 2013",
            src: "img/tahun/2013/DEXA BANGKOK 21 - 24 FEB (2).jpg",
            tag: "Corporate Trip"
        },
        {
            id: 55,
            year: "2013",
            client: "Dexa Medica",
            destination: "Europe",
            title: "Dexa Medica Europe Grand Tour 2013",
            src: "img/tahun/2013/FOTO GROUP DEXA EUROPE.jpg",
            tag: "Europe Grand Tour"
        },
        {
            id: 56,
            year: "2013",
            client: "Kalbe Farma",
            destination: "Annual Gathering",
            title: "Kalbe Farma Corporate Gathering 2013",
            src: "img/tahun/2013/KALBE FARMA.jpg",
            tag: "Corporate Gathering"
        },
        {
            id: 57,
            year: "2013",
            client: "Kalbe Nutritionals",
            destination: "Australia",
            title: "Kalbe Nutritionals Staff Gathering Australia 2013",
            src: "img/tahun/2013/Kalbe Nutritional Staff Gathering Australia 2013.jpg",
            tag: "Corporate Gathering"
        },
        {
            id: 58,
            year: "2013",
            client: "Sumber Logam",
            destination: "Bangkok, Thailand",
            title: "Sumber Logam Bangkok Incentive 2013",
            src: "img/tahun/2013/SUMBER LOGAM BANGKOK JAN.jpg",
            tag: "Incentive Tour"
        }
    ];

    // State
    let activeYear = 'all';
    let searchQuery = '';
    let currentFilteredList = [...tourPhotos];
    let activeModalIndex = 0;
    const INITIAL_VISIBLE_COUNT = 18;
    let visibleCount = INITIAL_VISIBLE_COUNT;

    // DOM Elements
    const galleryGrid = document.getElementById('portfolioGrid');
    const yearFiltersContainer = document.getElementById('yearFilters');
    const searchInput = document.getElementById('portfolioSearch');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const resultCountEl = document.getElementById('portfolioResultCount');
    const loadMoreBtn = document.getElementById('loadMorePhotosBtn');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Lightbox Elements
    const lightboxModal = document.getElementById('photoLightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxMeta = document.getElementById('lightboxMeta');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
    const lightboxNextBtn = document.getElementById('lightboxNextBtn');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

    // Extract unique available years sorted descending
    const availableYears = Array.from(new Set(tourPhotos.map(p => p.year))).sort((a, b) => Number(b) - Number(a));

    /**
     * Render Year Filter Pills
     */
    function renderYearFilters() {
        if (!yearFiltersContainer) return;

        // Count for All
        const allCount = tourPhotos.length;
        let html = `
            <button type="button" class="year-pill active" data-year="all">
                <span class="pill-label">Semua Tahun</span>
                <span class="pill-badge">${allCount}</span>
            </button>
        `;

        availableYears.forEach(yr => {
            const count = tourPhotos.filter(p => p.year === yr).length;
            html += `
                <button type="button" class="year-pill" data-year="${yr}">
                    <span class="pill-label">${yr}</span>
                    <span class="pill-badge">${count}</span>
                </button>
            `;
        });

        yearFiltersContainer.innerHTML = html;

        // Attach Click Listeners
        const pills = yearFiltersContainer.querySelectorAll('.year-pill');
        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                pills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                activeYear = pill.getAttribute('data-year');
                visibleCount = INITIAL_VISIBLE_COUNT;
                filterAndRender();
            });
        });
    }

    /**
     * Filter & Render Photos
     */
    function filterAndRender() {
        const query = searchQuery.trim().toLowerCase();

        currentFilteredList = tourPhotos.filter(item => {
            const matchesYear = (activeYear === 'all') || (item.year === activeYear);
            if (!matchesYear) return false;

            if (!query) return true;

            const inClient = item.client.toLowerCase().includes(query);
            const inDest = item.destination.toLowerCase().includes(query);
            const inTitle = item.title.toLowerCase().includes(query);
            const inYear = item.year.includes(query);
            const inTag = item.tag.toLowerCase().includes(query);

            return inClient || inDest || inTitle || inYear || inTag;
        });

        // Update count text in Indonesian
        if (resultCountEl) {
            const yearText = activeYear === 'all' ? 'Semua Tahun (2013–2026)' : `Tahun ${activeYear}`;
            resultCountEl.innerHTML = `Menampilkan <strong>${Math.min(visibleCount, currentFilteredList.length)}</strong> dari <strong>${currentFilteredList.length}</strong> Dokumentasi (${yearText})`;
        }

        // Toggle clear search button visibility
        if (clearSearchBtn) {
            clearSearchBtn.style.display = searchQuery.trim().length > 0 ? 'flex' : 'none';
        }

        // Render Cards
        renderCards();

        // Manage Load More button
        if (loadMoreContainer) {
            if (currentFilteredList.length > visibleCount) {
                loadMoreContainer.style.display = 'block';
                const remaining = currentFilteredList.length - visibleCount;
                if (loadMoreBtn) {
                    loadMoreBtn.innerHTML = `<span>Tampilkan Lebih Banyak (+${remaining} Foto)</span> <i class="fa-solid fa-chevron-down ms-2"></i>`;
                }
            } else {
                loadMoreContainer.style.display = 'none';
            }
        }
    }

    /**
     * Render Gallery Cards into DOM
     */
    function renderCards() {
        if (!galleryGrid) return;

        if (currentFilteredList.length === 0) {
            galleryGrid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="empty-state-box">
                        <i class="fa-regular fa-image empty-icon"></i>
                        <h4 class="mt-3 text-ink">Tidak Ada Dokumentasi Ditemukan</h4>
                        <p class="text-muted">Coba ubah kata kunci pencarian atau pilih tahun lain di atas.</p>
                        <button type="button" class="btn btn-danger btn-sm mt-2 px-3 rounded-pill" id="resetFilterBtn">
                            Reset Semua Filter
                        </button>
                    </div>
                </div>
            `;
            const resetBtn = document.getElementById('resetFilterBtn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    activeYear = 'all';
                    searchQuery = '';
                    if (searchInput) searchInput.value = '';
                    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
                    const pills = yearFiltersContainer.querySelectorAll('.year-pill');
                    pills.forEach(p => p.classList.remove('active'));
                    const allPill = yearFiltersContainer.querySelector('[data-year="all"]');
                    if (allPill) allPill.classList.add('active');
                    visibleCount = INITIAL_VISIBLE_COUNT;
                    filterAndRender();
                });
            }
            return;
        }

        const itemsToShow = currentFilteredList.slice(0, visibleCount);
        let cardsHtml = '';

        itemsToShow.forEach((item, index) => {
            const safeSrc = encodeURI(item.src);

            cardsHtml += `
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3 gallery-item">
                    <article class="tour-card" data-index="${index}" tabindex="0" role="button" aria-label="Lihat dokumentasi: ${item.title}">
                        <div class="tour-card-media">
                            <img src="${safeSrc}" alt="${item.title}" loading="lazy" class="tour-card-img">
                            <span class="tour-year-badge"><i class="fa-regular fa-calendar me-1"></i>${item.year}</span>
                            <span class="tour-tag-badge">${item.tag}</span>
                            <div class="tour-card-overlay">
                                <div class="btn-inspect-photo" aria-hidden="true">
                                    <i class="fa-solid fa-expand"></i>
                                </div>
                            </div>
                        </div>
                        <div class="tour-card-content">
                            <div class="tour-client-row">
                                <span class="tour-client-name"><i class="fa-solid fa-building me-1"></i>${item.client}</span>
                                <span class="tour-dest-pill"><i class="fa-solid fa-location-dot me-1"></i>${item.destination}</span>
                            </div>
                            <h3 class="tour-card-title">${item.title}</h3>
                        </div>
                    </article>
                </div>
            `;
        });

        galleryGrid.innerHTML = cardsHtml;

        // Attach click & enter listeners to open lightbox
        const cards = galleryGrid.querySelectorAll('.tour-card');
        cards.forEach(card => {
            const openCard = () => {
                const idx = parseInt(card.getAttribute('data-index'), 10);
                openLightbox(idx);
            };
            card.addEventListener('click', openCard);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openCard();
                }
            });
        });
    }

    /**
     * Open Lightbox Modal
     */
    function openLightbox(index) {
        if (!currentFilteredList[index]) return;
        activeModalIndex = index;
        updateLightboxContent();

        if (lightboxModal) {
            lightboxModal.classList.add('show');
            document.body.classList.add('modal-open');
            document.body.style.overflow = 'hidden';
        }
    }

    /**
     * Update Lightbox Content
     */
    function updateLightboxContent() {
        const item = currentFilteredList[activeModalIndex];
        if (!item) return;

        if (lightboxImg) {
            lightboxImg.src = encodeURI(item.src);
            lightboxImg.alt = item.title;
        }

        if (lightboxTitle) {
            lightboxTitle.textContent = item.title;
        }

        if (lightboxMeta) {
            lightboxMeta.innerHTML = `
                <span class="meta-pill"><i class="fa-solid fa-calendar me-1"></i>Tahun ${item.year}</span>
                <span class="meta-pill"><i class="fa-solid fa-building me-1"></i>${item.client}</span>
                <span class="meta-pill"><i class="fa-solid fa-location-dot me-1"></i>${item.destination}</span>
                <span class="meta-pill tag"><i class="fa-solid fa-tag me-1"></i>${item.tag}</span>
            `;
        }

        if (lightboxCounter) {
            lightboxCounter.textContent = `${activeModalIndex + 1} / ${currentFilteredList.length}`;
        }
    }

    /**
     * Lightbox Navigation
     */
    function nextPhoto() {
        if (currentFilteredList.length <= 1) return;
        activeModalIndex = (activeModalIndex + 1) % currentFilteredList.length;
        updateLightboxContent();
    }

    function prevPhoto() {
        if (currentFilteredList.length <= 1) return;
        activeModalIndex = (activeModalIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
        updateLightboxContent();
    }

    function closeLightbox() {
        if (lightboxModal) {
            lightboxModal.classList.remove('show');
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
        }
    }

    // Attach Lightbox Listeners
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextPhoto(); });
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevPhoto(); });
    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || e.target.classList.contains('lightbox-backdrop')) {
                closeLightbox();
            }
        });
    }

    // Keyboard controls for lightbox
    window.addEventListener('keydown', (e) => {
        if (!lightboxModal || !lightboxModal.classList.contains('show')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
    });

    // Search input handler with debounce
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                searchQuery = e.target.value;
                visibleCount = INITIAL_VISIBLE_COUNT;
                filterAndRender();
            }, 250);
        });
    }

    // Clear search button handler
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchQuery = '';
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            visibleCount = INITIAL_VISIBLE_COUNT;
            filterAndRender();
        });
    }

    // Load More Button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += 12;
            filterAndRender();
        });
    }

    /**
     * Navbar Scroll Shadow & Styling
     */
    function setupNavbarScroll() {
        const navbar = document.querySelector('.site-nav');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });
    }

    /**
     * Back to Top Button
     */
    function setupBackToTop() {
        if (!backToTopBtn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Smooth Section Scroll & Active Links
     */
    function setupActiveLinks() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        const sections = document.querySelectorAll('section[id]');
        const navbarCollapse = document.getElementById('mainNavbarNav');

        // Auto close mobile navbar when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });

        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPos = window.scrollY + 160;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    /**
     * Animated Counter on Viewport Entry
     */
    function setupStatCounters() {
        const counters = document.querySelectorAll('.counter-val');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
                    const duration = 1400;
                    const stepTime = 25;
                    const steps = duration / stepTime;
                    const increment = target / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            el.textContent = target;
                            clearInterval(timer);
                        } else {
                            el.textContent = Math.ceil(current);
                        }
                    }, stepTime);

                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.3 });

        counters.forEach(c => observer.observe(c));
    }

    // Initialize everything on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        renderYearFilters();
        filterAndRender();
        setupNavbarScroll();
        setupActiveLinks();
        setupStatCounters();
        setupBackToTop();
    });

})();

