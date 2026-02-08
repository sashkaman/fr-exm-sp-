// import { createRoot } from "react-dom/client"
// import { useState } from "react"

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
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

// type UserProps = User & {
//     deleteUser: (id: number) => void
// }

// const User = (props: UserProps) => (
//     <li>
//         <button onClick={() => props.deleteUser(u.id)}>x</button>
//         User {props.name}: {props.age} y.o.
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

// const User = () => {
//     const [userName, setUserName] = useState<string>("")

//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 // ❗X
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }

// createRoot(document.getElementById("root")!).render(<User />)

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
//             <UserWallet wallet={xxx} />
//             <UserWallet wallet={yyy} />
//         </div>
//     )
// }

// createRoot(document.getElementById("root")!).render(<UserMoney />)

// import { createRoot } from "react-dom/client"

// const Son = (props: any) => {
//     return <div>I am son. My name is {props.name}</div>
// }

// const Father = (props: any) => {
//     return (
//         <div>
//             I am father. My name is {props.name}
//             <Son name={props.sonName} />
//         </div>
//     )
// }

// const Granny = (props: any) => {
//     return (
//         <div>
//             I am granny. My name is {props.name}
//             <Father name={props.fatherName} sonName={props.sonName} />
//         </div>
//     )
// }

// export const App = () => {
//     return (
//         <div>
//             <Granny XXX={"Бабуля"} YYY={"Батя"} ZZZ={"Сын"} />
//         </div>
//     )
// }

// createRoot(document.getElementById("root")!).render(<App />)

import ReactDOM from "react-dom/client";
import React from "react";

type PagePropsType = {
    age: number
    name: string
    avatarUrl: string
}

const Page: React.FC<PagePropsType> = (props) => {
    return <User a={xxx} n={yyy} />
}

type UserPropsType = {
    a: number
    n: string
}

export const User: React.FC<UserPropsType> = (props) => {
    return <div>name: {props.n}, age: {props.a}</div>
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Page age={40} name="Brendan" avatarUrl={"test"} />
);




