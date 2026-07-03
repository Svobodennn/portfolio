import type { Locale } from "@/i18n/config";

export interface ResumeText {
  description: string;
  seoDescription: string;
  summaryFirst: string;
  summarySecond: string;
  work: { title: string; location: string; badges: string[]; description: string }[];
  education: { degree: string }[];
  projects: { description: string }[];
  certificates: { title: string; description: string; location: string }[];
  ui: {
    about: string;
    skills: string;
    workExperience: string;
    education: string;
    certificates: string;
    projects: string;
    toolchain: string;
    workflow: string;
    workflowIntro: string;
    workflowSteps: string[];
    workflowNotes: string[];
    tools: string;
    toolCategories: {
      infra: string;
      observability: string;
      ai: string;
      payments: string;
      dev: string;
      comms: string;
      api: string;
    };
    openToWork: string;
    ctaTitle: string;
    ctaText: string;
    emailMe: string;
    downloadCv: string;
    home: string;
    theme: string;
    blog: string;
    blogDescription: string;
    blogHeading: string;
  };
}

const en: ResumeText = {
  description: "Software Engineer — Backend & GenAI",
  seoDescription:
    "Melih SARAÇ — Software Engineer (Backend & GenAI) in Bursa, Turkey. Real-time systems, payment integrations and LLM-powered products with TypeScript/Node.js, PHP/Laravel, PostgreSQL and Redis.",
  summaryFirst:
    "I'm a software engineer who ships ***production systems end to end*** — from a ***real-time auction engine*** serving ***thousands of concurrent users*** to ***payment integrations*** across five providers. My current focus is ***applied AI***: ***LLM-based content moderation***, ***AI image & video generation workflows*** and ***multi-agent developer tooling***. I work across ***TypeScript/Node.js***, ***PHP/Laravel*** and ***Python*** with ***PostgreSQL***, ***Redis*** and ***Docker*** — and I optimize for ***measurable outcomes***, like cutting response times by ***~40%*** on a high-traffic platform.",
  summarySecond:
    "In addition to my technical skills, I am passionate about art, dance, sports, music, photography, and motorcycles, all of which fuel my creativity and enhance my problem-solving abilities.",
  work: [
    {
      title: "Backend Developer",
      location: "Remote",
      badges: ["Full Time"],
      description:
        "Turkticaret.Net is a leading ***domain and hosting provider*** in Turkey, serving high-traffic digital services — ***domain registration***, ***hosting***, and ***SSL/security certificates***.\n\n- Cut key query and page response times by ***~40%*** by removing N+1 queries and adding ***Redis caching*** on hot paths.\n- Built and secured ***payment gateway*** integrations for recurring hosting and domain billing.\n- Automated recurring operations with ***cron jobs*** and ***queue workers***, removing hours of manual work each week.\n- Integrated an ***LLM-based assistant*** to automatically review and moderate user ***feedback content***.\n- Applied ***SOLID principles*** to keep a large PHP codebase maintainable under growing load.",
    },
    {
      title: "Intern",
      location: "On-Site",
      badges: ["Workplace Training"],
      description:
        "I improved myself further with ***HTML, CSS, JavaScript and JQuery***. I also handled the backend with ***PHP, SQL***. Additionally I learned fundamentals of ***Nodejs*** and frameworks like ***Laravel*** and ***Django***. I got familiar with content management systems and ***MVC structure***.",
    },
    {
      title: "Intern",
      location: "On-Site",
      badges: ["Internship"],
      description:
        "I learned the technologies that make websites work, like ***HTML, CSS, JavaScript***. I learned and deployed a website using ***JQuery*** and ***PHP*** with a ***MySQL database***.",
    },
  ],
  education: [
    { degree: "BSc — Computer Science" },
    { degree: "Erasmus - Computer Science" },
    { degree: "Associate Degree — Computer Programming | CGPA 3.53/4.00" },
    { degree: "Bachelor's Degree | Russian Preparatory" },
  ],
  projects: [
    {
      description:
        "ArabamSende.com is a ***vehicle auction and valuation platform***. I worked across the full lifecycle, from architecture to production.\n\n- Architected a ***real-time auction engine*** over ***WebSockets*** (Laravel Echo) for live bidding with ***thousands of concurrent users***.\n- Ran the app on ***Laravel Octane + FrankenPHP*** (Caddy) for persistent, high-throughput request handling.\n- Integrated the ***payment system*** and tuned ***PostgreSQL*** and ***Redis*** for auction-time load.",
    },
    {
      description:
        "A ***web desktop environment*** inspired by PostHog-OS — draggable, resizable windows, a dock, a spotlight launcher and pluggable apps.\n\n- Implemented ***pointer-based drag & resize from scratch*** — zero third-party drag/resize libraries.\n- Modeled window state (z-order, focus, snapping) in ***zustand*** with a clean, testable core.",
    },
    {
      description:
        "Boostarea.net is a ***service platform for online games***. I worked ***full-stack*** on the site, across frontend and backend.\n\n- Built customer-facing pages with ***jQuery / Bootstrap*** and server-side features on a ***PHP / Zend*** stack.\n- Integrated the ***payment gateway*** and added ***real-time*** updates via ***WebSockets***, backed by ***MySQL***.",
    },
  ],
  certificates: [
    { title: "IELTS Academic", description: "C1 | 7.5", location: "British Council" },
    {
      title: "Backend Web Development Path with Beginner Level PHP",
      description: "Patika.Dev",
      location: "Patika.Dev",
    },
    {
      title: "Language (Russian) - MSÜ",
      description: "Certificate of Excellence in Russian Preparatory Course",
      location: "MSÜ Kara Harp Okulu",
    },
  ],
  ui: {
    about: "About",
    skills: "Skills",
    workExperience: "Work Experience",
    education: "Education",
    certificates: "Certificates",
    projects: "Projects",
    toolchain: "AI Toolchain",
    workflow: "How I Work",
    workflowIntro:
      "Every feature runs through a structured, AI-augmented multi-agent workflow:",
    workflowSteps: ["Plan", "Review", "Multi-agent build", "Automated QA", "Ship"],
    workflowNotes: [
      "A matrix of specialized agents — planning, implementation, code review, security, and verification — coordinated in an automated QA loop.",
      "Token-optimization tooling (RTK proxy) in the loop cuts AI-operation cost by 60–90%.",
      "A self-improving loop: agent errors are captured, distilled into reusable rules, and tracked on a live dashboard — the system learns from its own mistakes.",
    ],
    tools: "Infrastructure & Tools",
    toolCategories: {
      infra: "Hosting & Infrastructure",
      observability: "Observability",
      ai: "AI & LLM Providers",
      payments: "Payments",
      dev: "Dev & Security",
      comms: "Comms & PM",
      api: "Messaging & Email",
    },
    openToWork: "Open to Work",
    ctaTitle: "Let's build something",
    ctaText:
      "Open to Backend, Full-stack and AI Engineering roles — remote, hybrid, or on-site, and open to relocation. Reach out and let's talk.",
    emailMe: "Email me",
    downloadCv: "Download CV",
    home: "Home",
    theme: "Theme",
    blog: "Blog",
    blogDescription: "My thoughts on software development, life, and more.",
    blogHeading: "blog",
  },
};

