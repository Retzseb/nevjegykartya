import { FC, PropsWithChildren, useState } from 'react'
import styles from '../styles/NameCard.module.css'

export type NameCardProps = PropsWithChildren<{
    img: string,
    name: string, 
    // desc: string,
    // skills: string
}>

export const NameCard : FC<NameCardProps>= ({img, name, children}) => {

    const [called, setCalled] = useState<boolean>(false);

    console.log("Komponens állapota _called: ", name, called);

    const handleClick = () => setCalled(!called)

    

    return <div className={`${styles.container} ${called && styles.called}`} onClick={handleClick}>
    <img src={img} />
    <span>{name}</span>
    {children}
    </div>
}

