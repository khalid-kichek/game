import Link from 'next/link'
import styles from  '../../styles/khalid.module.css'
export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users') 
    
    
    const data = await res.json()
    return { 
        props : {ninjas:data}

    }
}
const Test = ({ninjas}) => {
    return (
        <div>
            <h1>All khalids</h1>
            {ninjas.map(ninja => (
                <Link key={ninja.id} href={'/core/' + ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
      );
}
 
export default Test;