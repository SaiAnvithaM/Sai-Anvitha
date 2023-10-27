<html lan="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My Portfolio</title>
<style>
	body {
    margin: 30px;
    font-family: sans-serif;
    font-size: 30px;
    height:29.7cm;
    width:100%;
}
/* Body Header */
#body-header {
    height: 65vh;
    background-image: url(https://images.unsplash.com/photo-1493946947703-a0e68b050bee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding-top: 1.2rem;
}
/* Horizontal Lists */
.horizontal-list {
    list-style: none;
    padding-left: 0px;
    margin: 0px;
}
.horizontal-list li {
    display: inline-block;
    margin: 0px 8px 8px 0px;
    font-weight: 100;
    font-size: 0.9rem;
}
.horizontal-list li a {
    color: white;
    text-decoration: none;
}
.nav-menu li a {
    transition: color 0.5s, border-bottom 4s;
}
.nav-menu li a:hover {
    color: lightgrey;
    border-bottom: 1px solid black;
}
.text-center {
    text-align: center;
}
/* Name and Social Icons*/
#name-social-container {
    margin-top: 20vh;
}
#my-name {
    font-size: 2rem;
    letter-spacing: 0.1rem;
    color: white;
    font-weight: 700;
    margin-bottom: 0.5rem;
}
.social-icons li a i {
    /*color: red;*/
    padding: 10px;
    font-size: 1rem;
    border-radius: 50%;
}
.social-icons li a i:hover {
    box-shadow: 0px 0px 6px 4px rgba(230, 196, 196, 0.3);
}
/*About Section*/
#about {
    height: auto;
    width: 100%;
    position: relative;
}
#my-image {
    height: 15rem;
    width: 15rem;
    margin: auto;
    margin-top:-5vh;
}
#my-image img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border:3px solid white;
    border-shadow:0px 0px 60px 40px lightgrey;
}
#Stylepara{
    margin:2% 10% 2% 10%;
    color:grey;
    text-align: center;
}
#about #my-image img{
     border-shadow:0px 0px 60px 40px lightgrey;
}
/*  Skills section*/
#skills{
/*    background-color: #e7dcdc;*/
text-align: center;
}
section{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}
section:nth-child(2n){
    background-color:#e0e0e0;
}
section:nth-child(2n+1){
    background-color:white;
}
.section-heading{
    width:auto;
    padding:20px 10px 10px;
    margin:10px auto;
    font-weight:400px;
    align-text:center;
}
.section-heading span{
    font-size:40px;
    color:#1d4498;
    display:inline-block;
    padding-top:10px;
    margin-right:0.5rem;
}
.mb-75px{
    margin-bottom:75px;
}
#section-heading{
    width:auto;
    padding:20px 10px 20px;
    margin:10px auto;
    font-weight:400px;
}
/*All the small elements in a container*/
.skill-display{
    height:auto;
    wdith:100%;
    padding:10px;
    margin-bottom:30px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
/*    background-color: #e7dcdc;*/
}
/*for java C++ py*/
.skill-progress{
    height:1.8rem;
    width:7rem;
    margin:20px;
/*    padding-left:5%;*/
    border-radius:0.8rem;
    background-color: lightgrey;
}
.skill-progress > div{
    border-radius: 20px 0px 0px 20px;
}
.percent_1{
    width:75%;
    height:inherit;
}
.percent_1_color{
    background-color:#466de4 ;
}
.percent_1 span{
    font-size:1rem;
    margin-left:10px;
    vertical-align:middle;
    margin-top:-5px;
    color:white;
}
/*for python*/
.skill-progress2{
    height:1.8rem;
    width:7rem;
    margin:20px;
    background-color: lightgrey;
    border-radius: 20px;
}
.percent_2{
    width:50%;
    height:inherit;
}
.percent_2_color{
    background-color:#b53131 ;
}
.skill-progress2>div{
    border-radius: 20px 0px 0px 20px;
}
.percent_2 span{
    color:white;
    font-size:1rem;
    margin-left:10px;
    vertical-align:middle;
    margin-top:-5px;
}
/*for HTML*/
.skill-progress3
{
height:1.8rem;
width:7rem;
background-color: lightgrey;
margin:20px;
border-radius:20px;
}
.percent_3{
    width:90%;
    height:inherit;
}
.percent_3_color{
    background-color: #824a8b;
}
.skill-progress3 > div{
  border-radius: 20px 0px 0px 20px;
}
.percent_3 span{
    font-size:1rem;
    margin-left:10px;
    color:white;
    vertical-align:middle;
    margin-top:-5px;
}
/*for css*/
.skill-progress4{
    height:1.8rem;
    width:7rem;
    border-radius:20px;
    background-color: lightgrey;
    margin:20px;
}
.percent_4{
    width:80%;
    height:inherit;
}
.percent_4_color{
    background-color:#06580d ;
}
.skill-progress4>div{
    border-radius:20px 0px 0px 20px;
}
.percent_4 span{
    font-size:1rem;
    color:white;
    margin-left:10px;
    vertical-align:middle;
    margin-top:-5px;
}
/*javascript*/
.skill-progress5{
    height:1.8rem;
    width:7rem;
    border-radius:20px;
    background-color: lightgrey;
    margin:20px;
}
.percent_5{
    width:50%;
    height:inherit;
}
.percent_5_color{
    background-color:#b53131 ;
}
.skill-progress5>div{
    border-radius:20px 0px 0px 20px;
}
.percent_5 span{
    font-size:1rem;
    color:white;
    margin-left:10px;
    vertical-align:middle;
    margin-top:-5px;
}
/*nodeJs*/
.skill-progress6{
    height:1.8rem;
    width:7rem;
    border-radius:20px;
    background-color: lightgrey;
    margin:20px;
}
.percent_6{
    width:45%;
    height:inherit;
}
.percent_6_color{
    background-color:#466de4 ;
}
.skill-progress6>div{
    border-radius:20px 0px 0px 20px;
}
.percent_6 span{
    font-size:1rem;
    color:white;
    margin-left:10px;
    vertical-align:middle;
    margin-top:-5px;
}
/*  Work Experience*/
#projects >h1{
    margin-top:50px;
    color:#1d4498;
}
#projects i{
    margin-right:10px;
    font-size:40px;
    color:#1d4498;
}
.timeline{
   position:relative;
    width:100%;
    border:2px solid black;
}
.timeline-box{
    position:relative;
    width:40%;
    min-height:150px;
    border:2px solid black;
    margin:5px;
}
.timeline-divider{
    border:2px dashed lightblue;
   height:75%;
    width:0;
    position:absolute;
    top:10%;
    left:50%;
}
.timeline-plane{
    top:80%;
    position:sticky;
    z-index:2;
    transform:rotate(90deg);
}
.timeline-box h5{
    position:relative;
    font-size:0.8rem;
    margin-top:0%;
    width:50%;
    text-align:center
}
.timeline-box p{
    text-align: center;
    font-size: 0.8rem;
   }
