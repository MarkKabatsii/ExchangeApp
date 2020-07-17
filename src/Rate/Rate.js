import React from 'react';
import './Rate.css';

import Calc from "../Calc/Calc";
import Chart from "../Chart/Chart";

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            currencyRate: [],

        }
        this.currency = ['GBP', 'USD', 'CAD', 'ILS'];
    }

    componentDidMount() {
        this.getRates();
    }

    getRates = () => {
        fetch('https://api.exchangeratesapi.io/latest?base=EUR')
            .then(data => {
                return data.json();
            })
            .then(data => {
                this.setState({
                    date: data.date
                });
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]];
                }
                this.setState({
                    currencyRate: result
                })
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Calc rate={this.state.currencyRate}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="rate">
                            <h3> Exchange rate on {this.state.date} </h3>
                            <div className="flex-container">
                                {Object.keys(this.state.currencyRate).map((elem) =>
                                    (
                                        <div className="block flex-item" key={elem}>
                                            <div className="currency-name">{elem}</div>
                                            <div className="currency-in">{this.state.currencyRate[elem].toFixed(2)}</div>
                                            <p className="currency-result">* Can be bought for 1 EUR</p>
                                        </div>
                                    )
                                )}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Chart/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Rate;
