import { createContext, ReactElement, CSSProperties } from 'react';
import { useProduct } from './../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { onChangesArgs, Product, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider }= ProductContext;

export interface Props{
  product:Product;
  children?:ReactElement | ReactElement[];
  className?:string;
  style?: CSSProperties;
  onChange?: (args:onChangesArgs) => void;
  value?:number;
}

export const ProductCard = ({children,product,className, style, onChange, value }: Props ) => {
  const {increaseBy,counter} = useProduct({onChange,product,value});
 
  return (
    <Provider value={{counter,increaseBy,product}}>
    <div className = {`${styles.productCard} ${className}`}
    style={style}>
        {children}
       {/* <ProductImage img={product.img}/>
        <ProductTitle title={product.title}/>
        <ProductButtons counter={counter} increaseBy={increaseBy }/> */}
    </div>
     </Provider>
  )
}

