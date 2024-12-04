/* eslint-disable @next/next/no-img-element */
import "./styles/style.css"
import Itemtype from "./components/itemtype"
import Products from "./components/products"
import Insp from "./components/inspirations"
import Hero from "./components/hero"

export default function Home() {
    return (
        <>
            <Hero />
            <Itemtype />
            <Products />
            <Insp />
        </>
    )
}