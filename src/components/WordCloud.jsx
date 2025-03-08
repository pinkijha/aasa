import React from 'react'
import wrld from '../assets/World.jpg'

const WordCloud = () => {
    return (
        <div className="flex flex-col items-center text-center p-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
            Is This Right for You?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Everybody is fond of Digital Art! You need it too.
          </p>
    
          {/* Word Cloud */}
          <div className='md:h-auto'>
            <img src={wrld} />
          </div>
        </div>
      );
}

export default WordCloud
