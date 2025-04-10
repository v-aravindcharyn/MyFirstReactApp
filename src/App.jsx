import React from 'react'
import MovieLine from './Components/MovieLine'
import './App.css'
function App() {
  const cricketers2011 = [
    {
      id: 1,
      titleName: "MS Dhoni",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/d5/MS_Dhoni_%28Prabhav_%2723_-_RiGI_2023%29.jpg",
    },
    {
      id: 2,
      titleName: "Yuvraj Singh",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/8/81/Yuvraj_Singh_appointed_as_Ulysse_Nardin_watch_brand_ambassador.jpeg",
    },
    {
      id: 3,
      titleName: "Gautam Gambhir",
      imageURL: "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1732598288013_1731318126128_gg.jpg?type=tq",
    },
    {
      id: 4,
      titleName: "Zaheer Khan",
      imageURL: "https://www.mumbaiindians.com/static-assets/waf-images/a9/ac/22/16-9/1920-1080/p60Q7HL0gQ.jpg",
    },
  ]
  const australianCricketers2011 = [
    {
      id: 5,
      titleName: "Ricky Ponting",
      imageURL: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319700/319711.1.png",
    },
    {
      id: 6,
      titleName: "Michael Clarke",
      imageURL: "https://images.onlymyhealth.com/imported/images/2024/July/30_Jul_2024/mn-OCD.jpg",
    },
    {
      id: 7,
      titleName: "Shane Watson",
      imageURL: "https://m.media-amazon.com/images/M/MV5BM2E1ZWQxZTAtMGZjMS00OGMzLWExNjQtODRhNGI5Yzg2MTlhXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 8,
      titleName: "Brad Haddin",
      imageURL: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/287500/287555.jpg",
    }
  ];
  return (
    <div className='App'>
      <h1>2011 Indian Crickters</h1>
      <MovieLine cricketerNames={cricketers2011} />
      <h1>2011 Australian Crickters</h1>
      <MovieLine cricketerNames={australianCricketers2011} />
    </div>
  )
}

export default App
