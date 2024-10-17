import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
    en:
    {
        translation: {
            "Home": "Home",
            "About": "About",
            "Projects": "Projects",
            "Resume":"Resume",
            "Rick and Morty App": "Rick and Morty App",
            "React Redux MUI": "React Redux MUI",
            "Redux Notes App": "Redux Notes App",
            "Bill Gate's Spend Money":"Bill Gate's Spend Money",
            "React Weather App": "React Weather App",
            "FRONT-END DEVELOPER": "FRONT-END DEVELOPER",
            "I can effectively use HTML, CSS, JavaScript, Bootstrap, React.js, React Hooks, Redux, and MUI technologies.I have knowledge of GitHub, Docker, and Kubernetes. I can integrate APIs and manage data.I am proficient in Photoshop.I have knowledge of Agile and Scrum methodologies. My aim is to provide creative and effective solutions by actively participating in every stage of software development.I am team-oriented, responsible, and open to growth.":
            "I can effectively use HTML, CSS, JavaScript, Bootstrap, React.js, React Hooks, Redux, and MUI technologies.I have knowledge of GitHub, Docker, and Kubernetes. I can integrate APIs and manage data.I am proficient in Photoshop.I have knowledge of Agile and Scrum methodologies. My aim is to provide creative and effective solutions by actively participating in every stage of software development.I am team-oriented, responsible, and open to growth.",
            "Summary": "Summary",
            "Skill":"Skill",
            "Experience":"Experience",
            "Education":"Education",
            "Istanbul Yeni Yuzyil Universty": "Istanbul Yeni Yuzyil Universty",
            "Front-End Developer - Metro Holding": "Front-End Developer - Metro Holding",
            "Project Engineer - Ser Electric Automation ": "Project Engineer - Ser Electric Automation",
            "Project and Purchasing Engineer - Kontrolmatik Technologies": "Project and Purchasing Engineer - Kontrolmatik Technologies",
            "Sales and Tendering Engineer - Büyük Electrical":"Sales and Tendering Engineer - Büyük Electrical",
            "Technical Service Engineer - Demir Döküm":"Technical Service Engineer - Demir Döküm",
            "Electronics Maintenance Engineer - Parkcam": "Electronics Maintenance Engineer - Parkcam",
            "Heavy Current Engineer - Demirer Cable": "Heavy Current Engineer - Demirer Cable",
    }
    },
    tr: {
        translation: {
            "Home": "Anasayfa",
            "About": "Hakkında",
            "Projects": "Projeler",
            "Resume": "Özgeçmiş",
            "Rick and Morty App": "Rick and Morty Uygulaması",
            "React Redux MUI": "React Redux MUI",
            "Redux Notes App":"Redux Note Uygulaması",
            "Bill Gate's Spend Money":"Bill Gate'in Harcadığı Para",
            "React Weather App": "React Hava Durumu Uygulaması",
            "FRONT-END DEVELOPER": "Önyüz Geliştirici",
            "I can effectively use HTML, CSS, JavaScript, Bootstrap, React.js, React Hooks, Redux, and MUI technologies.I have knowledge of GitHub, Docker, and Kubernetes. I can integrate APIs and manage data.I am proficient in Photoshop.I have knowledge of Agile and Scrum methodologies. My aim is to provide creative and effective solutions by actively participating in every stage of software development.I am team-oriented, responsible, and open to growth.":
            "HTML, CSS, JavaScript, Bootstrap, React.js, React Hooks, Redux ve MUI teknolojilerini etkili bir şekilde kullanabiliyorum.GitHub, Docker ve Kubernetes hakkında bilgi sahibiyim. API entegrasyonları yapabilir ve verileri yönetebilirimPhotoshop'ta yetkinim.Agile ve Scrum metodolojileri hakkında bilgi sahibiyim. Yazılım geliştirme sürecinin her aşamasında aktif rol alarak yaratıcı ve etkili çözümler sunmayı hedefliyorum.Takım odaklı, sorumlu ve gelişime açık biriyim.",
            "Summary": "Özet",
            "Skill":"Yetenek",
            "Experience":"Deneyim",
            "Education":"Eğitim",
            "Istanbul Yeni Yuzyil Universty": "İstanbul Yeni Yüzyil Üniversitesi",
            "Front-End Developer - Metro Holding": "Önyüz Geliştirici - Metro Holding",
            "Project Engineer - Ser Electric Automation": "Proje Mühendisi - Ser Elektrik Otomasyon",
            "Project and Purchasing Engineer - Kontrolmatik Technologies": "Proje ve Satin Alma Mühendisi - Kontrolmatik Teknolojileri",
            "Sales and Tendering Engineer - Büyük Electrical":"Satış ve İhale Teklifi Mühendisi - Büyük Elektrik",
            "Technical Service Engineer - Demir Döküm": "Teknik Servis Mühendisi - Demir Döküm",
            "Electronics Maintenance Engineer - Parkcam": " Elektronik Bakım Mühendisi - Parkcam",
            "Heavy Current Engineer - Demirer Cable" : "Yüksek Gerilim Mühendisi - Demirer Kablo",
        }
    }
};

i18n.use(initReactI18next).init({
    resources, lng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;