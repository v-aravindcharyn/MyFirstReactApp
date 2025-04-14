import React from 'react'
import MovieLine from './Components/MovieLine'
import Header from './Components/Header'

import './App.css'

function App() {
  const cityNames1 = [
    {
      id: 1,
      titleName: "Mumbai",
      imageURL: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/c8/3a.jpg",
      wikiURL: "https://en.wikipedia.org/wiki/Mumbai",
    },
    {
      id: 2,
      titleName: "Delhi",
      imageURL: "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg",
      wikiURL: "https://en.wikipedia.org/wiki/delhi",
    },
    {
      id: 3,
      titleName: "Bangalore",
      imageURL: "https://cdn.britannica.com/91/189791-050-4CE6663A/Bangalore-Palace-Bengaluru-India.jpg",
      wikiURL: "https://en.wikipedia.org/wiki/bangalore",
    },
    {
      id: 4,
      titleName: "Hyderabad",
      imageURL: "https://tourism.telangana.gov.in/storage/app/resources/resize/250_445_0_0_auto/img_f6fc3f8fddfa296ec315b3a86811f364.png",
      wikiURL: "https://en.wikipedia.org/wiki/hyderabad",
    }
  ];

  const cityNames2 = [
    ,
    {
      id: 5,
      titleName: "Chennai",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg",
      wikiURL: "https://en.wikipedia.org/wiki/delhi",
    },
    {
      id: 6,
      titleName: "Kolkata",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Kolkata_Imgs.jpg",
      wikiURL: "https://en.wikipedia.org/wiki/kolkata",
    },
    {
      id: 7,
      titleName: "Jaipur",
      imageURL: "https://static.toiimg.com/img/115224983/Master.jpg",
      wikiURL: "https://en.wikipedia.org/wiki/jaipur",
    },
    {
      id: 8,
      titleName: "Ahmedabad",
      imageURL: "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos737713342xl-1738989179762.jpg",
      wikiURL: "https://en.wikipedia.org/wiki/ahmedabad",
    }
  ];

  return (
    <div>
      <Header></Header>
      <div className='main-container'>
        <MovieLine cityNames={cityNames1} />
        <MovieLine cityNames={cityNames2} />
      </div>
    </div>
  )
}

export default App
