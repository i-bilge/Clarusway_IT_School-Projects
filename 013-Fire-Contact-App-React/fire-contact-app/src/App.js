import './App.scss';
import React from 'react';
import Form from './components/form/Form';
import Table from './components/table/Table';
import "./utils/firebase"


function App() {
  return (
    <div className='App'>
      <Form />
      <Table />
    </div>
  )
}

export default App
