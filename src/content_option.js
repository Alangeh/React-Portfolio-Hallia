import haiImage from './assets/images/hai.png';
import cspo__certificate from './assets/cspo__certificate.pdf';

const logotext = "HAI DING";
const meta = {
    title: "Hai Ding",
    description: "I’m Hai Ding, a Certified Scrum Product Owner, Financial Analyst, Product Branding and design specialist, currently working in Krakow, Poland",
};

const introdata = {
    title: "I’m Hai Ding",
    animated: {
        first: "I am a Certified Scrum Product Owner",
        second: "a Product Branding and design specialist",
        third: "and a Financial Analyst",
    },
    description: "I am a Certified Scrum Product Owner, Financial Analyst, Product Branding and design specialist, currently working in Krakow, Poland",
    your_img_url: haiImage,
};

const certificates = [{
    title: "CSPO Certificate",
    link: cspo__certificate
    },
];

const dataabout = {
    title: "A bit about myself",
    aboutme: "A versatile professional with experience in finance and management, translation, language education, product branding, entrepreneurship, and client management. Fluent in English, Chinese, and Japanese, I’ve authored research in finance and management, worked as a legal translator volunteered in technical workshops, and excelled in customer service, managing complex client inquiries. My skills also include creating engaging content that aligns with brand values, effectively connecting with diverse audiences.",
};
const worktimeline = [{
        jobtitle: "Finance Analyst – Funding Operations",
        where: "StoneX Financial (Poland)",
        date: "Sept 2023 – Present",
    },
    {
        jobtitle: "Trading Service Analyst",
        where: "StoneX Financial (Poland)",
        date: "June 2023 – Sept 2023",
    },
    {
        jobtitle: "Product Branding Manager",
        where: "Panglossian Studios (China)",
        date: "Sept 2022 – Jan 2023",
    },
    {
        jobtitle: "Business Law Translator",
        where: "CBL - Chinese Business Law – Translation (China)",
        date: "Nov 2020 – June 2022",
    },
    {
        jobtitle: "Freelancing",
        where: "",
        date: "Sept 2018 – June 2022",
    },
];

const schooltimeline = [{
        jobtitle: "MBA | Masters of Business and Finance Management",
        where: "Jagiellonian University (Poland)",
        date: "July 2024",
    },
    {
        jobtitle: "Bsc | Bachelor of English and English Literature",
        where: "Weifang Medical University (China)",
        date: "June 2022",
    },
];

const languages = [{
            name: "Chinese",
            value: 100,
        },
        {
            name: "English",
            value: 100,
        },
        {
            name: "Japanese",
            value: 100,
        },
        {
            name: "French",
            value: 50,
        },
]

const skills = [{
        name: "Microsoft Office tools, Adobe software",
        value: 90,
    },
    {
        name: "Agile methodologies, scrum",
        value: 85,
    },
    {
        name: "Data analytics tools, Power BI, SQL Server",
        value: 85,
    },
    {
        name: "Communication and organization",
        value: 90,
    },
    {
        name: "Product branding, Design and Critical Thinking",
        value: 95,
    },
    {
        name: "Marketing, business development",
        value: 90,
    },
    {
        name: "CRM Salesforce, Omni channel",
        value: 90,
    },
    {
        name: "Problem solving",
        value: 95,
    },
    {
        name: "Jira, confluence",
        value: 70,
    },
    {
        name: "Financial Metrics and Budgeting, API analysis",
        value: 85,
    },
];

const services = [{
        title: "2nd Place prize in Shandong University Debating Championship",
        description: "2019",
    },
    {
        title: "2nd Place prize of public speech on Foreign Language Teaching and Research Press - FLTRP",
        description: "2018",
    },
    {
        title: "Award in technical creative innovation, Jilin ",
        description: "2015",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "hi.haiding@gmail.com",
    YOUR_FONE: "(+48) 517 277 354",
    description: "Reach out to me by email, let's connect :)",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    linkedin: "https://www.linkedin.com/in/hai-ding-730833267/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    schooltimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    languages,
    certificates
};