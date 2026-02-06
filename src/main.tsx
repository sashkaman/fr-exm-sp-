// EXAMS SP1
// start file form 12/01/26 last time
// 05/02/26


// sp1-1
// import { createRoot } from "react-dom/client"

// type UserWallet = {
//     title: string
//     amount: number
// }

// type UserWalletProps = {
//     wallet: UserWallet
// }

// export const UserWallet = ({ wallet }: UserWalletProps) => {
//     return (
//         <p>
//             title: {wallet.title}, amount: {wallet.amount}
//         </p>
//     )
// }

// export const UserMoney = () => {
//     const wallets = [
//         { title: "bitcoin", amount: 1 },
//         { title: "$", amount: 100 },
//     ]

//     return (
//         <div>
//             <UserWallet wallet={wallets[0]} />
//             <UserWallet wallet={wallets[1]} />
//         </div>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UserMoney />)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// sp1-2 useState onClick map filter

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//     id: number
//     name: string
//     age: number
// }
// const UsersList = () => {
//     const state = [
//         { id: 1, name: "Bob", age: 34 },
//         { id: 2, name: "Alex", age: 25 },
//         { id: 3, name: "Ann", age: 30 },
//         { id: 4, name: "John", age: 23 },
//     ]
//     const users = [
//         { id: 1, userName: "Bob", age: 34 },
//         { id: 2, userName: "Alex", age: 25 },
//         { id: 3, userName: "Ann", age: 30 },
//         { id: 4, userName: "John", age: 23 },
//     ]

//     const [usersList, setUsersList] = useState<User[]>([])
//     return (
//         <>
//             <h2>User list:</h2>
//             <p>Тут будет список пользователей</p>
//         </>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(xxx)

//     return (
//         <div>
//             <h4>User list:</h4>
//             <ul>{usersList}</ul>
//         </div>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//     const results = useState<string[]>(["Bob", "Alex", "Ann"])
//     const users = results[0]
//     const setUsers = results[1]

//     return <p>Тут будет список пользователей</p>
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { createRoot } from "react-dom/client"
// import { useState } from "react"

// function UsersList() {
//     const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])

//     return (
//         <div>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map((user) => (
//                     <li>{user}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//     const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>

//     console.log(typeof (getUser))
//     return (
//         <div>
//             <h4>User list:</h4>
//             <ul>{users.map(getUser)}</ul>
//         </div>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     return <p>Тут будет список пользователей!</p>
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//     const results = useState<string[]>(["Bob", "Alex", "Ann"])

//     const users = results[0]
//     const setUsers = results[1]

//     return <p>Тут будет список пользователей</p>
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { createRoot } from "react-dom/client"
// import { useState } from "react"
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     console.log(typeof (setUsers))
//     return <p>Тут будет список пользователей</p>
// }
// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//     const results = useState<string[]>(["Bob", "Alex", "Ann"])
//     const users = results[0]
//     const setUsers = results[1]

//     return <p>Тут будет список пользователей</p>
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { createRoot } from "react-dom/client"
// import { useState } from "react"

// function UsersList() {
//     const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])

//     return (
//         <div>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map((user) => (
//                     <li>{user}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { createRoot } from "react-dom/client"
// import { useState } from "react"

// function UsersList() {
//     const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
//     return <p>Тут будет список пользователей</p>
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//     const results = useState<string[]>(["Bob", "Alex", "Ann"])
//     const users = results[0]
//     const setUsers = results[1]

//     return <p>Тут будет список пользователей</p>
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//     id: number
//     name: string
//     age: number
// }

// const UsersList = () => {
//     const state = [
//         { id: 1, name: "Bob", age: 34 },
//         { id: 2, name: "Alex", age: 25 },
//         { id: 3, name: "Ann", age: 30 },
//         { id: 4, name: "John", age: 23 },
//     ]

//     const users = [
//         { id: 1, userName: "Bob", age: 34 },
//         { id: 2, userName: "Alex", age: 25 },
//         { id: 3, userName: "Ann", age: 30 },
//         { id: 4, userName: "John", age: 23 },
//     ]

//     const [usersList, setUsersList] = useState<User[]>(state)

//     return (
//         <>
//             <h2>User list:</h2>
//             <p>Тут будет список пользователей</p>
//         </>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//     const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(getUser)

//     return (
//         <div>
//             <h4>User list:</h4>
//             <ul>{usersList}</ul>
//         </div>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//     const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>

//     return (
//         <div>
//             <h4>User list:</h4>
//             <ul>{users.map(getUser)}</ul>
//         </div>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// >>>>>>>>>>>>>>>>>>>>>>>>>>
// #3
// useState filter event
// import { MouseEvent } from "react"
// import { createRoot } from "react-dom/client"

// const Button = () => {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         console.log(typeof e === 'object')
//     }

//     console.log(typeof (onClickHandler))
//     return <button onClick={onClickHandler}>Click</button>
// }

// createRoot(document.getElementById("root")!).render(<Button />)

// import { createRoot } from "react-dom/client"

// function Button() {
//     return <button onClick={() => { alert() }}>Click</button>
// }

// createRoot(document.getElementById("root")!).render(<Button />)

// export const user = {}
// export const body = user
// export const student = {}

// if (body === user) {
//     console.log("Yo!!!")
// }

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//     id: number
//     name: string
//     age: number
// }

// const User = (props: User) => (
//     <li>
//         Student {props.name}: {props.age} y.o.
//     </li>
// )

