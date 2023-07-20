import dev_photo from '../assets/dev_photo.png';
export default function Home(){
    return(
        <div className="home_bg">
        <div className="home_main_para">
            <p>Welcome to my website. My name is Vikrant Dandekar and I am the developer of this website. This website not only serves as my testing ground for web development, It also acts as a dynamic portfolio.</p>

        </div>
        <div className='home_photo'>
        <img src={dev_photo} alt="Pic of the Dev :)"/>
        </div>
        </div>
    )
}