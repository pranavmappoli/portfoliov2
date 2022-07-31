import React from "react";
import "./story.css";
import defaultImg from "../../assets/images/aboutMeImg.jpg";

function Story(props) {
  return (
    <div className="story__container--main">
      <div className="story__figure--container">
        <div className="story__figure">
          <img src={props.story__img} alt="storyimg" />
        </div>
      </div>
      <div className="story__content"></div>
      <span className="story__heading ">
        <div className="section__contentTitle pb-2 about__content">
          Hey, <span className="text-firstColor">I'am Pranav</span>{" "}
        </div>
      </span>
      <span className="story__para ">
        Iam an web developer, currently working as a{" "}
        <span className=" font-bold ">Software Engineer-III</span> at
        <span className=" font-bold "> Walmart</span> . I have experience in
        developing of various Web applications using React & JavaScript. I have
        over 2.5 years of Front-end experience and passion for responsive
        website design with the ability to collaborate effectively with senior
        developers.
      </span>
    </div>
  );
}
Story.defaultProps = {
  story__author: "Marry Smith",
  story__img: defaultImg,
  story__para:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
  story__heading: "Hey, I'am Pranav",
};

export default Story;
