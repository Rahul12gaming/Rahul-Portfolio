 import './about.css'
export const About = () => {
  return (
    <div className="aboutContainer2">
      <div className="aboutContent2">
       <h1>About Me</h1>
        <div className="aboutMe2">
          <p>
            Hello there! I'm Rahul Adhikari, a dedicated individual currently in
            the final year of my Bachelor of Computer Applications (BCA)
            program. With a strong passion for technology and a keen interest in
            web development, I have honed my skills to become a proficient
            frontend developer.
          </p>
          <p>
            Throughout my academic journey, I have not only acquired a solid
            foundation in computer science but have also actively sought
            opportunities to apply my knowledge in real-world scenarios. My
            coursework has equipped me with a comprehensive understanding of
            programming languages, algorithms, and data structures, providing me
            with a strong technical background.
          </p>
          <p>
            As a frontend developer, I thrive on creating engaging and
            user-friendly interfaces that seamlessly blend aesthetics with
            functionality. I am well-versed in HTML, CSS, and JavaScript, and I
            keep myself updated with the latest trends and technologies in the
            ever-evolving world of web development. Whether it's crafting
            responsive designs, optimizing performance, or ensuring
            cross-browser compatibility, I am committed to delivering
            high-quality and visually appealing web experiences.
          </p>
          <p>
            Outside of the tech world, I enjoy staying active and maintaining a
            healthy work-life balance. I am excited about the possibilities that
            the future holds and look forward to contributing my skills and
            enthusiasm to the world of frontend development
          </p>
        </div>
      </div>
      <h1 className="h1" style={{textAlign:'center'}}>Worked With Technology Are!</h1>

      <div className="tech">
        <div className="cta">
          <i class="fa-brands fa-react"></i>
          <span>React Js</span>
        </div>

        <div className="cta">
        <i class="fa-brands fa-html5"></i>
          <span>HTML</span>
        </div>

        <div className="cta">
          <i class="fa-brands fa-css3-alt"></i>
          <span>Css</span>
        </div>

        <div className="cta">
          <i class="fa-brands fa-bootstrap"></i>
          <span>Bootstrap</span>
        </div>

        <div className="cta">
          <i class="fa-brands fa-node"></i>
          <span>Node Js</span>
        </div>

        <div className="cta">
          <i class="fa-solid fa-database"></i>
          <span>MongoDb</span>
        </div>

        <div className="cta">
          <i class="fa-brands fa-github"></i>
          <span>Github</span>
        </div>

        
      </div>
    </div>
  );
};
