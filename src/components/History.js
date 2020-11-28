import React, { useEffect, useState } from "react";

import axios from 'axios';
import HistoryResults from "./HistoryResults";
import HistoryDetail from "./HistoryDetail";

export default function History (props) {
  const [history, setHistory] = useState([]);
  const [historyDetails, setHistoryDetails] = useState(false);

  useEffect (() =>{
    axios.get("/api/plans/history")
    .then(function(response){
      setHistory([...response.data])
    });
  }, [])

  const showHistoryDetails = () => {
    console.log("show history details", history, historyDetails)
    const hist = history.find(elem => elem.id === historyDetails)
    return (
        <HistoryDetail key={props.key} {...hist} toggleDisplay={() => setHistoryDetails(false)}/>
    )
  }
 

  return (
    <div>
      {historyDetails ? showHistoryDetails() :
      <div>
      <h1>Your History</h1>
      <body class='container'>
      <div>
      <HistoryResults history={history} onClick={(id) => setHistoryDetails(id)}/>
      </div>
      </body>
      </div>}
    </div>
  );
}