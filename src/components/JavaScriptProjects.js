import React from 'react'
import todoList from "../images/todoListPortfolio.png";
import quiz from "../images/quizPortfolio.png";
import socialMedia from "../images/socialMediaPortfolio.png";
import ticTacToe from "../images/tic-tac-toePortfolio.png";
import weatherApp from "../images/weatherAppPortfolio.png";
import { Link } from 'react-router-dom';


const JavaScriptProjects = () => {
    const projectArray = [
        { img: todoList, sourceCodeLink: "https://github.com/MeghashreeK/Todo-List", seeLiveLink: "https://to-do-list-e.netlify.app/" },
        { img: ticTacToe, sourceCodeLink: "https://github.com/MeghashreeK/tic-tac-toe", seeLiveLink: "https://tic-tac-to-e.netlify.app/" },
        { img: quiz, sourceCodeLink: "https://github.com/MeghashreeK/Quiz", seeLiveLink: "https://quizgame799.netlify.app/" },
        { img: socialMedia, sourceCodeLink: "https://github.com/MeghashreeK/social-media-design", seeLiveLink: "https://socialmediawebsit-e.netlify.app/" },
        { img: weatherApp, sourceCodeLink: "https://github.com/MeghashreeK/weatherWebApp", seeLiveLink: "https://deft-gingersnap-ed1768.netlify.app/" },
    ];
    return (
        <div className='flex flex-col gap-10 sm:gap-5'>
          {/* <h1 className='font-bold text-3xl sm:text-4xl font-Merriweather'>JavaScript Projects</h1> */}
          <div className='flex gap-5 flex-wrap font-Montserrat'>
            {projectArray.map((projects,index) => 
              <div key={index} className='w-full lg:w-[30%] bg-[#BF40BF] rounded-lg'>
                <img className='rounded-lg' src={projects.img} alt="food-app" />
                <div className='flex gap-3 p-2 items-center justify-end'>
                  <Link to={projects.sourceCodeLink}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="github"/></Link>
                  <Link to={projects.seeLiveLink}><img className='w-5 h-5' src="https://img.icons8.com/ios-filled/50/ffffff/link--v1.png" alt="link--v1"/></Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )
}

export default JavaScriptProjects;