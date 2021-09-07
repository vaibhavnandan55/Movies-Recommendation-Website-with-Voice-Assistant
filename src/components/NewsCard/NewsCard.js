import React, {useState, useEffect, createRef} from 'react'
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles.js';
const URL='https://image.tmdb.org/t/p/w500';
const NewsCard = ({article:{overview,vote_count,popularity,title,poster_path}, activeArticle,i}) => {
     const classes = useStyles();
     const [elRefs,setElRefs] = useState([]);
     const scrollToRef = (ref) => window.scroll(0,ref.current.offsetTop - 50);
    useEffect(()=>{
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()))
    },[])
    useEffect(()=>{
        if(i===activeArticle && elRefs[activeArticle])
        {
            scrollToRef(elRefs[activeArticle]);
        }
    },[i, activeArticle,elRefs])
     return (
        <Card ref={elRefs[i]} className={classNames(classes.card,activeArticle=== i?classes.activeCard:null)}>
            <CardActionArea href={'https://www.imdb.com/'} target="_blank" >
                 <CardMedia className={classes.media} image={URL+poster_path}/>
                 <div className={classes.details}>
                     <Typography variant='body2' color='#008b8b' component="h2">
                          Votes: {vote_count}
                     </Typography>
                     <Typography variant='body2' color='#f08080' component="h2">
                           Popularity: {popularity}
                     </Typography>
                 </div>
                 <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                 <CardContent>
                 <Typography variant='body2' color='textSecondary' component="p">
                     {overview}
                     </Typography>
                 </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
            <Button size="small" color="primary">
                Learn More
            </Button>
            <Typography variant='h5' color='textSecondary'>{i+1}</Typography>
          </CardActions>
        </Card>
    )
}

export default NewsCard;
