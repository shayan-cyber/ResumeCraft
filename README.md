
# ResumeCraft


Create a professional resume tailored to your dream job with our user-friendly builder. Choose from customizable templates, highlight your skills, and craft a standout resume in minutes.

## Demo

https://github.com/user-attachments/assets/d38b0027-fe74-492c-a445-9e868305846b



## Screenshots

![App Screenshot](https://i.imgur.com/dTt4z6s.png)



## Features

- Templates to choose from
- Customizable
- Save your resumes for later changes
- Get AI suggestions
- Get Resume Score
- AI Assistance



## Tech Stack

**FullStack:**  NextJS, Prisma, ClerkJS, TailwindCSS, Gemini




## Installation

clone the repo

```bash
git clone https://github.com/shayan-cyber/ResumeCraft.git
```



```bash
npm i
```
make a .env file and add
```bash
API_KEY="gemini_key"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""

CLERK_SECRET_KEY=""

DATABASE_URL=""

API_URL="http://localhost:3000/"
```
DB setup
```bash
npx prisma generate
```

Run the server
```bash
npm run dev
```


#####  URL: http://localhost:3000/