/*  Education*/
#education h1{
    font-size:45px;
    color:#1d4498;
}
.Eduline{
    position:relative;
    height:75%;
    width:100%;
    border:2px solid black;
}
.Eduline-box{
    padding:10px;
    margin:0.4%;
    position:relative;
    width:40%;
    height:150px;
/*    left:5%;*/
    border:2px solid black;
}
.Eduline-box p{
    font-size:0.9rem;
    text-align: center;
}
w{
    color: blue;
}
.Eduline-divider{
    border:2px dashed lightblue;
   height:75%;
    width:0;
    position:absolute;
    top:10%;
    left:50%;
}
.Eduline-car{
    font-size: 39px;
    top:80%;
    position:sticky;
    z-index:2;
    margin-left:-10%;
    transform:rotate(90deg);
    color:#1d4498;
}
/*contact*/
#contact{
    text-align:center;
     background-image:linear-gradient(50deg,#2857a4 ,#403066 74%);
}
#contact>div{
    text-align:center;
    color:white;
}
#contact span i{
     margin-top:40px;
    font-size:25px;
}
#heading-section{
    padding:20px;
}
#contact-heading{ 
    margin-left:6px;
    font-style: bold;
    font-size:30px;
}
#details-section input,textarea{
     max-width: 90%;
    padding: 4px 10px;
    border:0px solid transparent;
    border-bottom:2px solid white;
    width:90%;
    background-color:transparent;
     line-height: 1.6;
    font-size: 1.05rem;
    color: #d9dcdd;
}
#details-section button{
    margin-top:20px;
    text-align:center;
    padding:10px;
    border:2px white solid;
    color:white;
    background-color:transparent;
}
#details-section h1{
    color:white
}
#details-section p{
    margin-left:-125px;
    align-items:start;
    color:grey;
}
#details-section {
    margin:0px;
    vertical-align:bottom;
    display:inline-block;
    padding:75px;
    width:75%;
}
#address-title{
    font-size:1.8rem;
    margin-bottom:-10px;
    text-align:left;
    color:white;
}
#aside-section{
    font-size:1.5rem;
    text-align:left;
     display:inline-block;
    width:50%;
    vertical-align:top;
}
#aside-section p{
    margin-left:-5px;
    margin-right:15px;
    }
