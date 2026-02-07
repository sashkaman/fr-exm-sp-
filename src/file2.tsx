sp1 - 2 useState onClick map filter

import { useState } from "react"
import { createRoot } from "react-dom/client"

type User = {
    id: number
    name: string
    age: number
}
const UsersList = () => {
    const state = [
        { id: 1, name: "Bob", age: 34 },
        { id: 2, name: "Alex", age: 25 },
        { id: 3, name: "Ann", age: 30 },
        { id: 4, name: "John", age: 23 },
    ]
    const users = [
        { id: 1, userName: "Bob", age: 34 },
        { id: 2, userName: "Alex", age: 25 },
        { id: 3, userName: "Ann", age: 30 },
        { id: 4, userName: "John", age: 23 },
    ]

    const [usersList, setUsersList] = useState<User[]>([])
    return (
        <>
            <h2>User list:</h2>
            <p>Тут будет список пользователей</p>
        </>
    )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>
    const usersList = users.map(xxx)

    return (
        <div>
            <h4>User list:</h4>
            <ul>{usersList}</ul>
        </div>
    )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
    const results = useState<string[]>(["Bob", "Alex", "Ann"])
    const users = results[0]
    const setUsers = results[1]

    return <p>Тут будет список пользователей</p>
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { createRoot } from "react-dom/client"
import { useState } from "react"

function UsersList() {
    const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])

    return (
        <div>
            <h4>User list:</h4>
            <ul>
                {users.map((user) => (
                    <li>{user}</li>
                ))}
            </ul>
        </div>
    )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
    const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>

    console.log(typeof (getUser))
    return (
        <div>
            <h4>User list:</h4>
            <ul>{users.map(getUser)}</ul>
        </div>
    )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    return <p>Тут будет список пользователей!</p>
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
    const results = useState<string[]>(["Bob", "Alex", "Ann"])

    const users = results[0]
    const setUsers = results[1]

    return <p>Тут будет список пользователей</p>
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { createRoot } from "react-dom/client"
import { useState } from "react"
function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    console.log(typeof (setUsers))
    return <p>Тут будет список пользователей</p>
}
createRoot(document.getElementById("root")!).render(<UsersList />)

import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
    const results = useState<string[]>(["Bob", "Alex", "Ann"])
    const users = results[0]
    const setUsers = results[1]

    return <p>Тут будет список пользователей</p>
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { createRoot } from "react-dom/client"
import { useState } from "react"

function UsersList() {
    const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])

    return (
        <div>
            <h4>User list:</h4>
            <ul>
                {users.map((user) => (
                    <li>{user}</li>
                ))}
            </ul>
        </div>
    )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { createRoot } from "react-dom/client"
import { useState } from "react"

function UsersList() {
    const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
    return <p>Тут будет список пользователей</p>
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
    const results = useState<string[]>(["Bob", "Alex", "Ann"])
    const users = results[0]
    const setUsers = results[1]

    return <p>Тут будет список пользователей</p>
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { useState } from "react"
import { createRoot } from "react-dom/client"

type User = {
    id: number
    name: string
    age: number
}

const UsersList = () => {
    const state = [
        { id: 1, name: "Bob", age: 34 },
        { id: 2, name: "Alex", age: 25 },
        { id: 3, name: "Ann", age: 30 },
        { id: 4, name: "John", age: 23 },
    ]

    const users = [
        { id: 1, userName: "Bob", age: 34 },
        { id: 2, userName: "Alex", age: 25 },
        { id: 3, userName: "Ann", age: 30 },
        { id: 4, userName: "John", age: 23 },
    ]

    const [usersList, setUsersList] = useState<User[]>(state)

    return (
        <>
            <h2>User list:</h2>
            <p>Тут будет список пользователей</p>
        </>
    )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
    const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>
    const usersList = users.map(getUser)

    return (
        <div>
            <h4>User list:</h4>
            <ul>{usersList}</ul>
        </div>
    )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
    const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>

    return (
        <div>
            <h4>User list:</h4>
            <ul>{users.map(getUser)}</ul>
        </div>
    )
}

createRoot(document.getElementById("root")!).render(<UsersList />)