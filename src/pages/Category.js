import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/';
import Dapp from '../components/Dapp/';
import allDapps from '../data/all-dapps';

export default function Category(props) {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const category = allDapps.find((cat) => (
            cat.name.toLowerCase().replace(" ", "-") === props.match.params.category
        ));

        if (category) setCategory(category)
    }, [])

    if (!category) return null;
    return (
        <div>
            <Navbar title={category.name} />
            <div className={'category-wrapper'}>
                {category.dapps.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)).map((dapp, i) => (
                    <Dapp data={dapp} key={dapp.url} position={i} />
                ))
                }
            </div>
        </div>
    );
}