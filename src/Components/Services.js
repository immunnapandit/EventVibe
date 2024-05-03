import React from 'react';
import birthday from "../assets/birthdayImage.jpg";
import anniversary from "../assets/anniversary.jpg";
import camping from "../assets/camping.jpg";
import partyplanning from "../assets/PartyPlanning.jpg";
import weddingplanning from "../assets/WeedingPlanning.jpg";
import tripplanning from "../assets/tripplanning.jpg";

const Services = () => {
    const services = [
        {
            id: 1,
            url: birthday,
            title: "Birthday Planning"
        },
        {
            id: 2,
            url: anniversary,
            title: "Anniversary Planning"
        },
        {
            id: 3,
            url: camping,
            title: "Camping Trip Planning"
        },
        {
            id: 4,
            url: partyplanning,
            title: "Party Planning"
        },
        {
            id: 5,
            url: weddingplanning,
            title: "Wedding Planning"
        },
        {
            id: 6,
            url: tripplanning,
            title: "Trip Planning"
        }

    ];

    return (
        <>
          <div className="services container">
            <h2>OUR SERVICES</h2>
            <div className="banner">
              {services.map((element) => {
                return (
                  <div className="item" key={element.id}>
                    <h3>{element.title}</h3>
                    <img src={element.url} alt={element.title} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
    );
};

export default Services;
