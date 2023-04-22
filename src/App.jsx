import { useState } from 'react'
import Banner from './components/Header/Banner'
import Navbar from './components/Navbar/Navbar'
import Workprocess from './components/WorkProcess/Workprocess'
import Portfolio from './components/Portfolio/Portfolio'
import './App.css';
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Workprocess name="Work Process"  dataPassedProcess={processeData}/>
      <Portfolio name="Portfolio"  dataPassedProcess={portfolioData}/>
      <Footer />
    </div>
  )
}

const processeData =[
  {
      id: 1,
      image: "https://hellopranto.com/wp-content/uploads/2022/07/1-768x768.jpg",
      title:"Empathise",
      description: "Understanding of the people, I'm designing for and the problem I'm trying to solve"
  },
  {
      id: 2,
      image: "https://hellopranto.com/wp-content/uploads/2022/07/2-768x768.jpg",
      title:"Ideate",
      description: "It's a creative process where I generate ideas through ideation techniques."
  },
  {
      id: 3,
      image: "https://hellopranto.com/wp-content/uploads/2022/07/3.jpg",
      title:"Concept",
      description: "The idea I get from the idea stage, explained via a collection of sketches, images, and a written statement."
  },
  {
      id: 4,
      image: "https://hellopranto.com/wp-content/uploads/2022/07/4.jpg",
      title:"Execution",
      description: "This is the final step where I start to execute the final concept and hand over the client."
  },
];

const portfolioData =[
  {
      id: 1,
      code:"linked",
      image: "https://user-images.githubusercontent.com/120933222/227505618-94f217a4-a570-416a-b802-007de61efac1.png",
      code_link: "https://github.com/Programming-Hero-Web-Course4/b7-legal-house-AR-Tausif",
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
      title:"Empathise",
      description: "Understanding of the people, I'm designing for and the problem I'm trying to solve"
  },
  {
      id: 3,
      code:"linked",
      image: "https://user-images.githubusercontent.com/120933222/221346739-ec270d99-527b-4afa-ac5e-6f9c3b9cbe3d.png",
      code_link: "https://github.com/AR-Tausif/meals-products",
      live_site: "https://foamy-skin.surge.sh/",
      title:"Ideate",
      description: "It's a creative mealdb API project."
  },
  {
      id: 4,
      code:"linked",
      image: "https://user-images.githubusercontent.com/120933222/227500610-f5b4654a-5176-4176-bc59-db89be49f609.png",
      code_link: "https://github.com/AR-Tausif/new-mission-new-me",
      live_site:"https://ar-tausif.github.io/new-mission-new-me/",
      title:"Concept",
      description: "The idea I get from the idea stage, explained via a collection of sketches, images, and a written statement."
  },
  {   
      id: 5,
      code: "linked",
      image: "https://user-images.githubusercontent.com/120933222/227501610-88a8c530-514f-45e9-a7d9-432e1dc7c95b.png",
      code_link: "https://github.com/AR-Tausif/Assignment-02/",
      live_site: "https://ar-tausif.github.io/Assignment-02/",
      title:"Execution",
      description: "This is the final step where I start to execute the final concept and hand over the client.	"
  },
]
export default App