const tr: ResumeText = {
  description: "Yazılım Geliştirici — Backend & GenAI",
  seoDescription:
    "Melih SARAÇ — Yazılım Geliştirici (Backend & GenAI), Bursa. Gerçek zamanlı sistemler, ödeme entegrasyonları ve LLM tabanlı ürünler; TypeScript/Node.js, PHP/Laravel, PostgreSQL ve Redis.",
  summaryFirst:
    "***Uçtan uca production sistemler*** inşa eden bir yazılım geliştiricisiyim — ***binlerce eşzamanlı kullanıcıya*** hizmet veren ***gerçek zamanlı bir açık artırma motorundan***, beş farklı sağlayıcıyla ***ödeme entegrasyonlarına*** kadar. Güncel odağım ***uygulamalı AI***: ***LLM tabanlı içerik moderasyonu***, ***AI görsel & video üretim akışları*** ve ***çok-ajanlı geliştirici araçları***. ***TypeScript/Node.js***, ***PHP/Laravel*** ve ***Python*** ile ***PostgreSQL***, ***Redis*** ve ***Docker*** kullanıyorum — ve ***ölçülebilir sonuçlar*** için optimize ediyorum; örneğin yüksek trafikli bir platformda yanıt sürelerini ***~%40*** düşürmek gibi.",
  summarySecond:
    "Teknik becerilerimin yanı sıra; sanata, dansa, spora, müziğe, fotoğrafçılığa ve motosikletlere tutkuyla bağlıyım. Bunların hepsi yaratıcılığımı besliyor ve problem çözme yeteneklerimi geliştiriyor.",
  work: [
    {
      title: "Backend Geliştirici",
      location: "Uzaktan",
      badges: ["Tam Zamanlı"],
      description:
        "Turkticaret.Net, Türkiye'nin önde gelen bir ***alan adı ve hosting sağlayıcısıdır***; yüksek trafikli dijital hizmetler sunar — ***alan adı tescili***, ***hosting*** ve ***SSL/güvenlik sertifikaları***.\n\n- N+1 sorgularını kaldırıp sık kullanılan yollara ***Redis önbellekleme*** ekleyerek kritik sorgu ve sayfa yanıt sürelerini ***~40%*** azalttım.\n- Yinelenen hosting ve alan adı faturalandırması için ***ödeme ağ geçidi*** entegrasyonlarını kurdum ve güvenli hale getirdim.\n- Yinelenen işlemleri ***cron işleri*** ve ***kuyruk işçileri*** ile otomatikleştirerek her hafta saatlerce süren manuel işi ortadan kaldırdım.\n- Kullanıcı ***geri bildirim içeriğini*** otomatik olarak incelemek ve denetlemek için ***LLM tabanlı bir asistan*** entegre ettim.\n- Artan yük altında büyük bir PHP kod tabanını sürdürülebilir tutmak için ***SOLID prensiplerini*** uyguladım.",
    },
    {
      title: "Stajyer",
      location: "Yerinde",
      badges: ["İşyeri Eğitimi"],
      description:
        "***HTML, CSS, JavaScript ve JQuery*** ile kendimi daha da geliştirdim. Ayrıca backend tarafını ***PHP, SQL*** ile yönettim. Bunlara ek olarak ***Nodejs*** temellerini ve ***Laravel*** ile ***Django*** gibi framework'leri öğrendim. İçerik yönetim sistemleri ve ***MVC yapısı*** ile tanıştım.",
    },
    {
      title: "Stajyer",
      location: "Yerinde",
      badges: ["Staj"],
      description:
        "***HTML, CSS, JavaScript*** gibi web sitelerini çalıştıran teknolojileri öğrendim. ***JQuery*** ve ***PHP*** kullanarak ***MySQL veritabanı*** ile bir web sitesi geliştirip yayına aldım.",
    },
  ],
  education: [
    { degree: "Lisans — Bilgisayar Bilimi" },
    { degree: "Erasmus - Bilgisayar Bilimi" },
    { degree: "Önlisans — Bilgisayar Programcılığı | CGPA 3.53/4.00" },
    { degree: "Lisans Derecesi | Rusça Hazırlık" },
  ],
  projects: [
    {
      description:
        "ArabamSende.com bir ***araç açık artırma ve değerleme platformudur***. Mimariden üretime kadar tüm yaşam döngüsü boyunca çalıştım.\n\n- ***Binlerce eşzamanlı kullanıcıyla*** canlı teklif verme için ***WebSockets*** (Laravel Echo) üzerinde ***gerçek zamanlı bir açık artırma motoru*** tasarladım.\n- Kalıcı ve yüksek verimli istek işleme için uygulamayı ***Laravel Octane + FrankenPHP*** (Caddy) üzerinde çalıştırdım.\n- ***Ödeme sistemini*** entegre ettim ve açık artırma anındaki yük için ***PostgreSQL*** ile ***Redis***'i optimize ettim.",
    },
    {
      description:
        "PostHog-OS'ten ilham alan bir ***web masaüstü ortamı*** — sürüklenebilir ve boyutlandırılabilir pencereler, dock, spotlight başlatıcı ve takılabilir uygulamalar.\n\n- ***Pointer tabanlı sürükle & boyutlandırmayı sıfırdan*** yazdım — üçüncü parti drag/resize kütüphanesi yok.\n- Pencere durumunu (z-order, odak, yapışma) ***zustand*** ile temiz, test edilebilir bir çekirdekte modelledim.",
    },
    {
      description:
        "Boostarea.net, ***çevrimiçi oyunlar için bir hizmet platformudur***. Sitede frontend ve backend genelinde ***full-stack*** olarak çalıştım.\n\n- Müşteriye yönelik sayfaları ***jQuery / Bootstrap*** ile, sunucu tarafı özelliklerini ise ***PHP / Zend*** yığını üzerinde geliştirdim.\n- ***Ödeme ağ geçidini*** entegre ettim ve ***MySQL*** destekli olarak ***WebSockets*** aracılığıyla ***gerçek zamanlı*** güncellemeler ekledim.",
    },
  ],
  certificates: [
    { title: "IELTS Academic", description: "C1 | 7.5", location: "British Council" },
    {
      title: "Başlangıç Seviyesi PHP ile Backend Web Geliştirme Yolu",
      description: "Patika.Dev",
      location: "Patika.Dev",
    },
    {
      title: "Dil (Rusça) - MSÜ",
      description: "Rusça Hazırlık Kursunda Üstün Başarı Sertifikası",
      location: "MSÜ Kara Harp Okulu",
    },
  ],
  ui: {
    about: "Hakkında",
    skills: "Yetenekler",
    workExperience: "İş Deneyimi",
    education: "Eğitim",
    certificates: "Sertifikalar",
    projects: "Projeler",
    toolchain: "AI Araç Seti",
    workflow: "Nasıl Çalışıyorum",
    workflowIntro:
      "Her özelliği yapılandırılmış, AI-destekli çok-ajanlı bir akıştan geçiriyorum:",
    workflowSteps: [
      "Planla",
      "İncele",
      "Çok-ajanlı geliştirme",
      "Otomatik QA",
      "Yayınla",
    ],
    workflowNotes: [
      "Uzmanlaşmış ajan matrisi — planlama, geliştirme, kod incelemesi, güvenlik ve doğrulama — otomatik bir QA döngüsünde koordine edilir.",
      "Akışa entegre token-optimizasyon aracı (RTK proxy) AI-operasyon maliyetini %60–90 düşürür.",
      "Kendini geliştiren döngü: ajan hataları yakalanır, tekrar kullanılabilir kurallara dönüştürülür ve canlı bir dashboard'da izlenir — sistem kendi hatalarından öğrenir.",
    ],
    tools: "Altyapı & Araçlar",
    toolCategories: {
      infra: "Barındırma & Altyapı",
      observability: "Gözlemlenebilirlik",
      ai: "AI & LLM Sağlayıcıları",
      payments: "Ödeme",
      dev: "Geliştirme & Güvenlik",
      comms: "İletişim & PM",
      api: "Mesajlaşma & E-posta",
    },
    openToWork: "İşe Açık",
    ctaTitle: "Birlikte bir şeyler inşa edelim",
    ctaText:
      "Backend, Full-stack ve AI Engineering rollerine açığım — uzaktan, hibrit veya ofiste; ayrıca yer değişikliğine de açığım. Bana ulaşın, konuşalım.",
    emailMe: "Bana e-posta gönder",
    downloadCv: "CV İndir",
    home: "Ana Sayfa",
    theme: "Tema",
    blog: "Blog",
    blogDescription: "Yazılım geliştirme, hayat ve daha fazlası hakkındaki düşüncelerim.",
    blogHeading: "blog",
  },
};

