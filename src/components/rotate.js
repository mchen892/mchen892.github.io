import React, { useState, useEffect } from 'react';

const RotatingText = () => {
  const textOptions = [' a software engineer', ' a creator', ' an artist', ' a fashion enthusiast'];
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the index to the next text option
      setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000); // changes text every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Set the current text when the index changes
    setCurrentText(textOptions[index]);
  }, [index]); // Only re-run the effect if the index changes

  return <div className>{currentText}</div>;
};

export default RotatingText;