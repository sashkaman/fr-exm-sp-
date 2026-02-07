sp1 - 1
import { createRoot } from "react-dom/client"

type UserWallet = {
    title: string
    amount: number
}

type UserWalletProps = {
    wallet: UserWallet
}

export const UserWallet = ({ wallet }: UserWalletProps) => {
    return (
        <p>
            title: {wallet.title}, amount: {wallet.amount}
        </p>
    )
}

export const UserMoney = () => {
    const wallets = [
        { title: "bitcoin", amount: 1 },
        { title: "$", amount: 100 },
    ]

    return (
        <div>
            <UserWallet wallet={wallets[0]} />
            <UserWallet wallet={wallets[1]} />
        </div>
    )
}

createRoot(document.getElementById("root")!).render(<UserMoney />)a