import React from 'react';

const Home = ({ title, viewCount, moment, image }) => {
  return (
    <>
      <div className='title-video'>
        <div className='video-img'>
          <img src={image} alt='video screen' />
        </div>
        <div className='video-details'>
          <div className='video-title'>{title}</div>
          <div className='timestamp'>
            <div className='view-count'>{viewCount}</div>
            <p className='dot'>.</p>
            <div className='date-posted'>{moment}</div>
          </div>
          <div className='video-content'>
            Timestamps: <br />
            00:00 - How NOT to present your UX Case Studies <br />
            00:29 - Download the free UX presentation template <br />
            00:59 - Presenting a real UX design case study <br />
            08:15 - It's not about your design process <br />
            08:56 - The 3 Act structure <br />
            09:35 - Don't overwhelm your audience <br />
            00:29 - Download the free UX presentation template <br />
            00:59 - Presenting a real UX design case study <br />
            08:15 - It's not about your design process <br />
            08:56 - The 3 Act structure <br />
            09:35 - Don't overwhelm your audience <br />
            <span className='bold show-more'>Read more</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
