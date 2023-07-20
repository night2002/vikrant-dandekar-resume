import React from 'react'
import './Animewatchlist.css'
import preview_anime from '../assets/Anime-Watchlist-Preview.mp4';
export default function Animewatchlist() {
  return (
    <div>
        <div className="project-container">
            <div className="anime-watchlist">
                <div className="title-anime-watchlist-container">
                    <h2 className='h2'>
                        <a href='https://night2002.github.io/anime-watchlist/'><div className="a-anime">Anime watchlist</div></a></h2>
                </div>
                <div className="anime-watchlist-details">
                <div className="description">
                <p className='p'>Anime watchlist is a React.js + Vite.js web-app is made for the user to see the details of upcoming as well as popular anime,The data is automatically fetched using an API called 'Jikan.api', You can learn about the characters,release date,ratings, and various other factors about your favourite shows. 
                <h4>Features :</h4>
                <p>- Uses REST API.</p>
                <p>- Unique URL for each character and show which gets updated automatically.</p>
                <p>- Extensively uses CSS to give a modern look.</p>
                <p>- Search bar and options to select popular/upcoming anime.</p>
                </p>
                </div>
                <div className="video-container">
                    <iframe className='iframe'
                        src={preview_anime}
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

