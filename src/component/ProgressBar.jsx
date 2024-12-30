import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [text,setText] = useState('Loading...')

  useEffect(() => {
   
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval); // Stop once 100% is reached
          setText('Completed');
          return 100;
        }
        return prev + 1;
      });
    }, 100); // Every 100ms loader increases

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', padding: '20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
        <span>{progress}%</span>
      </div>
      <div
        style={{
          height: '20px',
          width: '100%',
          backgroundColor: '#e0e0e0',
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#3b82f6', 
            transition: 'width 0.1s ease-in-out',
          }}
        ></div>
      </div>
      <span>{text}</span>
    </div>

  );
};

export default Loader;
