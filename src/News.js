import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './News.css'
import * as ImIcons from 'react-icons/im'



function News() {
    const [news,setNews] = useState([]);
    const [search, setSearch] = useState("football");
    const [toggler, setToggler] = useState(false);
    const toggle = () => {
        setToggler(!toggler);
    }


    const reload = () => {
        window.location.reload();
    }

    useEffect(() => {
      Axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=e3d6c2c51fe241c6a6b355e0000edf3c`).then(response => setNews(response.data.articles))
      
    },[toggler])

   

    return (
        <div>
            <br/>
                 <input type = "text" placeholder = "Search..."  onChange = {e => setSearch(e.target.value)} 
                 className='searchinp'/> <button onClick={toggle} className='search'><ImIcons.ImSearch/> Search</button><br/>
           { news.map(item => <div key = {item.title} className = "news item"  > <div> 
           <a href = {item.url} target = '_blank'> <h3>{item.title}</h3> </a> 
           <p className='description' >{item.description}</p>
           <img src = {item.urlToImage} className = "image"/>
           <p style ={{textAlign: "right"}}>{item.author && <p>@{item.author}</p>}</p>
            </div> <br/> </div>)}
           
        </div>
    );
}

export default News;