#contact-container{
    display:flex;
}
#div1 , #div2, #div3{
    margin-bottom:-15px;
}
#div3 span{
    font-size: 20px;
}
#contact{
    padding:20px;
}
#contact-container i{
    color:white;
}
#details-section button:hover{
  background-color: lightgrey;
  color:blue;
}
/*Achievements*/
#Achievements h1{
     font-size:32px;
    color:#1d4498;
}
#Achievements i{
    font-size: 38px;
}
.achieveline-box{
padding:10px;
    margin:0.4%;
    margin-left:-16px;
    position:relative;
    width:40%;
    height:150px;
    left:5%;
    border:2px solid black;
}
.achieveline-box p{
    font-size:0.9rem;
    text-align: center;
}
.achieveline{
    position:relative;
    height:75%;
    width:100%;
    border:2px solid black;
    margin:0px 0px 30px 0px;
}
.achieveline-box:nth-child(2n){
    left:57%;
}
 .achieveline-divider{
    border:2px dashed lightblue;
   height:40%;
    width:0;
    position:absolute;
    top:3%;
    left:50%;
} 
 .achieveline-star{
    color:#1d4498;
    font-size:10px;
    top:80%;
    position:sticky;
    z-index:2;
    margin-left:-10%;
    transform:rotate(90deg);
} 
  section{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}
