import React, { useEffect, useState } from "react";
import axios from 'axios';
import HistoryResults from "./HistoryResults";
import HistoryDetail from "./HistoryDetail";

import "../history.css"

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
    <div class="history-list">
      {historyDetails ? showHistoryDetails() :
      <div class="history-parent">
        <div class="history-void"> </div>
        <div class="history-result">
          <HistoryResults history={history} onClick={(id) => setHistoryDetails(id)}/>
        </div>
      </div>
      }
    </div>
  );
}