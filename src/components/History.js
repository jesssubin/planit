import React, { useEffect, useState } from "react";

import axios from 'axios';
import HistoryResults from "./HistoryResults";

export default function History (props) {
  const [history, setHistory] = useState([]);

  useEffect (() =>{
    axios.get("/api/plans/history")
    .then(function(response){
      setHistory([...response.data])
    });
  }, [])
 

  return (
    <div>
      <h1>Your History</h1>
      <body class='container'>
      <div>
      <HistoryResults history={history} />
      </div>
      </body>
    </div>
  );
}