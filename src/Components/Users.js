import { getUsers } from "../Helpers/Api"
import {useEffect, useState} from 'react'
import { UserContext } from "./User"
import { useContext } from "react"

const Users = () => {
    const [users, setUsers] = useState([])

    const {currentUser, setCurrentUser} = useContext(UserContext)

    const [currentSelectedUser, setCurrentSelectedUser] = useState({"username":"tickle122","name":"Tom Tickle","avatar_url":"https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"})

    useEffect(() => {
        getUsers().then(({data}) => {
            setUsers(data.users)
        })
    }, [])

    return (
        <div className="users-page">
            <div className="current-user">
                <h2 className="current-user-username">Current User:</h2>
                <h2 className="current-user-username">{currentUser.username}</h2>
                <img className="current-user-avatar" src={currentUser.avatar_url} alt={currentUser.username}></img>
            </div>
            <section className="users-list">
            <ul>
                {users.map((user) => {
                    return (
                        <li className="single-user" key={user.username}>
                        <h4>{user.username}</h4>
                        <br></br>
                        <img className="user-avatar" src={user.avatar_url} alt={user.username}></img>
                        <br></br>
                        <button onClick={() => setCurrentUser(user)}>Select this user</button>
                        </li>
                    )
                })}
                </ul>
            </section>
        </div>
    )
}

export default Users