import styles from './Home.module.css'
import TransactionForm from './TransactionForm'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                Transaction List
            </div>
            <div className={styles.sidebar}>
                <TransactionForm></TransactionForm>
            </div>
        </div>
    )
}