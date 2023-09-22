import React, { useReducer, useEffect } from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index';
import { applyNumber, changeOperation, clearDisplay, saveMemory, getMemory, cleanMemory } from './actions/index'; 
import APPLY_NUMBER from './reducers/index';
import CHANGE_OPERATION from './reducers/index';
import CLEAR_DISPLAY from './reducers/index';
import SAVE_MEMORY from './reducers/index';
import GET_MEMORY from './reducers/index';
import CLEAR_MEMORY from './reducers/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(saveMemory(SAVE_MEMORY))}  />
              <CalcButton value={"MR"} onClick={() => dispatch(getMemory(GET_MEMORY))}  />
              <CalcButton value={"MC"} onClick={() => dispatch(cleanMemory(CLEAR_MEMORY))}  />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => dispatch(applyNumber(1, APPLY_NUMBER))} /> 
              <CalcButton value={2} onClick={() => dispatch(applyNumber(2, APPLY_NUMBER))} />
              <CalcButton value={3} onClick={() => dispatch(applyNumber(3, APPLY_NUMBER))} />
            </div>
            <div className="row">
              <CalcButton value={4} onClick={() => dispatch(applyNumber(4, APPLY_NUMBER))} />
              <CalcButton value={5} onClick={() => dispatch(applyNumber(5, APPLY_NUMBER))} />
              <CalcButton value={6} onClick={() => dispatch(applyNumber(6, APPLY_NUMBER))} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => dispatch(applyNumber(7, APPLY_NUMBER))} />
              <CalcButton value={8} onClick={() => dispatch(applyNumber(8, APPLY_NUMBER))} />
              <CalcButton value={9} onClick={() => dispatch(applyNumber(9, APPLY_NUMBER))} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => dispatch(changeOperation("+", CHANGE_OPERATION))} />
              <CalcButton value={"*"} onClick={() => dispatch(changeOperation("*", CHANGE_OPERATION))} />
              <CalcButton value={"-"} onClick={() => dispatch(changeOperation("-", CHANGE_OPERATION))} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay(CLEAR_DISPLAY))} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

/*/* dispatch(applyNumber(1, APPLY_NUMBER))} /> */