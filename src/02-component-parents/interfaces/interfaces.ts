import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as productCardTitleProps } from '../components/ProductTitle';
import { Props as productCardImageProps } from '../components/ProductImage';
import { Props as productCardButtonsProps } from '../components/ProductButtons';


  
  export interface Product{ 
    id: string;
    title: string;
    img?:string;
    className?:string;
  }
  
  export interface ProductContextProps{
    counter:number;
    increaseBy:(value: number) => void;
    product:Product;
  
  }

  export interface ProductCardHOCProps{
    ({ children, product}: ProductCardProps) : JSX.Element,
    Title: (Props: productCardTitleProps) => JSX.Element,
    Image: (Props: productCardImageProps) => JSX.Element,
    Buttons: (Props:productCardButtonsProps) => JSX.Element,
  
    
  }