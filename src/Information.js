import {useSelector,useDispatch} from 'react-redux';
import {isLoggin} from './actions/index';
// import {bugadded,bugRemoved,bugResolved} from './actions/index'

function Information(props){
  const bug=useSelector(state=>state.bug);
console.log(bug)
console.log('this is props',props.bug);
 const listItems = bug.map((bug) =>
 <tr key={bug.id}>
  <td>{bug?.id}</td>
  <td>{bug?.description}</td>
  <td>{bug?.resolved?'resolved':'not resolved'}</td>
</tr>
 )

 

    const isLogged=useSelector(state=>state.logged)
    console.log(isLogged);
    const dispatch=useDispatch();
    return (
        <div>
<button onClick={()=>dispatch(isLoggin())}>Click me !</button>
{isLogged?
<h3>information i shouldn't see if i'm not logged in</h3>
:''}
<table>
<tbody>
<tr>
  <th>id</th>
  <th>description</th>
  <th>resolved</th>
</tr>
{listItems}
</tbody>
</table>

</div>
)
}
export default Information;