section:nth-child(2n){
    background-color:#e0e0e0;
}
section:nth-child(2n+1){
    background-color:white;
}
/*responsive*/
@media screen and (max-width:500px){
  section{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}
section:nth-child(2n){
    background-color:#e0e0e0;
}
section:nth-child(2n+1){
    background-color:white;
}
    .timeline-box{
        text-align: center;
        height:200px;
        width:80%;
    }
    .timeline-box:nth-child(2n){
    left:0%;
}
.timeline-box{
    width:95%;
   margin:auto;
    margin-bottom: 5px;
    padding:10px 5px 10px 5px;
}
.timeline-box p{
    font-size: 15px;
}
.timeline-box h5{
    font-size: 20px;
}
.timeline>div{
    margin-top: 2px;
}
.timeline-plane{
    visibility: hidden;
}
.timeline-divider{
     visibility: hidden;
}
.timeline-box:nth-child(2n+1)::after{
    visibility: hidden;
}
.timeline-box:nth-child(2n)::after{
    visibility: hidden;
}
.Eduline-box:nth-child(2n+1)::after{
    visibility: hidden;
}
.Eduline-box:nth-child(2n)::after{
    visibility: hidden;
}
.Eduline-box{
    width:80%;
    margin:auto;
    margin-bottom: 10px;
    margin-top: 5px;
}
	.Eduline-box{
        text-align: center;
        height:200px;
        width:80%;
    }
    .Eduline-box:nth-child(2n){
    left:0%;
}
.Eduline-box{
    width:95%;
   margin:auto;
    margin-bottom: 5px;
    padding:10px 5px 10px 5px;
}
.Eduline-divider{
    visibility: hidden;
}
.Eduline-car{
    visibility: hidden;
}
#my-name{
    font-size: 25px;
}
#details-section{
    width:100%;
}
.aside-section{
    vertical-align: down;
    font-size:1.5rem;
    text-align:left;
     display:inline-block;
    width:100%;
}
#details-section {
    vertical-align:top;
    display:inline-block;
    padding:75px;
    width:75%;
}
.achieveline-box:nth-child(2n+1)::after{
   visibility: hidden;
}
.achieveline-box:nth-child(2n)::after{
    visibility: hidden;
}
	.achieveline-box{
        text-align: center;
        height:200px;
        width:80%;
    }
    .achieveline-box:nth-child(2n){
    left:0%;
}
.achieveline-box:nth-child(2n+1){
    left:0%;
}
.achieveline-box{
    width:95%;
   margin:auto;
    margin-bottom: 5px;
    padding:10px 5px 10px 5px;
}
.achieveline-divider{
    visibility: hidden;
}
.achieveline-star{
   visibility: hidden;
}
#contact-container{
    display:block;
}
#details-section label{
    font-size: 15px;
    margin:0%;
}
#aside-section{
    font-size: 20px;
    width:50%;
    text-align: center;
}
#aside-section h1{
    text-decoration: underline;
    font-size: 20px;
}
#address-title {
    text-align: center;
}
#address-title-div h1{
    font-size: 22px;
    text-decoration: underline;
}
#social-icons ul{
  margin:20px 0px 10px 0px;
}
}
</style>
    <!-- adding css file -->
	<link rel="stylesheet" type="text/css" href="style.css">
	<!-- for html icon -->
	<script src="https://kit.fontawesome.com/1dc91dcf26.js" crossorigin="anonymous"></script>
