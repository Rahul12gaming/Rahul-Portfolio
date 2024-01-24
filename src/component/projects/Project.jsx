import './project.css'
import img from '../assests/codeswear.png'
import img2 from '../assests/play-tube.png'
import img3 from '../assests/nike.png'
import img4 from '../assests/FitnessGym.png'
import img5 from '../assests/react.png'
import img6 from '../assests/shopping-cart.png'

export const Project=()=>
{
    return (
        <div className="projectContainer">
            <h1>My Projects</h1>
            <div className="project">
                <div className="projectCard">
                    <img src={img} alt="" />
                    <div className="projectDetails">
                        <p>Codeswear : A FullStack Mern Ecommerce Platform</p>
                       <div className="projectLink">
                       <a href="https://github.com/Rahul12gaming/CodeswearFrontend"><i class="fa-brands fa-github"></i></a>
                        <a href="https://codeswear-frontend.vercel.app/product"><i class="fa-solid fa-eye"></i></a>
                       </div>
                    </div>
                </div>
                <div className="projectCard">
                    <img src={img2} alt="" />
                    <div className="projectDetails">
                        <p>PlayTube : A YouTube Clone made with ReactJs Using RapidApi</p>
                       <div className="projectLink">
                       <a href="https://github.com/Rahul12gaming/PlayTube"><i class="fa-brands fa-github"></i></a>
                        <a href="https://play-tube.vercel.app/"><i class="fa-solid fa-eye"></i></a>
                       </div>
                    </div>
                </div>
                <div className="projectCard">
                    <img src={img3} alt="" />
                    <div className="projectDetails">
                        <p>NikeClone : A FullStack NikeClone using MernStack Ecommerce Platform</p>
                       <div className="projectLink">
                       <a href="https://github.com/Rahul12gaming/NikeClone"><i class="fa-brands fa-github"></i></a>
                        <a href="https://nike-clone-rose.vercel.app/"><i class="fa-solid fa-eye"></i></a>
                       </div>
                    </div>
                </div>
                <div className="projectCard">
                    <img src={img4} alt="" />
                    <div className="projectDetails">
                        <p>FitnessGym : FitnessGym made With Javascript and Html</p>
                       <div className="projectLink">
                       <a href="https://github.com/Rahul12gaming/FitnessGym"><i class="fa-brands fa-github"></i></a>
                        <a href="https://rahul12gaming.github.io/FitnessGym/"><i class="fa-solid fa-eye"></i></a>
                       </div>
                    </div>
                </div>

                <div className="projectCard">
                    <img src={img5} alt="" />
                    <div className="projectDetails">
                        <p>ReactWeatherApp : Weather Calculating using ReactJs and RapidApi</p>
                       <div className="projectLink">
                       <a href="https://github.com/Rahul12gaming/ReactWeatheraApp"><i class="fa-brands fa-github"></i></a>
                        <a href="https://react-weathera-app.vercel.app/"><i class="fa-solid fa-eye"></i></a>
                       </div>
                    </div>
                </div>

                <div className="projectCard">
                    <img src={img6} alt="" />
                    <div className="projectDetails">
                        <p>ShoppingCart : Used JavaScript to immplement Cart functionality</p>
                       <div className="projectLink">
                       <a href="https://github.com/Rahul12gaming/ReactShoppingCart"><i class="fa-brands fa-github"></i></a>
                        <a href="https://react-shopping-cart-beige.vercel.app/"><i class="fa-solid fa-eye"></i></a>
                       </div>
                    </div>
                </div>


            </div>
        </div>
    )
}