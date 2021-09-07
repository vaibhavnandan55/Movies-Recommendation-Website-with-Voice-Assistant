import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';
import "./NewsCards.css"
const infoCards = [
    { color: '#808000', title: 'Popular Movies', text: ' Try Searching : What are the most popular movies or kid movies' },
    { color: '#5f9ea0', title: 'Movies by Year', info: '', text: 'Try Searching :What are the best movies from 2012' },
    { color: '#008b8b', title: 'Movies by Genre', info: 'Drama, Comedy, Romantic...', text: 'Try Searching :What are the best drama movies' },
    { color: '#008b8b', title: 'Movies by Genre and Year', info: '', text: 'Try Searching :What are the best drama movies from 2020' },
    { color: '#f08080', title: 'Movie Search by Keyword', info: '', text: 'Try Searching :Search for Love/Hard or anything' },
    { color: '#f08080', title: 'Small talk Assistant', info: '', text: 'Try Searching :How are you or Talk About Yourself or Go back' },
];
const NewsCards = ({articles,activeArticle}) => {
    const classes = useStyles();
      if(!articles.length)
      {
        return (<div>
            <div className="_cards3" >
            <h1>{infoCards[0].title}</h1>
            <h4>{infoCards[0].text}</h4>
        </div>
<div className="_cards2_div">
       <div className="_cards2" >
            <h1>{infoCards[1].title}</h1>
            <h4>{infoCards[1].text}</h4>
        </div>
        <div className="_cards2" >
            <h1>{infoCards[2].title}</h1>
            <h4>{infoCards[2].text}</h4>
        </div>
</div>
<div className="_cards1" >
            <h1>{infoCards[3].title}</h1>
            <h4>{infoCards[3].text}</h4>
        </div>
<div className="_cards4_div">
       <div className="_cards2" >
            <h1>{infoCards[4].title}</h1>
            <h4>{infoCards[4].text}</h4>
        </div>
        <div className="_cards2" >
            <h1>{infoCards[5].title}</h1>
            <h4>{infoCards[5].text}</h4>
        </div>
</div>
</div>
           );
        }
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {articles.map((article,i)=>(
                <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                <NewsCard article={article} activeArticle={activeArticle} i={i}/>
                </Grid>
            ))}
            </Grid>
        </Grow>
    );
}

export default NewsCards;
