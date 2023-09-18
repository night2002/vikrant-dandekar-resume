import React from 'react'
import './Animewatchlist.css'
import springboot from '../assets/SpringBoot.mp4';
export default function SpringBoot() {
  return (
    <div>
        <div className="project-container">
            <div className="anime-watchlist">
                <div className="title-anime-watchlist-container">
                    <h2 className='h2'>
                        <a href='https://github.com/night2002/springboot-MongoDB'><div className="a-anime">Springboot + MongoDB</div></a></h2>
                </div>
                <div className="anime-watchlist-details">
                <div className="description">
                <p className='p'>Springboot + MongoDB is a backend project made using the maven package and mongoDB compass. It allows the user to get the list of all the movies in the database and also make changes such as adding reviews to the movies from the database 
                <h4>Features :</h4>
                <p>- Uses springboot Maven package and MongoDB.</p>
                <p>- Dynamic data reviews can be added to the database and are saved.</p>
                <p>- Uses https status code to make sure to let us know if there is an error or not.</p>
                <p>- Scalable code.</p>
                </p>
                </div>
                <div className="video-container">
                    <iframe className='iframe'
                        src={springboot}
                        title='Anime watchlist preview'
                        width="800"
                        height="450"
                        // height="500"
                        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyrocsope;picture-in-picture"
                        allowFullScreen>     
                    </iframe>
                </div>
                </div>
               
            </div>
        </div>
        </div>
  )
}

