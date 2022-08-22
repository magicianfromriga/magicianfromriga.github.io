import Navbar from "../components/navbar";
import "../styles/home.css";
import ts_profile_photo from "../assets/TS_full_body_edit.jpg";

const Home = () => {
  return (
    <div className="HomePage">
      <div>
        <Navbar />
      </div>
      <div className="mainContent">
        <div className="introduction">
          <p>Welcome to my website! This is still a work in progress, so if you happen to have stumbled by it, please forgive the lack of development and design sense. For now, I am pasting a short introduction of myself from my LinkedIn account. A more personalised one will follow shortly. </p>
          <br></br>
          <p>I am currently working as a full time Software Engineer at Walmart Global Tech India. My current work mostly focuses on full stack development, with front-end work in ReactJS, backend work in Java and SQL queries for DBMS tasks. Previously, I worked as an intern in the CSISC team at Walmart Global Tech India where my work primarily included front-end development using the JavaScript and React frameworks. </p>
          <br></br>
          <p> In 2021 I was a Data Science Intern for 6 months at R FOSSEE, IIT Bombay. During the FOSSEE internship, I contributed to various data science projects. I worked extensively on the SOM project, which aimed to create a self organizing map from scratch, where my work focused on developing the base algorithm and making various optimizations to the existing algorithm. This project was later published as a tutorial for students across the world. I also worked on the Spoken Tutorial Project, a Ministry of Education initiative to provide free and high-quality educational material to any student across the country and beyond its borders. My task in this project involved creating scripts and slides for the Machine Learning module. I also worked on EDA of data from feedback forms and published a case study - "Analysis and prediction of the impact of COVID-19 on the global economy".</p>
          <br></br>
          <p>Apart from my growing body of work in information technology, I have successfully pursued an alternative career path as a chess professional. I am a FIDE and ICCF rated chess player with the Correspondence Chess Expert title. I have a large body of work as a chess journalist, with close to 100 articles for Chessbase GmbH, Chessbase India and FirstPost. I am also a respected opening theoretician with numerous survey articles for the Chessbase magazine, and I am a strong correspondence chess player with a rating of over 2340. Recently, I also became a content creator with my first course on Chessable titled the Swashbuckling Smith Morra Gambit. </p>
          <br></br>
          <p>My goals in the professional sphere are concentrated primarily around my desire to use technology to positively impact people's lives. Most of my work has centred on data science and artificial intelligence. However, my main goal is to cultivate range and a breadth of skills in my life so that I can positively impact a lot more areas in the workspace. I am open to work in any sphere of technology and management which allows me to make a difference in the society.</p>
        </div>
        <div>
          <img src={ts_profile_photo} className="profilePhoto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