// const UsersList = () => {
//     const data: User[] = [
//         { id: 1, name: "Bob", age: 34 },
//         { id: 2, name: "Alex", age: 29 },
//         { id: 3, name: "Ann", age: 25 },
//         { id: 4, name: "John", age: 36 },
//     ]

//     const [users] = useState<User[]>(data)

//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map((u) => (
//                     <User key={u.id} {...u} />
//                 ))}
//             </ul>
//         </main>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//     id: number
//     name: string
//     age: number
// }

// const UsersList = () => {
//     const data: User[] = [
//         { id: 1, name: "Bob", age: 34 },
//         { id: 2, name: "Alex", age: 29 },
//         { id: 3, name: "Ann", age: 25 },
//         { id: 4, name: "John", age: 36 },
//     ]
//     const [users] = useState<User[]>(data)

//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map((u) => {
//                     return (
//                         <li key={u.id}>
//                             Student {u.name}: {u.age} y.o.
//                         </li>
//                     )
//                 })}
//             </ul>
//         </main>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//     id: number
//     name: string
//     age: number
// }

// const UsersList = () => {
//     const data: User[] = [
//         { id: 1, name: "Bob", age: 24 },
//         { id: 2, name: "Alex", age: 28 },
//         { id: 3, name: "Ann", age: 23 },
//         { id: 4, name: "John", age: 30 },
//     ]

//     const [users] = useState<User[]>(data)

//     const olderThen25Users = users.filter((u) => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {olderThen25Users.map((u) => {
//                     return (
//                         <li key={u.id}>
//                             User {u.name}: {u.age} y.o.
//                         </li>
//                     )
//                 })}
//             </ul>
//         </main>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { MouseEvent, useState } from "react"
// import { createRoot } from "react-dom/client"

// const Button = () => {
//     const [tagName, setTagName] = useState<string>()

//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         setTagName(e.currentTarget.tagName)
//     }

//     return (
//         <>
//             <p>{tagName}</p>
//             <button onClick={onClickHandler}>
//                 <span>Click</span>
//             </button>
//         </>
//     )
// }

// createRoot(document.getElementById("root")!).render(<Button />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//     id: number
//     name: string
//     age: number
// }

// const UsersList = () => {
//     const data: User[] = [
//         { id: 1, name: "Bob", age: 25 },
//         { id: 2, name: "Alex", age: 28 },
//         { id: 3, name: "Ann", age: 23 },
//         { id: 4, name: "John", age: 30 },
//     ]

//     const [users] = useState<User[]>(data)

//     const getOlderThen25Users = (u: User) => u.age > 25
//     const olderThen25Users = users.filter(getOlderThen25Users)
//     console.log(getOlderThen25Users)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {olderThen25Users.map((u) => {
//                     return (
//                         <li key={u.id}>
//                             User {u.name}: {u.age} y.o.
//                         </li>
//                     )
//                 })}
//             </ul>
//         </main>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//     id: number
//     name: string
//     age: number
// }

// type UserProps = User & {
//     deleteUser: (id: number) => void
// }

// const User = ({ deleteUser, age, name, id }: UserProps) => {
//     return (
//         <li>
//             User {name}: {age} y.o.
//             <button onClick={() => deleteUser(id)}>x</button>
//         </li>
//     )
// }

// const UsersList = () => {
//     const data: User[] = [
//         { id: 1, name: "Bob", age: 25 },
//         { id: 2, name: "Alex", age: 28 },
//         { id: 3, name: "Ann", age: 23 },
//         { id: 4, name: "John", age: 30 },
//     ]

//     const [users, setUsers] = useState<User[]>(data)

//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter((u) => u.id !== userID)
//         setUsers(filteredUsers)
//     }

//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map((u) => (
//                     <User key={u.id} {...u} deleteUser={deleteUser} />
//                 ))}
//             </ul>
//         </main>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//     id: number
//     name: string
//     age: number
// }

// type UserProps = User & {
//     deleteUser: (id: number) => void
// }

// const User = ({ deleteUser, age, id, name }: UserProps) => (
//     <li>
//         <button onClick={() => deleteUser(id)}>x</button>
//         User {name}: {age} y.o.
//     </li>
// )

// const UsersList = () => {
//     const data: User[] = [
//         { id: 1, name: "Bob", age: 25 },
//         { id: 2, name: "Alex", age: 28 },
//         { id: 3, name: "Ann", age: 23 },
//         { id: 4, name: "John", age: 30 },
//     ]

//     const [users, setUsers] = useState<User[]>(data)

//     const deleteUser = (userID: number) => {
//         setUsers(users.filter((u) => u.id !== userID))
//     }

//     return (
//         <main>
//             <h4>Users list:</h4>
//             <ul>
//                 {users.map((u) => (
//                     <User key={u.id} {...u} deleteUser={deleteUser} />
//                 ))}
//             </ul>
//         </main>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//     id: number
//     name: string
//     age: number
// }

// const UsersList = () => {
//     const data: User[] = [
//         { id: 1, name: "Bob", age: 25 },
//         { id: 2, name: "Alex", age: 28 },
//         { id: 3, name: "Ann", age: 23 },
//         { id: 4, name: "John", age: 30 },
//     ]
//     const [users] = useState<User[]>(data)

//     const olderThen25Users = users.filter((u: User) => u.age > 25)

//     const isArray = Array.isArray(olderThen25Users)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {olderThen25Users.map((u) => {
//                     return (
//                         <li key={u.id}>
//                             User {u.name}: {u.age} y.o.
//                         </li>
//                     )
//                 })}
//             </ul>
//         </main>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)



















