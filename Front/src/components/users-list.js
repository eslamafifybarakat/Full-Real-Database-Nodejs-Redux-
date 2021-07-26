import {useSelector} from 'react-redux'
import { useDispatch} from "react-redux";
import { useEffect } from "react"
import { getAllUsers } from "../actions";
import User from './user'
const UsersList = ()=>{
    const dispatch = useDispatch();
    useEffect(() =>  {
        dispatch(getAllUsers());
    }, [dispatch])

    const users = useSelector((state) => state.users.list);
    if(users){
        if (users.length > 0) {
          return users.map((user) => <User info={user} key={user._id}/>);
        }

        return (
          <p className="search">
            This user is not available, plz search by another one....
          </p>
        );
    }

    return <p className="search m-auto my-5">
        plz put a user to start....
    </p>
}
export default UsersList;