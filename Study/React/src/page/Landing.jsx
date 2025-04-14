import React from 'react'
import { Podcasters } from '../data'
import Card from '../components/Card'


const Landing = () => {
  return (
    <div className='space-y-6 mt-4'>
      <span className=''>
        <h1 className='font-bold text-fuchsia-700 text-base lg:text-3xl text-center'>Tuning into my Journey: A podcast playlist for growth and inspiration</h1>
        <p className='w-full max-w-7xl text-center mx-auto'>Welcome to my corner of the internet where I share the podcasts that have become the soundtrack to my journey of personal growth and self discovery</p>
      </span>
      <div className='min-h-screen flex items-center justify-center bg-gray-100 py-8'>
    
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8'>
        {Podcasters.map((data, index) => (
          <Card
            key={index}
            avatar={data.avatar}
            podcast={data.podcastName}
            authorName={data.host}
            reason={data.reason}
            benefit={data.benefit}
            favorite={data.favoriteEpisode}
          />
        ))}
      </div>
    </div>
    <footer className='font-bold text-center text-fuchsia-700'>NOTE: I can't wait to add my friend's FOG(Fragment's of Growth) to the list soon, gently awaiting her first episode</footer>
    </div>
    
  );
};

export default Landing;