
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,bugadded,bugRemoved,bugResolved} from './actions/index'
import Information from './Information';
function App() {
  const counter =useSelector(state=>state.counter)
  const login =useSelector(state=>state.logged)
  const bug=useSelector(state=>state.bug);
console.log(bug);

const dispatch=useDispatch();

  return (
    <div>
   <h1> Counter {counter} </h1>
   <button onClick={()=>dispatch(increment())}>+</button>

   <button onClick={()=>dispatch(decrement())}>-</button>
   <button onClick={()=>{dispatch(bugadded('bug'))
  }}>Add Bug</button>
   <button onClick={()=>dispatch(bugResolved(3))}>resolve Bug</button>
   <button onClick={()=>dispatch(bugRemoved(2))}>remove Bug</button>
   
   <h1>logged {login}</h1>
  <Information bug={bug}/>

    </div>
  );
}

export default App;
