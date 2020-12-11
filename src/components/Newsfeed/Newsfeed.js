import React, {useState} from 'react';
import './Newsfeed.scss'
import LineGraph from "../LineGraph/LineGraph";
import TimeLine from "../TimeLine/TimeLine";
import {Avatar, Chip} from "@material-ui/core";

const Newsfeed = () => {

  const [popularTopics,setPopularTopics]=useState( [
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ])

  return (
    <div className={'newsfeed'}>
      <div className="newsfeed__container">
        <div className="newsfeed__chatSection">
          <div className="newsfeed__portfolio">
            <h1>$114,656</h1>
            <p>+$44.63 (+0,04%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph/>
            <TimeLine/>
          </div>
        </div>
        <div className="newsfeed__buyingSection">
          <h2> Buying Power </h2>
          <h2> $4.11 </h2>
        </div>
        <div className="newsfeed__marketSection">
          <div className="newsfeed__marketBox">
            <p> Markets Closed </p>
            <h1> Happy Thanksgiving </h1>
          </div>
        </div>
        <div className="newsfeed__popularlistsSection">
          <div className="newsfeed__popularlistsIntro">
            <h1> Popular lists </h1>
            <p> Show More </p>
          </div>
          <div className="newsfeed__popularlistsBadges">
            {popularTopics.map((topic)=>(
              <Chip
                className={'topic__badge'}
                variant={'outlined'}
                label={topic}
                avatar={<Avatar
                src={`https://avatars.dicebear.com/4.5/api/human/${topic}.svg`}
                />}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Newsfeed;
