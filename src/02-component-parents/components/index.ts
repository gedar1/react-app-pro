import{ProductCard as ProductCardHOC} from './ProductCard'

import {ProductButtons} from './ProductButtons'
import {ProductImage} from './ProductImage'
import {ProductTitle} from './ProductTitle'
import { ProductCardHOCProps } from '../interfaces/interfaces'

export * from './ProductButtons'
export * from './ProductImage'
export * from './ProductTitle'

export const ProductCard : ProductCardHOCProps = Object.assign(ProductCardHOC,{
    Title:ProductTitle,
    Image:ProductImage,
    Buttons:ProductButtons
})