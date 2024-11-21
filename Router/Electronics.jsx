import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Electronics() {
    const [state, setState] = useState([]);
    const [query, setQuery] = useState('');
    const [filterProduct, setFilterProduct] = useState([]);
    const [sortOption, setSortOption] = useState('default');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then((res) => res.json())
            .then((data) => {
                setState(data);
                setFilterProduct(data);
            });
    }, []);

    function sortByPrice(option) {
        setSortOption(option);
        let sorted = [...filterProduct];
        if (option === 'asc') {
            sorted = sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (option === 'desc') {
            sorted = sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }
        setFilterProduct(sorted);
    }

    function Search(e) {
        const searchQuery = e.target.value.toLowerCase();
        setQuery(searchQuery);

        const filteredData = state.filter((item) => item.title.toLowerCase().includes(searchQuery));
        setFilterProduct(filteredData);
    }

    const ProductDetails = {
        color: 'black',
        fontSize: '18px',
        textDecoration: 'none',
    };

    return (
        <div>
            <h1>Electronics</h1>
            <input
                type="text"
                value={query}
                onChange={Search}
                placeholder="Search By Name..."
            />
            &nbsp;&nbsp;&nbsp;
            <select onChange={(e) => sortByPrice(e.target.value)} value={sortOption}>
                <option value="default">Sort by price</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>

            <ul>
                {filterProduct.map((el, i) => (
                    <li key={i} style={{listStyle:'none'}}>
                        <Link to={`/ProductDetails/${el.id}`} style={ProductDetails}>
                            {el.title}
                        </Link>
                        <br />
                        <h4>Price: ${el.price}</h4>
                        <br /><br />
                    </li>
                ))}
            </ul>
        </div>
    );
}
