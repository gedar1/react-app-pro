import { createContext } from 'react';
import { useProduct } from './../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { ProductContextProps, Props } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider }= ProductContext;

export const ProductCard = ({children,product}:Props) => {
  const {increaseBy,counter} = useProduct();
 
  return (
    <Provider value={{counter,increaseBy,product}}>
    <div className = {styles.productCard}>
        {children}
       {/* <ProductImage img={product.img}/>
        <ProductTitle title={product.title}/>
        <ProductButtons counter={counter} increaseBy={increaseBy }/> */}
    </div>
     </Provider>
  )
}

