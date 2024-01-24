import './home.css'
export const Home=()=>
{
    return (
        <div className="home" id="#home">
                <div className="homeContent">
                    <div className="leftSide">
                        <p>Hi There! 👋🏻</p>
                        <p>I'M <span>RAHUL ADHIKARI</span></p>
                        <p>An Aspiring MERN DEVELOPER</p>
                        
                    </div>
                    <div className="rightSide">
                            <img src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg" alt="" />
                    </div>
                </div>
                <p className='aboutHeading'>LET ME INTRODUCE MYSELF</p>
                <div className="aboutContent">
                    
                    <div className="aboutMe">
                        <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                        <p>I am fluent in classics like <span>C++, Javascript..</span></p>
                        <p>My field of Interest's are building <span>new  Web Technologies</span> and <span>Products.</span></p>
                        <p>Whenever possible, I also apply my passion for developing products with <span>Node.js</span> and <span>Modern Javascript Library and Frameworks</span>  like <span>React.js and Next.js.</span></p>
                    </div>  
                    <div className="aboutImg">
                        <img src="https://soumyajit.vercel.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg" alt="" />
                    </div>
                </div>
               
        </div>
    )
}