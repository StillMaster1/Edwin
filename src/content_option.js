import yourImage from './assets/images/pic1.jpg';
import pic2 from './assets/images/pic2.jpg';
import pic3 from './assets/images/pic3.jpg';
import pic4 from './assets/images/pic4.jpg';
import pic5 from './assets/images/pic5.jpg';
import pic6 from './assets/images/pic6.jpg';
import pic7 from './assets/images/image.jpeg';



const logotext = "Edwin le Cointre";
const meta = {
    title: "Edwin le Cointre",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Edwin le Cointre",
    animated: {
        first: "I Love coding...",
        second: "I Love Airsoft",
        third: "I am Aspiring coder",
        fourth: "But Family Always Come First",
    },
    description: "Passionate and dedicated, I am a diligent coder who thrives on challenges and finds joy in unraveling complex problems. With a fervent love for coding, I embark on each project with a relentless work ethic, constantly seeking innovative solutions and pushing boundaries. Beyond the screen, I find exhilaration in the real-world strategy and teamwork of airsoft, where every mission demands quick thinking and precise execution. Whether immersed in lines of code or navigating the tactical intricacies of a battlefield, my commitment to excellence and problem-solving prowess remains unwavering",
    your_img_url: pic7,
};

const dataabout = {
    title: "Who Am I ? and achievements...",
    aboutme: `Served on Belgium Campus ITversity's SRC, honing communication and teamwork skills. Learned to articulate ideas, listen actively, and resolve conflicts. Emphasized empathy and collaboration for effective decision-making....Active member of Belgium Campus ITversity's SRC, leading efforts to address student concerns and plan events. Skilled in constructive dialogue with students and faculty. \n \n Attained a First Dan Black Belt in Karate following 13 years of dedicated training, leading a class of 40+ students as a sensei. Karate instilled self-discipline, patience, and goal setting, benefiting my academic and professional pursuits  `,
};
const worktimeline = [{
        jobtitle: "Employee • Customer Service",
        where: "Santas Warehouse",
        date: "November - December 2022 & 2023",
    },
    // {
    //     jobtitle: "Designer of week",
    //     where: "Jamalya",
    //     date: "2019",
    // },
    // {
    //     jobtitle: "Designer of week",
    //     where: "ALquds",
    //     date: "2019",
    // },
];

const skills = [{
        name: "C#",
        value: 90,
    },
    {
        name: "C++",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "HTML",
        value: 70,
    },
    {
        name: "CSS",
        value: 75,
    },
    {
        name: "SQL",
        value: 85,
    },
    {
        name: ".NET",
        value: 65,
    },
    {
        name: "Full Stack Development",
        value: 68,
    },
    {
        name: "Problem Solving",
        value: 70,
    },
    {
        name: "Communication",
        value: 80,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: pic2,
        description: "I do play the occasional paddle",
        link: "#",
    },
    {
        img: pic5,
        description: "I love Water Sports.",
        link: "#",
    },
    {
        img: pic3,
        description: "Airsoft is my biggest Hobby",
        link: "#",
    },
    {
        img: pic6,
        description: "Love Boating",
        link: "#",
    },

    {
        img: pic4,
        description: "Family Always First",
        link: "#",
    },

];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};