import { PropsWithChildren } from 'react'
import styles from '../styles/Container.module.css'

export const Container = ({children}: PropsWithChildren) => <div className={styles.flex}>
 {children}
</div>