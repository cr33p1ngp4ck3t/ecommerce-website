"use client"
import Image from "next/image"
import '../styles/style.css'


type Product = {
    src: string
    name: string
    catg: string
    price: string
    originalPrice?: string
}


export const productDesc: Product[] = [
    {
        src: 'https://via.placeholder.com/285x301',
        name: 'Syltherine',
        catg: 'Stylish cafe chair',
        price: '2,500.000',
        originalPrice: '3,500.000',
    },
    {
        src: 'https://via.placeholder.com/285x301',
        name: 'Leviosa',
        catg: 'Stylish cafe chair',
        price: '2,500.000',
    },
    {
        src: 'https://via.placeholder.com/285x301',
        name: 'Lolito',
        catg: 'Luxury big sofa',
        price: '7,000.000',
        originalPrice: '14,000.000',
    },
    {
        src: 'https://via.placeholder.com/285x301',
        name: 'Respira',
        catg: 'Outdoor bar table and stool',
        price: '500.000',
    },
    {
        src: 'https://via.placeholder.com/285x301',
        name: 'Grifo',
        catg: 'Night lamp',
        price: '1,500.000',
    },
    {
        src: 'https://via.placeholder.com/285x301',
        name: 'Muggo',
        catg: 'Small mug',
        price: '150.000',
    },
    {
        src: 'https://via.placeholder.com/285x301',
        name: 'Pingky',
        catg: 'Cute bed set',
        price: '7,000.000',
        originalPrice: '14,000.000',
    },
    {
        src: 'https://via.placeholder.com/285x301',
        name: 'Poty',
        catg: 'Minimalist flower pot',
        price: '500.000',
    },
];


function ProductCard(params: Product) {

    return( 
        <>
            <div className="product-style">
                <div>
                    <Image
                        src={params.src}
                        alt="Image"
                        width={285}
                        height={301} 
                    />
                </div>
                <div id="product-desc">
                    <div id="product-name">{params.name}</div>
                    <div id="product-catg">{params.catg}</div>
                    <div id="product-price-tag">
                        <div id="product-price">Rp {params.price}</div>
                        {
                            params.originalPrice && (
                                <span id="product-ogprice">Rp {params.originalPrice}</span>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

type ProductProps = {
    products?: Product[]
    ref?: unknown
}

export default function Product({products = productDesc}:ProductProps) {
    
    return (
        <div id="productlist">
            { products.map(( products, index) => (
                <div key={index}>
                    <ProductCard
                        src={products.src}
                        name={products.name} 
                        catg={products.catg} 
                        price={products.price} 
                        originalPrice={products.originalPrice}
                    />
                </div>
            ))}   
        </div>
    )
}
