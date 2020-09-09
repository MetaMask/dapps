import React, { Component } from 'react';
import Navbar from '../components/Navbar/';
import Dapp from '../components/Dapp/';
import allDapps from '../data/all-dapps';

export default class Category extends Component {

    state = {
        category: null
    };

    componentDidMount() {
        const category = allDapps.find((cat) => (
            cat.name.toLowerCase().replace(" ", "-") === this.props.match.params.category
        ));

        if (category) {
            this.setState({ category });
        }

    }


    render() {
        const { category } = this.state || {};
        if (!category) return null;
        return (
            <div>
                <Navbar title={category.name} />
                <div className={'category-wrapper'}>
                    {category.dapps.map((dapp, i) => (
                        <Dapp data={dapp} key={dapp.url} position={i} />
                    ))
                    }
                </div>
            </div>
        );
    }
}