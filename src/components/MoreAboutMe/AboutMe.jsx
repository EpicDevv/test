import React from "react";
import MoreAboutMe from "./MoreAboutMe";
import "./MoreAboutMe.css";
import vscode from './../../assets/partnership.png';
import photoshop from './../../assets/performance.png';
import photography from './../../assets/subscription.png';
import final from './../../assets/support.png';



const aboutData = [
  {
    infoImg: photoshop,
    infoName: "Adobe Photoshop",
    description:
      "PhotoShop is a great skill to have as a web developer because it gives me to ability to create high definition images and graphics for the websites I work on. This gives me the ability to create Logos banners and other abstract images to use on websites.",
  },
  {
    infoImg: vscode,
    infoName: "Visual Studio code",
    description:
      "I use Visual Studio Code because it features a lightning fast source code editor, perfect for day-to-day use. With support for hundreds of languages, VS Code helps you be instantly productive with syntax highlighting, bracket-matching, auto-indentation, box-selection, snippets, and more",
  },
  {
    infoImg: final,
    infoName: "Final Cut Pro",
    description:
      "I have used Final Cut Pro x for multiple years and have mastered video editing. This really helps me when it comes to Web Development because it is important to make my own content and having the right tools at your disposal sets yourself up for success. E- Commerce is a big industry in web development and being able to understand how to create quality video ads is really important.",
  },
  {
    infoImg: photography,
    infoName: "Photography",
    description:
      "I have mastered photography with DSLR cameras and this has really helped me with creating my own digital content. I have always been interested in photography and videography since a young age. This is a great skill to have when it comes to being a webmaster. I enjoy creating content for my social media and for web development communities.",
  },
];

const AboutMe = () => {
  return (
    <div className="section-container">
      <div className="header-container">
        <p>More About Me!</p>
        <h1>
          Always walk through life as if you have something new to learn and you
          will.
        </h1>
      </div>
      <div className="about-card-container">
        {aboutData.map(({ infoImg, infoName, description }) => {
          return (
            <MoreAboutMe
              infoImg={infoImg}
              infoName={infoName}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
