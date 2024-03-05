import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'


function News(props) {

  const [Article, setArticle] = useState([]);
  
  

  const updateFunction = async () => {
    props.setprogress(10)
    const Url = `http://localhost:3000/articles-${props.Catagory}`;
    let deta = await fetch(Url);
    props.setprogress(30)
    let parseData = await deta.json();
    props.setprogress(60)
    // console.log(parseData);
    setArticle(parseData)
    props.setprogress(100)
    document.title = `${props.Catagory} - Daily News`


  }

  useEffect(() => {
    updateFunction();
  }, [])

 



  return (
    <>
      <div className="row  " style={{ width: '100%', marginTop: '60px', display: 'flex', alignItems: 'center' }}>
        <h2 className='text-center my-3'>TOP HEADLINES - {props.Catagory}</h2>
        
          {
            Article.map(item => {
              return <div className="col-md-4 " key={item.url}>
                <NewsItem Title={item.title ? item.title : "Not Available"} Discription={item.description ? item.description.slice(0, 50) : "Not Available"} imaGeUrl={item.urlToImage ? item.urlToImage : "https://images.wsj.net/im-914796/social"} newsUrl={item.url} />
              </div>
              // {console.log(item.title)}
            })
          }
        



      </div>

    </>
  )
}

export default News
