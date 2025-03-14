import React, { useEffect } from "react";
import "./main.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$750",
    description:
      "The epitome of romance,Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and adventurous activities.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "According to the World Tourise Ranking,45 Million people visit Turkey each year and from that about 2 Million come to visit Cappadocia.This place is known for its luxurious stays and adventurous activities.",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Huayna Picchu is a mountain in Peru,rising over Machu Picchu,the so-called Lost city of Incas.This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$750",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef.The hallmark of this place is 'Lavish' & 'beauty'.Always interestine to be in this place.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Angkor wat represents the entire range of khmer art from the 9th to the 15th century.This temole is considered the heart and soul of Cambodia.",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "An immense mausoleum of white marble,built-in Agra by Mushal emperor Shan Jahan in memory of his wife Mutaz,the monument is breathtakingly beautifuk.This place is known for its luxurious stays and adventurous activities.",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bali is an Indonesian Island and one of the best holiday destination in the Indonesian archipelage.Bali is known for its volcanic mountain,history,art & culture,food,temples and beautiful sandy beaches.",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$850",
    description:
      "The vibrant hues of the houses are its benchmark and explain the beauty of this place.Also,if you are a foodie and love seafood,you will be exhilarated with the choice you are about to get here.Happy exploring great food!",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "A city in central Mecico.Guanajuato is known for its history of silver mining and colonial architecture.The houses in the city are very attactively painted with the most bright colors available.Always Welcome.",
  },
];
function Main() {
  //Lets create a react hook to add a scroll animation.....

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations{" "}
        </h3>
      </div>

      <div className="secContent grid">
        {Data &&
          Data.map(
            ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
              return (
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>
                          {grade} <small>+1</small>
                        </span>
                      </div>

                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>
                    <button className="btn flex">
                      DETAILS
                      <LuClipboardCheck className="icon" />
                    </button>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </section>
  );
}

export default Main;
