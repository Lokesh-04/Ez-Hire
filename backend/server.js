import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      deadline: "20-02-2025",
      status: "active",
      description:
        "We are seeking a passionate Software Engineer to join our dynamic team. The ideal candidate will have a strong background in software development, with a focus on web applications. Responsibilities include designing, coding, and debugging software applications, collaborating with cross-functional teams, and ensuring the delivery of high-quality software products. Proficiency in JavaScript, React, and Node.js is required. Experience with Agile methodologies and a commitment to continuous learning are highly valued.",
    },
    {
      id: 2,
      title: "Marketing Manager",
      deadline: "20-02-2025",
      status: "ongoing",
      description:
        "As a Marketing Manager, you will be responsible for developing and implementing marketing strategies to achieve our company's goals. This includes managing a team of marketers, overseeing the creation of marketing campaigns, and analyzing marketing performance. You will need to have a strong understanding of digital marketing, SEO, and social media marketing. Experience in managing a team and a track record of successful marketing campaigns are essential.",
    },
    {
      id: 3,
      title: "Data Analyst",
      deadline: "20-02-2025",
      status: "archive",
      description:
        "We are looking for a Data Analyst with strong analytical skills and experience in data analysis and interpretation. The ideal candidate will be responsible for analyzing data to provide actionable insights, creating reports, and presenting findings to stakeholders. Proficiency in SQL, Python, and data visualization tools is required. Experience with data mining, statistical analysis, and a passion for data-driven decision making are highly valued.",
    },
    // Add more jobs as needed
  ];

app.get('/', (req, res) =>{
    res.send("let's create the project 🔥")
})

app.post('/post-job', (req, res) =>{
    console.log(req.body);
})

app.get('/hire', (req, res) =>{
  res.json({
    jobs: jobs
  });
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})