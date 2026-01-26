import "../styles/about.css";

export function AboutSection() {
  return (
    <section id="about" className="aboutSection">
      <div className="aboutInner">
        <h2 className="aboutTitle">About Me</h2>

        <div className="aboutCard">
          <p className="aboutText">
            Hi, I'm a Computer Engineering graduate with a passion for creating
            innovative and user-friendly mobile applications. Born in Hagen,
            Germany, and raised in Turkey, I've had the privilege of blending
            diverse cultural perspectives into my work.
          </p>

          <p className="aboutText">
            With several years of experience in iOS development and solid
            expertise in Java for Android, HTML, CSS, and JavaScript, I
            specialize in crafting seamless digital experiences.
          </p>

          <p className="aboutText">
            Currently based in Dortmund, I'm fluent in German (B2 level) and
            always looking to tackle exciting challenges in the tech world.
          </p>
          <ul className="skillList" aria-label="Skills">
  {[
    "Swift",
    "SwiftUI",
    "UIKit",
    "Core Data",
    "ARKit",
    "Core ML",
    "Combine",
    "Git",
    "Figma",
    "MVVM",
    "MVC",
    "Firebase",
    "REST API",
    "Alamofire",
    "CocoaPods",
  ].map((skill) => (
    <li key={skill} className="skillItem">
      {skill}
    </li>
  ))}
</ul>


        </div>
      </div>
      
    </section>
  );
}