const pl: ResumeText = {
  description: "Programista — Backend i GenAI",
  seoDescription:
    "Melih SARAÇ — Programista (Backend i GenAI), Bursa, Turcja. Systemy czasu rzeczywistego, integracje płatności i produkty oparte na LLM; TypeScript/Node.js, PHP/Laravel, PostgreSQL i Redis.",
  summaryFirst:
    "Jestem programistą dostarczającym ***systemy produkcyjne od początku do końca*** — od ***silnika aukcyjnego czasu rzeczywistego*** obsługującego ***tysiące jednoczesnych użytkowników*** po ***integracje płatności*** z pięcioma dostawcami. Obecnie skupiam się na ***praktycznym AI***: ***moderacji treści opartej na LLM***, ***generowaniu obrazów i wideo AI*** oraz ***wieloagentowych narzędziach deweloperskich***. Pracuję w ***TypeScript/Node.js***, ***PHP/Laravel*** i ***Pythonie*** z ***PostgreSQL***, ***Redis*** i ***Dockerem*** — i optymalizuję pod ***mierzalne wyniki***, jak skrócenie czasów odpowiedzi o ***~40%*** na platformie o dużym ruchu.",
  summarySecond:
    "Oprócz umiejętności technicznych pasjonuję się sztuką, tańcem, sportem, muzyką, fotografią i motocyklami, co napędza moją kreatywność i wzmacnia zdolność rozwiązywania problemów.",
  work: [
    {
      title: "Programista Backend",
      location: "Zdalnie",
      badges: ["Pełny etat"],
      description:
        "Turkticaret.Net to wiodący ***dostawca domen i hostingu*** w Turcji, obsługujący usługi cyfrowe o dużym natężeniu ruchu — ***rejestrację domen***, ***hosting*** oraz ***certyfikaty SSL/bezpieczeństwa***.\n\n- Skróciłem czasy odpowiedzi kluczowych zapytań i stron o ***~40%***, eliminując zapytania N+1 i dodając ***buforowanie Redis*** na krytycznych ścieżkach.\n- Zbudowałem i zabezpieczyłem integracje ***bramki płatności*** dla cyklicznych rozliczeń hostingu i domen.\n- Zautomatyzowałem powtarzalne operacje za pomocą ***zadań cron*** i ***procesów kolejkowych***, eliminując godziny pracy ręcznej każdego tygodnia.\n- Zintegrowałem ***asystenta opartego na LLM***, aby automatycznie sprawdzać i moderować ***treści opinii*** użytkowników.\n- Zastosowałem ***zasady SOLID***, aby utrzymać dużą bazę kodu PHP w łatwej konserwacji przy rosnącym obciążeniu.",
    },
    {
      title: "Stażysta",
      location: "Stacjonarnie",
      badges: ["Praktyka zawodowa"],
      description:
        "Rozwijałem się dalej dzięki ***HTML, CSS, JavaScript i JQuery***. Zajmowałem się również backendem przy użyciu ***PHP, SQL***. Dodatkowo poznałem podstawy ***Nodejs*** oraz frameworków takich jak ***Laravel*** i ***Django***. Zaznajomiłem się z systemami zarządzania treścią i ***strukturą MVC***.",
    },
    {
      title: "Stażysta",
      location: "Stacjonarnie",
      badges: ["Staż"],
      description:
        "Poznałem technologie, dzięki którym działają strony internetowe, takie jak ***HTML, CSS, JavaScript***. Nauczyłem się tworzyć i wdrożyłem stronę internetową przy użyciu ***JQuery*** i ***PHP*** z ***bazą danych MySQL***.",
    },
  ],
  education: [
    { degree: "Studia I stopnia — Informatyka" },
    { degree: "Erasmus - Informatyka" },
    { degree: "Associate Degree — Programowanie komputerowe | CGPA 3.53/4.00" },
    { degree: "Studia licencjackie | Kurs przygotowawczy z języka rosyjskiego" },
  ],
  projects: [
    {
      description:
        "ArabamSende.com to ***platforma aukcji i wyceny pojazdów***. Pracowałem w pełnym cyklu życia projektu, od architektury po produkcję.\n\n- Zaprojektowałem ***silnik aukcyjny działający w czasie rzeczywistym*** oparty na ***WebSockets*** (Laravel Echo) do licytacji na żywo z ***tysiącami jednoczesnych użytkowników***.\n- Uruchomiłem aplikację na ***Laravel Octane + FrankenPHP*** (Caddy) w celu trwałej obsługi żądań o wysokiej przepustowości.\n- Zintegrowałem ***system płatności*** oraz zoptymalizowałem ***PostgreSQL*** i ***Redis*** pod kątem obciążenia w czasie aukcji.",
    },
    {
      description:
        "***Pulpit webowy*** inspirowany PostHog-OS — przeciągane i skalowalne okna, dock, wyszukiwarka spotlight i wtykowe aplikacje.\n\n- Zaimplementowałem ***przeciąganie i zmianę rozmiaru od zera*** w oparciu o zdarzenia pointer — zero zewnętrznych bibliotek drag/resize.\n- Stan okien (kolejność z, fokus, przyciąganie) zamodelowałem w ***zustand*** z czystym, testowalnym rdzeniem.",
    },
    {
      description:
        "Boostarea.net to ***platforma usługowa dla gier online***. Pracowałem nad stroną w trybie ***full-stack***, zarówno po stronie frontendu, jak i backendu.\n\n- Zbudowałem strony dla klientów przy użyciu ***jQuery / Bootstrap*** oraz funkcje po stronie serwera w oparciu o stos ***PHP / Zend***.\n- Zintegrowałem ***bramkę płatności*** i dodałem aktualizacje w ***czasie rzeczywistym*** poprzez ***WebSockets***, oparte na ***MySQL***.",
    },
  ],
  certificates: [
    { title: "IELTS Academic", description: "C1 | 7.5", location: "British Council" },
    {
      title: "Ścieżka programowania webowego backend z PHP na poziomie początkującym",
      description: "Patika.Dev",
      location: "Patika.Dev",
    },
    {
      title: "Język (rosyjski) - MSÜ",
      description: "Świadectwo z wyróżnieniem w kursie przygotowawczym z języka rosyjskiego",
      location: "MSÜ Kara Harp Okulu",
    },
  ],
  ui: {
    about: "O mnie",
    skills: "Umiejętności",
    workExperience: "Doświadczenie zawodowe",
    education: "Wykształcenie",
    certificates: "Certyfikaty",
    projects: "Projekty",
    toolchain: "Zestaw narzędzi AI",
    workflow: "Jak pracuję",
    workflowIntro:
      "Każdą funkcję prowadzę przez ustrukturyzowany, wspierany przez AI, wieloagentowy przepływ:",
    workflowSteps: [
      "Planowanie",
      "Przegląd",
      "Budowa wieloagentowa",
      "Automatyczne QA",
      "Wdrożenie",
    ],
    workflowNotes: [
      "Macierz wyspecjalizowanych agentów — planowanie, implementacja, przegląd kodu, bezpieczeństwo i weryfikacja — koordynowana w automatycznej pętli QA.",
      "Zintegrowane narzędzie optymalizacji tokenów (proxy RTK) obniża koszt operacji AI o 60–90%.",
      "Samodoskonaląca się pętla: błędy agentów są wychwytywane, przekształcane w reguły wielokrotnego użytku i śledzone na żywym dashboardzie — system uczy się na własnych błędach.",
    ],
    tools: "Infrastruktura i narzędzia",
    toolCategories: {
      infra: "Hosting i infrastruktura",
      observability: "Obserwowalność",
      ai: "AI i dostawcy LLM",
      payments: "Płatności",
      dev: "Programowanie i bezpieczeństwo",
      comms: "Komunikacja i PM",
      api: "Wiadomości i e-mail",
    },
    openToWork: "Otwarty na pracę",
    ctaTitle: "Zbudujmy coś razem",
    ctaText:
      "Otwarty na role Backend, Full-stack i AI Engineering — zdalne, hybrydowe lub stacjonarne, gotowy do relokacji. Skontaktuj się i porozmawiajmy.",
    emailMe: "Napisz do mnie",
    downloadCv: "Pobierz CV",
    home: "Strona główna",
    theme: "Motyw",
    blog: "Blog",
    blogDescription: "Moje przemyślenia na temat tworzenia oprogramowania, życia i nie tylko.",
    blogHeading: "blog",
  },
};

export const RESUME_TEXT: Record<Locale, ResumeText> = { en, tr, pl };
