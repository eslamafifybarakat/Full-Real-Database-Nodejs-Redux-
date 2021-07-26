import {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { getUserByName } from '../actions';
import UsersList from './users-list'
const Search = ()=>{
    const userRef = useRef();
    const dispatch = useDispatch()
    return (
      <div className="text-center">
        <input
          ref={userRef}
          type="text"
          placeholder="Search by Name"
          className="form-control rounded-pill w-75 m-auto mt-5 mb-33"
        />
        <button
          className="btn btn-info btn-outline-dark text-white fs-5 m-2 w-25"
          onClick={() => {
            console.log(userRef.current.value);
            dispatch(getUserByName(userRef.current.value));
            userRef.current.value = "";
          }}
        >
          Search
        </button>
        <UsersList />
      </div>
    );
}
export default Search;

// import React, { Component } from 'react'
// import {getUserByName} from '../actions/index'
// import { Dispatch} from "redux"
// export default class search extends Component {
//     //useState
//     constructor(props) {
//         super(props);
//         this.state = {
//             value:"",
//         }
//     //useEffect   
//     }
//     search = () => {
//         this.setState({value:e.target.value})
//         Dispatch(getUserByName(value))    
//     }
//     componentDidMount() {}
//     render() {
//         return (<>
//             <div>
//                     <input type="text" className="" value={this.state.value} placeholder="aya 7aga"/>
//                 <button className="btn btn-dark" onClick={this.search}>Search</button>
//             </div>
//         </>
//         )
//     }
// }