</head>
<body>
<header id="body-header">
        <nav id="nav">
            <ul class="horizontal-list text-center nav-menu">
                <li>
                    <a href="#"> Home </a>
                </li>
                <li>
                    <a href="#about"> About </a>
                </li>
                <li>
                    <a href="#skills"> Skills </a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#Certifications">Achievements</a>
                </li>
                <li>
                    <a href="#contact">Contact </a>
                </li>
            </ul>
        </nav>
        <div id="name-social-container">
            <div class="text-center">
                <h1 id="my-name">
                    Sai Anvitha Mamidala
                </h1>
            </div>
            <div>
                <ul class="horizontal-list text-center social-icons">
                    <li>
                        <a href="https://www.linkedin.com/in/sai-anvitha-mamidala-5b7668218/">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-stack-overflow"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-google-plus-g"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-quora"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <main>
        <section id="about">
            <div id="my-image">
                <img src="https://lh3.googleusercontent.com/9yn1fVa5eGXJy_Knp_1TGQxgYPAWTpty2UJQmh6JKZw_TeNuszshsZy9djq-K8tlwIsvpQajljh119dJDfuT1EhtCyaGafXPNmzjbWUXBtRF01aDoZGrrDxTafOF8fioQhyrOXBeTDLpmqeGlMSfAu-Pj_-7lBSKUO6iMrfQGhkp7loCNpKyyCU1zmi5YPUMZOhoth-2z23lsBs2LeaYdbfU_m6iYv1Kx-E2s5Wow9vDcBYL2tHB0Y4HvlvMDGTBXVNIkPRwiXJpfLjqzoZAP4mDDwon0jDvJZRQskGecaaJ9b9Th-4pu7-qtnCrBxDq0kUwJMQNbIMMDrskjZ-y65S0x5GVow2DCS1VuH-_nQe5FSM1hJ-5fEGSI3kSSUJP96y0f4QaENN4LwzuQriAKSiot3ZChU1xz22GZ0JC0rb-5aLF6bsnBG1634ksddjKQ8CK9BNHdhrf7KZ-CESKmy_PW3Qh5gAfw08uHNEss_day9rYem51ch9CayAwj400KTZAe01qOuYZJGU-Rt9UGYmqZgLwXfQt9W21IRlTwgBvnWlduiZqCy3f__5q7HSGRI1yhtJt5VR6OBO8dRtW525ISRWtXMKXiKCX3Q_Z2KD4PAUBpcTFHEbnwtYCR55HAMyvM63TPSnVpNBC4K7w4J7CfIPwv3KKLYhQ5K2T9VGJuP6xfQe91Ghekez3rueH5iPQTHKzP7v7CI6MDgylf4Orn9t5orGOisL9sD9mxNlRtCULYb8OTrx7RYr1mkrt4a-_DKWsRYNUfL96OpgzfEptIJ4Atlwkhdu5RjiPvHpyPBRQdheZTynMiIf-978ABsTsYHhQu_AwOPph-nUKEyJxTUpczWw3edWiTL_InVe3xWm8hVExtXhPZDkwb3PlCqKZarx6IlJm1UXP7t3Vc48u-VjT9UCIYLQ0_Hgo37sbfIwq=w798-h902-s-no?authuser=0">
            </div>
            <div id="Stylepara">
            <p>Hard-working pre-final year electronics and communication engineering student with overall <w>8.30</w> CGPA till 5th semster. Used my time to develop aesthetic, responsive, and accessible websites. Worked through hours of bootstrap structure, learning JavaScript, Node.Js, React.Js. Eager to tackle web development/design challenges to achieve lasting impacts on user experience.  </p>
             </div>
        </section>
        <section id="skills">
             <h1 class="section-heading mb-75px">
            <span><i class="fa-solid fa-chalkboard-user"></i>
            </span>
                <span>SKILLS</span></h1>
    <div class="skill-display">
        <div class="skill-progress">
            <div class="percent_1 percent_1_color">
            <div class="skill-name">
                <span>Java</span>
            </div>
        </div>
	</div>
        <div class="skill-progress2">
            <div class="percent_2 percent_2_color">
            <div class="skill-name2">
                <span>C</span>
            </div>
        </div>
	</div>
    <div class="skill-progress3">
        <div class=
        "percent_3 percent_3_color">
        <div class="skill-name3">
            <span>HTML</span>
        </div>
        </div> 
    </div>
    <div class="skill-progress4">
        <div class="percent_4 percent_4_color">
            <div class="skill-name4">
                <span>CSS</span>
            </div>
        </div>
    </div>
    <div class="skill-progress5">
        <div class="percent_5 percent_5_color">
            <div class="skill-name5">
                <span>Javascript</span>
            </div>
        </div>
    </div>
    <div class="skill-progress6">
        <div class="percent_6 percent_6_color">
            <div class="skill-name6">
                <span>NodeJs</span>
            </div>
        </div>
    </div>
   </div>
        </section>
        <section id="projects"> 
            <h1 class="projects-heading mb75px">
            <span><i class="fa-sharp fa-solid fa-lightbulb-gear"></i></span>
           <span> Projects</span>
    </h1>
            <div class="timeline">
                <div class="timeline-box">
                     <h5>Smart Attendence System</h5>
                     <p>Developed a attendance system using face recognition algorithm where user can update his/her attendance by detecting the faces and saving the date and time in the database</p>
            </div>
                <div class="timeline-box">
                     <h5>Single Playlist Screen</h5>
                    <p>Developed a playlist user interface using front-end technologies-HTML and CSS</p>
                    </div>
                <div class="timeline-box">
                     <h5>Corona cases details</h5>
                    <p>Designed a project which tells about number of covid cases, number of cases in which patient has recoverd and total death cases, using python</p>
                </div>
                <div class="timeline-divider">
                    <div class="timeline-plane">
                    <i class="fa-solid fa-plane"></i>
                </div>
                </div>
            </div>
        </section>
        <section id="education">
             <h1>
                 <span><i class="fa-solid fa-graduation-cap"></i></span>
                 <span>Education</span>
            </h1>
            <div class="Eduline">
                <div class="Eduline-box">
                	<p>
                Pursuing Bachelor of Technology in JNTU College of Engineering, Jagtial, Telangana under department of Electronics and Communications with overall CGPA of <w>8.30</w> till 5th semester.
            </p>
            </div>
            <div class="Eduline-box">
                <p>Completed my intermediate in SR junior College, Karimnagar, Telangana with <w>9.81</w> CGPA</p>
            </div>
            <div class="Eduline-box">
            	<p>
                Completed my schooling in Gayatri Vidhyalayam, Karimnagar, Telangana with <w>10.0</w> CGPA.
            </p>
            </div>
                <div class="Eduline-divider">
                    <div class="Eduline-car">
                    <i class="fa-solid fa-car-side"></i>
                </div>
                </div>
            </div>
        </section>
        <section id="Achievements">
          <h1>
              <span><i class="fa-solid fa-star"></i>
              <span>Achievements</span>
            <div class="achieveline">
                <div class="achieveline-box">
                	<p>
                	Awarded as <w>Top Performer</w> in <b>Web Development</b> course offered by <b>Internshala.</b> 
                </p>
            </div>
            <div class="achieveline-box">
            	<p>
                Scored <w>3rd</w> rank in overall <b>ECE</b> Branch in the college till 6th semester with <w>8.40</w> CGPA.
            </p>
            </div>
            <div class="achieveline-box">
            	<p>
            	Selected for an internship program offered by  <b>Telangana Academy for Skill & Knowledge</b> (TASK) in collaboration with <b>Edunet Foundation</b>
            </p>
            </div>
            <div class="achieveline-box">
            	<p>
            	Made <w>10+</w> personal projects on <b>Web Development.</b>
            	</p> 
            </div>
            <div class="achieveline-box">
            	<p>
            	Secured <w>76%</w> among <w>4818</w> members in <b>Programming in Java</b> organised by <b>NPTEL</b>
            </p>
            </div>
                <div class="achieveline-divider">
                    <div class="achieveline-star">
                    <i class="fa-solid fa-star"></i>
                </div>
                </div>
        <section id="contact">
        <div id="heading-section">
        <span><i class="fa-regular fa-address-card" style="color:white"></i></span>
            <span id="contact-heading"  style="color:white">Contact</span>
            </div>
