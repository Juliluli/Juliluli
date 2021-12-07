import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItemDetail } from '../../helpers/getItemDetail';
import styles from "../NavBar/NavBar.module.css"

function ItemDetailContainer() {
// Implementar mock invocando a getItem() y utilizando el resolver then
    const [detalles, setDetalles]=useState([])
    const [loader, setLoader]=useState(true)
     
useEffect(() => {
    getItemDetail
        .then(resp => setDetalles(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoader(false)) 
}, [])

    return (
        <div>
            {/* JSX que devuelva un ItemDetail (punto 2)  */}
            {loader ? <h2>Cargando...</h2>: <div className={styles.divDetail}><h1>Detalles</h1><ItemDetail items={detalles}/></div>}
        </div>
    )
}
export default ItemDetailContainer
