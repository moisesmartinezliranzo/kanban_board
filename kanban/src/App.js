import React from 'react';
import './App.css';
import cardList from './data/tasks.json'
import KanbanBoard from './KanbanBoard'

function App() {
  return (
    <KanbanBoard cards={cardList} />
  );
}

export default App;