<div id="contact-container">
    <div id="details-section">
        <label for="name">Your Name</label>
        <input id="name">
        <label for="email">Your Email</label>
        <input id="name">
        <label for="message">Enter your Query Here</label>
        <input id="name">
        <button type="button">SEND MESSAGE TO ANVITHA<i class="fa-solid fa-heart" style="color: red; font-size: 20px;"></i></button>
    </div>
      <div id="aside-section">
          <h1  style="color:white">
              Get in touch
          </h1>
          <p>
            You can connect with me  at any time  
          </p>
          <div id="address-title-div">
          <h1 id="address-title"  style="color:white">
              My Address
          </h1>
      </div>
          <div id="div1">
          <span><i class="fa-solid fa-location-dot"></i></span>
          <span  style="color:white">Karimnagar, Telangana, India</span>
                </div>
          <div id="div2">
              <span><i class="fa-solid fa-mobile-screen"></i></span>
              <span  style="color:white">8985229474</span>
          </div>
          <div id="div 3">
              <span><i class="fa-regular fa-envelope"></i></span>
              <span style="font-size:1rem" style="color:white">saianvithamamidala17@gmail.com </span>
          </div>
    </div>
      </div>   
        <div id="social-icons" >
                <ul class="horizontal-list text-center social-icons">
                    <li>
                        <a href="https://www.linkedin.com/in/sai-anvitha-mamidala-5b7668218/">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-stack-overflow"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-google-plus-g"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-quora"></i>
                        </a>
                    </li>
                </ul>
            </div>
        <div style="color:lightyellow;font-size:20px;text-align: right; margin:30px 0px 20px 30px">
                	---Anvitha
                </div>
    </section>
