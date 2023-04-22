import React from 'react';
import Portfolio from './components/Portfolio/Portfolio'

const Portfoio = () => {
    return (
        <div>
            <Portfolio name="Portfolio"  dataPassedProcess={portfolioData}/>
        </div>
    );
};


const portfolioData =[
    {
        id: 1,
        code:"linked",
        image: "https://i.ibb.co/ysfSTtR/image.png",
        code_link: "https://github.com/AR-Tausif/portfolioi-v.1",
        live_site: "https://skill-curves.netlify.app/",
        title:"School Management",
        description: "Create a school management website with react js."
    },
    {
        id: 2,
        code:"linked",
        image: "https://user-images.githubusercontent.com/120933222/227505618-94f217a4-a570-416a-b802-007de61efac1.png",
        code_link: "https://github.com/Programming-Hero-Web-Course4/b7-legal-house-AR-Tausif",
        live_site: "https://ph-assignment03.netlify.app/",
        title:"Legal Solutions",
        description: "Legal solutioins for learning legal providers"
    },
    {
        id: 3,
        code:"linked",
        image: "https://user-images.githubusercontent.com/120933222/221346739-ec270d99-527b-4afa-ac5e-6f9c3b9cbe3d.png",
        code_link: "https://github.com/AR-Tausif/meals-products",
        live_site: "https://foamy-skin.surge.sh/",
        title:"Meal DB",
        description: "Meal DB project created with an official appliications programme interfaces(API)."
    },
    {
        id: 4,
        code:"linked",
        image: "https://user-images.githubusercontent.com/120933222/227500610-f5b4654a-5176-4176-bc59-db89be49f609.png",
        code_link: "https://github.com/AR-Tausif/new-mission-new-me",
        live_site:"https://ar-tausif.github.io/new-mission-new-me/",
        title:"Concept",
        description: "Landing page design with raw html and raw css. It's basically create for practice"
    },
    {   
        id: 5,
        code: "linked",
        image: "https://user-images.githubusercontent.com/120933222/227501610-88a8c530-514f-45e9-a7d9-432e1dc7c95b.png",
        code_link: "https://github.com/AR-Tausif/Assignment-02/",
        live_site: "https://ar-tausif.github.io/Assignment-02/",
        title:"Architects",
        description: "This website build for a Architects agency design. It's represent there companies showcase.	"
    },
  ]

export default Portfoio;