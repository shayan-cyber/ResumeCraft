export const TABS = {
    BASIC_INFO: "BASIC_INFO",
    WORK_EXPERIENCE: "WORK_EXPERIENCE",
    PROJECTS: "PROJECTS",
    EDUCATION: "EDUCATION",
    ACHIEVEMENTS: "ACHIEVEMENTS",
    SKILLS:'SKILLS',
    OTHER: "OTHER",
    LATEX:"LATEX",
}

export const sampleData = {
    basicDetails: {
        name: "John Doe",
        title: "Frontend Developer",
        linkedin_link: "https://www.linkedin.com/",
        github_link: "https://github.com/",
        other: "",
        email: "abc@gmail.com",
        phone: "+111234567890",
    },
    WorkDetails: [
        {
            title: "SWE",
            company_name: "Amazon",
            location: "Remote",
            start_date: "2001/02/05",
            end_date: "2001/02/05",
            description: "Lorem ipsum dolor sit amet,"
        },
        {
            title: "SDE",
            company_name: "Google",
            location: "Remote",
            start_date: "2001/02/05",
            end_date: "2001/02/05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
        }
    ],

    educationDetails: [
        {
            name: "NITS",
            level: "Btech",
            area_of_study: "ECE",
            start_date: "2001/02/05",
            end_date: "2001/02/05",
            result: "8 CGPA"
        },
        {
            name: "DU",
            level: "Bsc",
            area_of_study: "Law",
            start_date: "2001/02/05",
            end_date: "2001/02/05",
            result: "8 CGPA"
        }
    ],
    skillsDetails:[
        {text:"django"}, {text:"python"}, {text:"c++"}
    ],
    projectDetails: [
        {
            name:"Insta Clone",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
            tech_stack:"Mongo , NodeJS, ExpressJS, ReactJS",
            start_date: "2001/02/05",
            end_date: "2001/02/05",
            link:"test"
            
        },
        {
            name:"Insta Clone",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            tech_stack:"Mongo , NodeJS, ExpressJS, ReactJS",
            start_date: "2001/02/05",
            end_date: "2001/02/05",
            link:"test"
            
        }
    ],
    otherDetails: [

        {
            description:"Won CODE for Good in 2023",
        },
        {
            description:"Gold Medalist in Btech "
        }

    ]
}

export const TABS_SELECT_TEMPLATE = {
    YOUR_RESUMES: '1',
    TEMPLATES: '2'
}

export const COLORS = [
    "#4f46e5", "#28b95f", "#991b1b", "#000000"
]

export const FONTS = [
    "roboto", "openSans"
]

export const TEMPLATES =["Default"]