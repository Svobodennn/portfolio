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
  description: "Backend Developer",
  seoDescription:
    "Melih SARAÇ — Backend Developer in Bursa, Turkey. PHP/Laravel & Node.js: REST APIs, payment integrations, PostgreSQL/MySQL, Redis and Docker.",
  summaryFirst:
    "I am an experienced backend developer with solid expertise in ***PHP and Laravel***, along with hands-on experience in ***database management***, ***RESTful API development***, and ***payment systems integration***. I have worked on various projects utilizing technologies like ***PHP***, ***Laravel***, ***NodeJS***. Additionally, I emphasize the use of ***SOLID principles*** and best practices to deliver high-quality, scalable, and secure solutions. I am dedicated to ***teamwork***, ensuring the successful completion of every project.",
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
    { degree: "Erasmus - Computer Science" },
    { degree: "Associate's Degree of Computer Science (ACS) | CGPA 3.53/4.00" },
    { degree: "Bachelor's Degree | Russian Preparatory" },
  ],
  projects: [
    {
      description:
        "ArabamSende.com is a ***vehicle auction and valuation platform***. I worked across the full lifecycle, from architecture to production.\n\n- Architected a ***real-time auction engine*** over ***WebSockets*** (Laravel Echo) for live bidding with ***thousands of concurrent users***.\n- Ran the app on ***Laravel Octane + FrankenPHP*** (Caddy) for persistent, high-throughput request handling.\n- Integrated the ***payment system*** and tuned ***PostgreSQL*** and ***Redis*** for auction-time load.",
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
      "Custom token-optimization tooling (RTK proxy) cuts AI-operation cost by 60–90%.",
      "A self-improving loop: agent errors are captured, distilled into reusable rules, and tracked on a live dashboard — the system learns from its own mistakes.",
    ],
    tools: "Infrastructure & Tools",
    toolCategories: {
      infra: "Hosting & Infrastructure",
      observability: "Observability",
      payments: "Payments",
      dev: "Dev & Security",
      comms: "Comms & PM",
      api: "Email & APIs",
    },
    openToWork: "Open to Work",
    ctaTitle: "Let's build something",
    ctaText:
      "Open to Full-stack and Backend roles — remote, hybrid, or on-site, and open to relocation. Reach out and let's talk.",
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
  description: "Backend Geliştirici",
  seoDescription:
    "Melih SARAÇ — Bursa, Türkiye'de Backend Geliştirici. PHP/Laravel & Node.js: REST API'ler, ödeme entegrasyonları, PostgreSQL/MySQL, Redis ve Docker.",
  summaryFirst:
    "***PHP ve Laravel*** konusunda sağlam bir uzmanlığa sahip, ayrıca ***veritabanı yönetimi***, ***RESTful API geliştirme*** ve ***ödeme sistemleri entegrasyonu*** alanlarında uygulamalı deneyime sahip, deneyimli bir backend geliştiricisiyim. ***PHP***, ***Laravel***, ***NodeJS*** gibi teknolojileri kullanarak çeşitli projelerde çalıştım. Ayrıca, yüksek kaliteli, ölçeklenebilir ve güvenli çözümler sunmak için ***SOLID prensipleri*** ve en iyi uygulamaların kullanımına önem veriyorum. ***Takım çalışmasına*** kendimi adadım ve her projenin başarıyla tamamlanmasını güvence altına alıyorum.",
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
    { degree: "Erasmus - Bilgisayar Bilimi" },
    { degree: "Bilgisayar Bilimleri Ön Lisans Derecesi (ACS) | CGPA 3.53/4.00" },
    { degree: "Lisans Derecesi | Rusça Hazırlık" },
  ],
  projects: [
    {
      description:
        "ArabamSende.com bir ***araç açık artırma ve değerleme platformudur***. Mimariden üretime kadar tüm yaşam döngüsü boyunca çalıştım.\n\n- ***Binlerce eşzamanlı kullanıcıyla*** canlı teklif verme için ***WebSockets*** (Laravel Echo) üzerinde ***gerçek zamanlı bir açık artırma motoru*** tasarladım.\n- Kalıcı ve yüksek verimli istek işleme için uygulamayı ***Laravel Octane + FrankenPHP*** (Caddy) üzerinde çalıştırdım.\n- ***Ödeme sistemini*** entegre ettim ve açık artırma anındaki yük için ***PostgreSQL*** ile ***Redis***'i optimize ettim.",
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
      "Özel token-optimizasyon aracı (RTK proxy) AI-operasyon maliyetini %60–90 düşürür.",
      "Kendini geliştiren döngü: ajan hataları yakalanır, tekrar kullanılabilir kurallara dönüştürülür ve canlı bir dashboard'da izlenir — sistem kendi hatalarından öğrenir.",
    ],
    tools: "Altyapı & Araçlar",
    toolCategories: {
      infra: "Barındırma & Altyapı",
      observability: "Gözlemlenebilirlik",
      payments: "Ödeme",
      dev: "Geliştirme & Güvenlik",
      comms: "İletişim & PM",
      api: "E-posta & API",
    },
    openToWork: "İşe Açık",
    ctaTitle: "Birlikte bir şeyler inşa edelim",
    ctaText:
      "Full-stack ve Backend rollerine açığım — uzaktan, hibrit veya ofiste; ayrıca yer değişikliğine de açığım. Bana ulaşın, konuşalım.",
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
  description: "Programista Backend",
  seoDescription:
    "Melih SARAÇ — Programista Backend w Bursie, Turcja. PHP/Laravel i Node.js: REST API, integracje płatności, PostgreSQL/MySQL, Redis i Docker.",
  summaryFirst:
    "Jestem doświadczonym programistą backend z solidną wiedzą w zakresie ***PHP i Laravel***, a także praktycznym doświadczeniem w ***zarządzaniu bazami danych***, ***tworzeniu RESTful API*** oraz ***integracji systemów płatności***. Pracowałem nad różnymi projektami z wykorzystaniem technologii takich jak ***PHP***, ***Laravel***, ***NodeJS***. Ponadto kładę nacisk na stosowanie ***zasad SOLID*** oraz najlepszych praktyk, aby dostarczać wysokiej jakości, skalowalne i bezpieczne rozwiązania. Jestem oddany ***pracy zespołowej***, dbając o pomyślne zakończenie każdego projektu.",
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
    { degree: "Erasmus - Informatyka" },
    { degree: "Stopień Associate z informatyki (ACS) | CGPA 3.53/4.00" },
    { degree: "Studia licencjackie | Kurs przygotowawczy z języka rosyjskiego" },
  ],
  projects: [
    {
      description:
        "ArabamSende.com to ***platforma aukcji i wyceny pojazdów***. Pracowałem w pełnym cyklu życia projektu, od architektury po produkcję.\n\n- Zaprojektowałem ***silnik aukcyjny działający w czasie rzeczywistym*** oparty na ***WebSockets*** (Laravel Echo) do licytacji na żywo z ***tysiącami jednoczesnych użytkowników***.\n- Uruchomiłem aplikację na ***Laravel Octane + FrankenPHP*** (Caddy) w celu trwałej obsługi żądań o wysokiej przepustowości.\n- Zintegrowałem ***system płatności*** oraz zoptymalizowałem ***PostgreSQL*** i ***Redis*** pod kątem obciążenia w czasie aukcji.",
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
      "Własne narzędzie optymalizacji tokenów (proxy RTK) obniża koszt operacji AI o 60–90%.",
      "Samodoskonaląca się pętla: błędy agentów są wychwytywane, przekształcane w reguły wielokrotnego użytku i śledzone na żywym dashboardzie — system uczy się na własnych błędach.",
    ],
    tools: "Infrastruktura i narzędzia",
    toolCategories: {
      infra: "Hosting i infrastruktura",
      observability: "Obserwowalność",
      payments: "Płatności",
      dev: "Programowanie i bezpieczeństwo",
      comms: "Komunikacja i PM",
      api: "E-mail i API",
    },
    openToWork: "Otwarty na pracę",
    ctaTitle: "Zbudujmy coś razem",
    ctaText:
      "Otwarty na role Full-stack i Backend — zdalne, hybrydowe lub stacjonarne, gotowy do relokacji. Skontaktuj się i porozmawiajmy.",
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
