import React from 'react';

function Career() {
  const career = {
    Name: "Career",
    imgUrl: "https://www.guvi.in/blog/category/career/",
    Description: "The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content created by experts!",
    Duration: "1 Months",
    Price: "₹ 30,000",
  };

  return (
    <>
      <h1>{career.Name}</h1>
      <img src={career.imgUrl} alt="Career" />
      <p>{career.Description}</p>
      <p>Duration: {career.Duration}</p>
      <p>Price: {career.Price}</p>
    </>
  );
}

export default Career;
