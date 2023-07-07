import React from 'react';

function DataScience() {
  const ds = {
    Name: "Data Science",
    imgUrl: "https://www.guvi.in/blog/category/data-science/",
    Description: "The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts! The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content created by experts!",
    Duration: "3 Months",
    Price: "₹ 55,000",
  };

  return (
    <>
      <h1>{ds.Name}</h1>
      <img src={ds.imgUrl} alt="Data Science" />
      <p>{ds.Description}</p>
      <p>Duration: {ds.Duration}</p>
      <p>Price: {ds.Price}</p>
    </>
  );
}

export default DataScience;
