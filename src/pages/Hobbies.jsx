import preview_anime from '../assets/Anime.mp4';
import preview_game from '../assets/game.mp4';
import './Hobbies.css'
export default function Hobbies(){
    return(
        <div className="Hobbies-bg">
            <div className="Hobbies-container">
            <div className="anime-title"><h1>Anime</h1></div>
            <div className="details">
            <p>I woudn't call myself a hardcore fan but anime has been a huge part of my teenage life,I don't really favour  any specific genre as such and have seen shows such as Code Geass, Attack on Titan, Kaguya-sama: Love Is War.</p>
            <p>My favourite anime of all time hasn't been dethroned in a long time and that crown belongs to Neon Genesis Evangelion.</p>
            <p>This is the opening for the Anime, I thoroughly reccomend you do watch it(wear headphones for maximum effect).</p>
            </div>
            <video className='iframe' width="800" height="450" controls >
                <source src={preview_anime} type='video/mp4'></source>
            </video>
            <p className='p_hobbies'>A list of my favourite animes.</p>
            <div className="container-list">
                <div className="anime-list">
                    <p>1. Neon Genesis Evangelion</p>
                    <p>2. Attack on Titan</p>
                    <p>3. Code Geass</p>
                    <p>4. Kaguya-sama: Love Is War</p>
                    <p>5. Oregairu</p>
                </div>
                <div className="anime-list">
                    <p>6. Mushoku Tensei</p>
                    <p>7. High School DxD</p>
                    <p>8. Jujutsu Kaisen</p>
                    <p>9. A Silent Voice</p>
                    <p>10. Naruto/Naruto Shippuden</p>
                </div>
            </div>
            <div className="anime-title">
            <h1>Gaming</h1>
            </div>
            <div className="details">
            <p>I played my first video game at just 8 years old! at that age I could only play games which were already installed on the home computer and one of them had a special place in my heart, It was none other than Counter-Strike 1.6, other than that I do spend a lot of my free time playing games with my friends on steam.</p>
            <p>My favourite game keeps changing but for now It is Resident evil 4 Remake, Here is a trailer to that game.</p>
            </div>
            <video className='iframe' width="800" height="450" controls >
                <source src={preview_game} type='video/mp4'></source>
            </video>
            <p className='p_hobbies'>Here is a list of the top 10 games I would reccomend playing.</p>
            <div className="container-list">
                <div className="game-list">
                    <p>1. Resident Evil Series</p>
                    <p>2. Elden Ring</p>
                    <p>3. Hitman Trilogy</p>
                    <p>4. Counter-Strile</p>
                    <p>5. Grand Theft Auto</p>
                </div>
                <div className="game-list">
                    <p>6. Minecraft</p>
                    <p>7. Witcher 3</p>
                    <p>8. Half Life series</p>
                    <p>9. HALO series</p>
                    <p>10. Kingdom Come Deliverance</p>
                </div>
            </div>
            <div className="anime-title">
            <h1>Youtube Channel </h1>
            </div>
            <div className="details">
                <p>Made a youtube channel to make gaming tutorials eventually moved on anime music videos and general editing, have amaased over lakhs of  views in total</p>
                <p>Here is one of my most watched video with over a lakh views.</p>
            </div>
            <iframe className='iframe'
                    src='https://www.youtube.com/embed/6o3fnSc2WeE'
                    title='Anime watchlist preview'
                    width="800"
                    height="450"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyrocsope;picture-in-picture"
                    allowFullScreen>  
            </iframe>
            <div className="anime-title">
            <h1>Computer hardware</h1>
            </div>
            <div className="details">
                <p>Built and Assembled my own PC by buying the components indvidually from lamington road with a budget of Rs 20,000.</p>
                <p>many people have taken my reccomendations to buy the laptop or the PC I  reccomend.</p>
            </div>
            <div className="anime-title">
            <h1>Game devlopment</h1>
            </div>
            <div className="details">
            <p>I have made a game with the Python based  renpy engine.</p>
            <p>It is a visual novel with romance elements.</p>
            </div>
            </div>
        </div>
    )
}