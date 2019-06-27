import React, { Component } from 'react'
import DappCategory from './DappCategory';
import allDapps from '../../data/all-dapps';
import './index.css';

export default class ExploreDapps extends Component {
    render(){
        return (
            <div className={'explore-dapps'}> 
                { 
                    allDapps.map( dapp => (
                        <DappCategory 
                            data={dapp}
                            key={dapp.name}
                        />
                    ))
                }
            </div>
        );
    }
}