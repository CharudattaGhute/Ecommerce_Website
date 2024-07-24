import React, { useState } from "react";

function Tabular() {
  const content = [
    ["Ronaldo", "Messi", "Mbappe"],
    ["Ms Dhoni", "Virat", "Rohit"],
    ["Salman", "Sharukh", "Amir"],
  ];
  const info = {
    football: "Cristiano Ronaldo is a Portuguese professional footballer.",
    cricket: "MS Dhoni is a former Indian cricketer and captain.",
    bollywood: "Salman Khan is an Indian film actor and producer.",
  };

  const [contentindex, setcontentIndex] = useState(2);
  const [infoindex, setinfoIndex] = useState("football");

  return (
    <>
      <button onClick={() => setcontentIndex(0)}>Football</button>
      <button onClick={() => setcontentIndex(1)}>Cricket</button>
      <button onClick={() => setcontentIndex(2)}>Bollywood</button>
      <br />
      <br />
      <button onClick={() => setinfoIndex("football")}>Footballinfo</button>
      <button onClick={() => setinfoIndex("cricket")}>Cricketinfo</button>
      <button onClick={() => setinfoIndex("bollywood")}>Bollywoodinfo</button>

      <ul>
        {content[contentindex].map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
      {infoindex && (
        <div>
          <p>{info[infoindex]}</p>
        </div>
      )}
    </>
  );
}

export default Tabular;
