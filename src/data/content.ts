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
    "I'm a software engineer who ships ***production systems end to end*** — from a ***real-time auction engine*** serving ***thousands of concurrent users*** to ***payment integrations*** across five providers. Since May 2026 I've worked at FameLink on a ***GenAI media platform***: ***GPU image & video generation***, ***LLM chat*** and ***content safety***. On the side I build ***multi-agent developer tooling***. I work across ***TypeScript/Node.js***, ***PHP/Laravel*** and ***Python*** with ***PostgreSQL***, ***Redis*** and ***Docker*** — and I optimize for ***measurable outcomes***, like cutting response times by ***~40%*** on a high-traffic platform.",
  summarySecond:
    "In addition to my technical skills, I am passionate about art, dance, sports, music, photography, and motorcycles, all of which fuel my creativity and enhance my problem-solving abilities.",
  work: [
    {
      title: "Software Engineer",
      location: "Remote",
      badges: ["Full Time", "Contract"],
      description:
        "FameLink is a ***GenAI*** company building ***conversational AI and generative media*** products on a shared ***multi-tenant*** platform.\n\n- Took one brand's web app (***Next.js 16, React 19***) from a UI prototype on mock data to a live product in ***eight weeks*** as its main engineer, wiring up sign-up, real-time chat, AI character creation, image and video generation, and subscriptions.\n- Built ***cost and latency tracking*** for GPU image generation, checked against the provider's own numbers, and ran the ***acceptance tests*** a new image worker had to pass before production.\n- Designed the ***job queue with serverless fallback*** for the planned move to dedicated GPUs.\n- Built the ***renewal relay*** that routes subscription renewals between the brands' payment accounts.\n- Linked every ***credit charge and refund*** to the generation it paid for.\n- Built a daily ***bot-farm detection*** job; every rule ran as a dry run first and has a kill switch and alerts.\n- Initiated ***security reviews*** of login, admin and public endpoints and shipped the fixes.\n- Built the ***Grafana*** and ***PostHog*** dashboards the team uses to track GPU queues, abuse detection, payments, email delivery, revenue and subscriptions.\n- Ran the ***technical SEO*** for a platform migration: canonical host, redirects for old URLs and server-rendered landing pages.\n- Moved ***transactional email*** to a new provider with automatic fallback, spotted deliverability risks early and brought the ***bounce and complaint rates*** down.",
    },
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
        "A ***noir browser game that teaches SQL injection*** — and how to defend against it. Built as an ***educational, defensive-security*** experience.\n\n- Runs a ***real SQLite database entirely in the browser*** via ***sql.js*** (WASM) — no backend, every attack executes for real, 100% client-side.\n- Each level is a data-driven ***attack → detection → secure-fix*** loop, with golden tests validating both the vulnerable and the patched queries.\n- ***Next.js*** with a noir design system — a semantic color language and layered SQL-syntax rendering.",
    },
    {
      description:
        "My ***daily-driver fork*** of vibecosystem — an open-source ***AI software team*** for Claude Code (138 agents, 296 skills, 74 hooks) — ***extended substantially*** on top of upstream.\n\n- ***Canavar error-learning system***: agent transcripts are scanned for tool errors, unverified claims and retry storms; mistakes feed a shared ledger so one agent's failure trains the whole team.\n- ***Shared hook library with tests*** and an extended ***agent-monitoring dashboard*** (WebSocket auto-reconnect, stuck-agent detection).\n- ***Worktree handoff protocol*** preventing isolated agents from stranding uncommitted changes.",
    },
    {
      description:
        "A ***cinematic single-page 'will you go on a date with me?'*** experience — ***zero dependencies, no build***, works offline.\n\n- Hand-built ***custom calendar***, an escaping 'No' button, confetti and a downloadable 'It is a date!' ticket card.\n- ***No backend***: reaching the summary fires an instant ***push + email*** notification (ntfy + Web3Forms) straight from the browser.\n- ***PWA*** (installable, offline shell) with synthesized ***WebAudio*** sound and an accessible, `prefers-reduced-motion`-aware UI.",
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
      "Persistent memory in an Obsidian second brain: every session is summarized into a daily note and compiled into a linked knowledge base, and the next session starts with the rules, open threads and knowledge index already loaded. Adapted from a public recipe; the redaction layer that strips credentials before anything is summarized or synced is my own.",
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
    "***Uçtan uca production sistemler*** inşa eden bir yazılım geliştiricisiyim — ***binlerce eşzamanlı kullanıcıya*** hizmet veren ***gerçek zamanlı bir açık artırma motorundan***, beş farklı sağlayıcıyla ***ödeme entegrasyonlarına*** kadar. Mayıs 2026'dan beri FameLink'te bir ***GenAI medya platformu*** üzerinde çalışıyorum: ***GPU ile görsel & video üretimi***, ***LLM sohbet*** ve ***içerik güvenliği***. Bunun yanında ***çok-ajanlı geliştirici araçları*** geliştiriyorum. ***TypeScript/Node.js***, ***PHP/Laravel*** ve ***Python*** ile ***PostgreSQL***, ***Redis*** ve ***Docker*** kullanıyorum — ve ***ölçülebilir sonuçlar*** için optimize ediyorum; örneğin yüksek trafikli bir platformda yanıt sürelerini ***~%40*** düşürmek gibi.",
  summarySecond:
    "Teknik becerilerimin yanı sıra; sanata, dansa, spora, müziğe, fotoğrafçılığa ve motosikletlere tutkuyla bağlıyım. Bunların hepsi yaratıcılığımı besliyor ve problem çözme yeteneklerimi geliştiriyor.",
  work: [
    {
      title: "Yazılım Geliştirici",
      location: "Uzaktan",
      badges: ["Tam Zamanlı", "Sözleşmeli"],
      description:
        "FameLink, ortak ***çok kiracılı (multi-tenant)*** bir platform üzerinde ***konuşma tabanlı AI ve üretken medya*** ürünleri geliştiren bir ***GenAI*** şirketidir.\n\n- Markalardan birinin web uygulamasını (***Next.js 16, React 19***) ana geliştirici olarak, sahte verilerle çalışan bir arayüz prototipinden ***sekiz haftada*** canlı ürüne taşıdım; kayıt ve giriş, gerçek zamanlı sohbet, AI karakter oluşturma, görsel ve video üretimi ve abonelikleri bağladım.\n- GPU ile görsel üretim için ***maliyet ve gecikme takibi*** kurup sağlayıcının kendi verileriyle doğruladım ve yeni bir görsel worker'ının canlıya çıkmadan önce geçmesi gereken ***kabul testlerini*** yürüttüm.\n- Ayrılmış GPU'lara planlanan geçiş için ***serverless yedekli iş kuyruğunu*** tasarladım.\n- Abonelik yenilemelerini markaların ödeme hesapları arasında yönlendiren ***yenileme aktarımını*** kurdum.\n- Her ***kredi tahsilatını ve iadesini*** ait olduğu üretime bağladım.\n- Her kuralı önce dry-run ile devreye alan, kill switch'i ve alarmları olan günlük ***bot çiftliği tespitini*** kurdum.\n- Giriş, admin ve herkese açık endpoint'lerde ***güvenlik incelemelerini*** kendim başlattım ve bulunan sorunları düzelttim.\n- Ekibin GPU kuyruklarını, kötüye kullanım tespitini, ödemeleri, e-posta teslimatını, geliri ve abonelikleri takip ettiği ***Grafana*** ve ***PostHog*** panolarını kurdum.\n- Platform taşımasında ***teknik SEO***'yu yürüttüm: kanonik host, eski adreslerin yönlendirilmesi ve sunucuda render edilen landing sayfaları.\n- ***İşlem e-postalarını*** otomatik yedeği olan yeni bir sağlayıcıya taşıdım; teslim edilebilirlik risklerini önceden tespit edip ***bounce ve şikayet oranlarını*** düşürdüm.",
    },
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
        "***SQL injection'ı ve ona karşı savunmayı öğreten noir bir tarayıcı oyunu*** — ***eğitim amaçlı, savunma odaklı güvenlik*** deneyimi.\n\n- ***Gerçek bir SQLite veritabanını tamamen tarayıcıda*** ***sql.js*** (WASM) ile çalıştırır — backend yok, her saldırı gerçekten yürür, %100 client-side.\n- Her seviye, hem savunmasız hem yamalı sorguları doğrulayan golden test'lerle ***saldırı → tespit → güvenli düzeltme*** döngüsüdür.\n- Noir bir tasarım sistemiyle ***Next.js*** — semantik renk dili ve katmanlı SQL sözdizimi görüntüleme.",
    },
    {
      description:
        "Claude Code için açık kaynak ***AI yazılım ekibi*** vibecosystem'in ***günlük kullandığım fork'u*** (138 ajan, 296 skill, 74 hook) — upstream üzerine ***ciddi şekilde genişletildi***.\n\n- ***Canavar hata-öğrenme sistemi***: ajan transcript'leri tool hataları, kanıtsız iddialar ve retry fırtınaları için taranır; hatalar ortak ledger'a düşer, bir ajanın hatası tüm ekibi eğitir.\n- ***Testli ortak hook kütüphanesi*** ve genişletilmiş ***ajan izleme dashboard'u*** (WebSocket auto-reconnect, takılı-ajan tespiti).\n- Commit'lenmemiş değişikliklerin kaybolmasını önleyen ***worktree handoff protokolü***.",
    },
    {
      description:
        "***Sinematik, tek sayfalık*** bir 'benimle date'e çıkar mısın?' deneyimi — ***sıfır bağımlılık, build yok***, offline çalışır.\n\n- Elle yazılmış ***özel takvim***, kaçan 'Hayır' butonu, konfeti ve indirilebilir 'It is a date!' bilet kartı.\n- ***Backend yok***: özet ekranına ulaşınca tarayıcıdan doğrudan anında ***push + e-posta*** bildirimi (ntfy + Web3Forms) gider.\n- ***PWA*** (kurulabilir, offline shell), WebAudio ile sentezlenmiş ses ve `prefers-reduced-motion` duyarlı, erişilebilir arayüz.",
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
      "Obsidian üzerinde kalıcı hafıza: her oturum günlük bir nota özetlenir ve bağlantılı bir bilgi tabanına derlenir; yeni oturum kurallar, açık işler ve bilgi tabanı dizini yüklenmiş olarak başlar. Herkese açık bir tariften uyarladım; kimlik bilgilerini özetleme ve senkronizasyondan önce temizleyen redaksiyon katmanı benim.",
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
    "Jestem programistą dostarczającym ***systemy produkcyjne od początku do końca*** — od ***silnika aukcyjnego czasu rzeczywistego*** obsługującego ***tysiące jednoczesnych użytkowników*** po ***integracje płatności*** z pięcioma dostawcami. Od maja 2026 roku pracuję w FameLink nad ***platformą generatywnych mediów (GenAI)***: ***generowanie obrazów i wideo na GPU***, ***czat LLM*** i ***bezpieczeństwo treści***. Poza tym tworzę ***wieloagentowe narzędzia deweloperskie***. Pracuję w ***TypeScript/Node.js***, ***PHP/Laravel*** i ***Pythonie*** z ***PostgreSQL***, ***Redis*** i ***Dockerem*** — i optymalizuję pod ***mierzalne wyniki***, jak skrócenie czasów odpowiedzi o ***~40%*** na platformie o dużym ruchu.",
  summarySecond:
    "Oprócz umiejętności technicznych pasjonuję się sztuką, tańcem, sportem, muzyką, fotografią i motocyklami, co napędza moją kreatywność i wzmacnia zdolność rozwiązywania problemów.",
  work: [
    {
      title: "Programista",
      location: "Zdalnie",
      badges: ["Pełny etat", "Kontrakt"],
      description:
        "FameLink to firma ***GenAI*** tworząca produkty ***konwersacyjnego AI i generatywnych mediów*** na wspólnej platformie ***multi-tenant***.\n\n- Jako główny programista przeprowadziłem aplikację webową jednej z marek (***Next.js 16, React 19***) od prototypu interfejsu na danych testowych do działającego produktu w ***osiem tygodni***, podłączając rejestrację i logowanie, czat w czasie rzeczywistym, tworzenie postaci AI, generowanie obrazów i wideo oraz subskrypcje.\n- Zbudowałem ***śledzenie kosztów i opóźnień*** generowania obrazów na GPU, sprawdzone z danymi samego dostawcy, i przeprowadziłem ***testy akceptacyjne***, które nowy worker musiał przejść przed produkcją.\n- Zaprojektowałem ***kolejkę zadań z fallbackiem na serverless*** pod planowaną migrację na dedykowane GPU.\n- Zbudowałem ***przekaźnik odnowień***, który kieruje odnowienia subskrypcji między kontami płatniczymi marek.\n- Powiązałem każde ***obciążenie i zwrot kredytów*** z generacją, za którą zapłacono,.\n- Zbudowałem codzienne ***wykrywanie farm botów***; każda reguła najpierw działała w trybie dry-run i ma wyłącznik awaryjny oraz alerty.\n- Z własnej inicjatywy przeprowadziłem ***przeglądy bezpieczeństwa*** endpointów logowania, panelu admina i publicznego API oraz wdrożyłem poprawki.\n- Zbudowałem dashboardy w ***Grafanie*** i ***PostHogu***, na których zespół śledzi kolejki GPU, wykrywanie nadużyć, płatności, dostarczanie e-maili, przychody i subskrypcje.\n- Prowadziłem ***techniczne SEO*** podczas migracji platformy: kanoniczny host, przekierowania starych adresów i strony docelowe renderowane po stronie serwera.\n- Przeniosłem ***e-maile transakcyjne*** do nowego dostawcy z automatycznym fallbackiem, wcześnie wykryłem ryzyka dostarczalności i obniżyłem ***współczynniki odbić i skarg***.",
    },
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
        "***Noir'owa gra przeglądarkowa ucząca SQL injection*** — i obrony przed nim. Zbudowana jako ***edukacyjne doświadczenie z zakresu bezpieczeństwa defensywnego***.\n\n- Uruchamia ***prawdziwą bazę SQLite w całości w przeglądarce*** przez ***sql.js*** (WASM) — bez backendu, każdy atak wykonuje się naprawdę, w 100% po stronie klienta.\n- Każdy poziom to sterowana danymi pętla ***atak → wykrycie → bezpieczna poprawka***, z golden-testami weryfikującymi zarówno podatne, jak i załatane zapytania.\n- ***Next.js*** z noir'owym systemem projektowym — semantyczny język koloru i warstwowe renderowanie składni SQL.",
    },
    {
      description:
        "Mój ***codzienny fork*** vibecosystem — otwartoźródłowego ***zespołu programistycznego AI*** dla Claude Code (138 agentów, 296 umiejętności, 74 hooki) — ***znacząco rozszerzony*** względem upstreamu.\n\n- ***System uczenia się na błędach (canavar)***: transkrypty agentów są skanowane pod kątem błędów narzędzi, niezweryfikowanych deklaracji i pętli ponowień; błędy trafiają do wspólnego rejestru — pomyłka jednego agenta uczy cały zespół.\n- ***Współdzielona biblioteka hooków z testami*** i rozbudowany ***dashboard monitoringu agentów*** (auto-reconnect WebSocket, wykrywanie zawieszonych agentów).\n- ***Protokół handoff dla worktree***, zapobiegający utracie niezacommitowanych zmian.",
    },
    {
      description:
        "***Kinowe, jednostronicowe*** doświadczenie „czy pójdziesz ze mną na randkę?” — ***zero zależności, bez builda***, działa offline.\n\n- Ręcznie napisany ***własny kalendarz***, uciekający przycisk „Nie”, konfetti i pobieralna karta-bilet „It is a date!”.\n- ***Bez backendu***: dotarcie do podsumowania wysyła natychmiastowe ***powiadomienie push + e-mail*** (ntfy + Web3Forms) prosto z przeglądarki.\n- ***PWA*** (instalowalne, offline shell), dźwięk syntezowany przez WebAudio i dostępny interfejs zgodny z `prefers-reduced-motion`.",
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
      "Trwała pamięć w Obsidianie: każda sesja jest streszczana do dziennej notatki i kompilowana do powiązanej bazy wiedzy, a kolejna sesja startuje z załadowanymi regułami, otwartymi wątkami i indeksem bazy wiedzy. Zaadaptowałem publiczny przepis; warstwa redakcji, która usuwa dane uwierzytelniające przed streszczeniem i synchronizacją, jest moja.",
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
