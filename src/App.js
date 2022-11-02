import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import styled from "styled-components";
import { addToDos, deleteToDos, doneToDos, cancleToDos } from "./redux/modules/counter";
import './App.css';

function App() {
  const [titleBar, setTitleBar] = useState('')

  const [contextBar, setContextBar] = useState('')

  const globaltoDos = useSelector(
    (state) => state.counter
  )

  const dispatch = useDispatch()

  const titleBarHandler = (event) => {
    const { value } = event.target
    setTitleBar(value)
  }

  const contextBarHandler = (event) => {
    const { value } = event.target
    setContextBar(value)
  }

  const addHandler = () => {
    if (titleBar.trim() == '' || contextBar.trim() == '') {
      alert('Please input the title and the context!')
    } else {
      dispatch(addToDos({
        id: globaltoDos.length + 1,
        isDone: false,
        isDelete: false,
        title: titleBar,
        context: contextBar
      }))
      setTitleBar('')
      setContextBar('')
    }
  }

  const deleteHandler = (x) => {
    dispatch(deleteToDos(x))
  }

  const doneHandler = (x) => {
    dispatch(doneToDos(x))
  }

  const cancelHandler = (x) => {
    dispatch(cancleToDos(x))
  }

  return (
    <div>
      <div className='head'>
        <div className='very-top'>My To Do List<span className='right'>React</span></div>

        <div className='top'>
          <label className='label-text'>Title:</label>
          <input className='input-bar' type='text' onChange={titleBarHandler} value={titleBar}></input>
          <label className='label-text'>Context:</label>
          <input className='input-bar' type='text' onChange={contextBarHandler} value={contextBar}></input>
          <span className='right'>
            <button className='add-button' onClick={addHandler}>Add</button>
          </span>
        </div>
      </div>

      <div className='body'>
        <div>
          <h2>Working..🔥</h2>
          <div className='horizontal-scrollable'>
            <div className="row">
              {globaltoDos.map((toDo) => {
                if (toDo.isDelete === false && toDo.isDone === false) {
                  return (
                    <div className='col-xs-4' key={toDo.id}>
                      <h2 className='title'>{toDo.title}</h2>
                      <p className='context'>{toDo.context}</p>
                      <p>
                        <button className='red-button' onClick={() => deleteHandler(toDo.id)}>Delete</button>
                        <button className='green-button' onClick={() => doneHandler(toDo.id)}>Done</button>
                      </p>
                    </div>
                  )
                } return null
              })}
            </div>
          </div>
        </div>
        <div>
          <h2>Done..!🎉</h2>
          <div className='horizontal-scrollable'>
            <div className="row">
              {globaltoDos.map((toDo) => {
                if (toDo.isDelete === false && toDo.isDone === true) {
                  return (
                    <div className='col-xs-4' key={toDo.id}>
                      <h2 className='title'>{toDo.title}</h2>
                      <p className='context'>{toDo.context}</p>
                      <p>
                        <button className='red-button' onClick={() => deleteHandler(toDo.id)}>Delete</button>
                        <button className='green-button' onClick={() => cancelHandler(toDo.id)}>Cancel</button>
                      </p>
                    </div>
                  )
                } return null
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;