"use client"
import Product, { productDesc } from "./productcard"
import '../styles/page-filter.css'
import { useState, ChangeEvent } from "react"

export default function Filter() {

  const [items, setItems] = useState(productDesc);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredItems = productDesc.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setItems(filteredItems);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setSortBy(sortValue);

    const sortedItems = [...items].sort((a, b) => {
      if (sortValue === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortValue === 'price-l') {
        const priceA = parseFloat(a.price.replace(',', '')); 
        const priceB = parseFloat(b.price.replace(',', '')); 
        return priceA - priceB;
      }
      else if( sortValue === 'price-h') {
        const priceA = parseFloat(a.price.replace(',', '')); 
        const priceB = parseFloat(b.price.replace(',', '')); 
        return priceB - priceA;
      }
      return 0;
    });

    setItems(sortedItems);
  };

  
    return (
        <>
            <div>
                <div className="filter">
                    <div id="filter-container">
                        <div id="a">
                            <div id="a">
                                <img src="/images/filter.png" alt="" style={{width:'20px', height:'20px'}}/>
                                <div>Filter</div>
                            </div>
                            <div>|</div>
                            <br />
                            <div>Showing {16} Results</div>
                        </div>
                        <div id="a">
                            <div>Show</div>
                            <span>
                                <input type="text" id="b-style" value={searchTerm} onChange={handleSearchChange}/>
                            </span>
                            <div>Sort by </div>
                            <span id="b-style">
                                <select name="options" value={sortBy} onChange={handleSortChange}>
                                    <option value="name">Name</option>    
                                    <option value="price-l">Price - Low to High</option>    
                                    <option value="price-h">Price - High to Low</option>    
                                </select>
                            </span>
                        </div>
                    </div>
                </div>
                <div >
                  <Product products={items}/>
                  <Product products={items}/>
                </div>
            </div>
        </>
    )
}