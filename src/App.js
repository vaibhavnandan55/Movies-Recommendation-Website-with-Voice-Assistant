import React, { useState, useEffect }from "react";
import "./App.css"
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from './styles.js';
const alanKey='f16619bed9e09d2464b360531151637c2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

const [newsArticles, setNewsArticles] = useState([]);
const [activeArticle,setActiveArticle] = useState(-1);
const classes=useStyles();
useEffect(() => {
    alanBtn({
        key: alanKey,
        onCommand: ({command, results,number}) => {
            if(command === 'newHeadlines')
            {
                //console.log(results); 
                    setNewsArticles(results);
                setActiveArticle(-1 );  
            }
            else if(command=== 'highlight')
            {
                setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
            }
        }
    })
},[])

return (
    
     <div>
         <div className="_image1">
             <img src="https://www.vippng.com/png/detail/127-1279047_world-movies-logo-movies-world.png" className ='_image2' />
         </div>
   
        
         {console.log(newsArticles)};
         {<NewsCards articles={newsArticles} activeArticle={activeArticle}/> }
    </div>
);
}
export default App;