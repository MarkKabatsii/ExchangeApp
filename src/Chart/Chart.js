import React from "react";
import {Line} from "react-chartjs-2";
import axios from "axios"

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.currency = ['GBP', 'USD', 'CAD', 'ILS'];
        this.state = {
            rateData: {}
        }
    }

    componentDidMount() {
        this.getChartData();
    }

    getChartData = () => {
        axios
            .get('https://api.exchangeratesapi.io/history?start_at=2020-05-01&end_at=2020-07-17&symbols=GBP,USD,CAD,ILS')
            .then(response => response.data)
            .then(data => {
                const db = data.rates;
                const chart = [];
                for (let i = 0; i < this.currency.length; i++) {
                    chart[this.currency[i]] = {
                        label: [],
                        data: []
                    }
                    for (let item in db) {
                        chart[this.currency[i]]['label'].push(item);
                    }
                    chart[this.currency[i]]['label'].sort();
                    for (let key in chart[this.currency[i]]['label']) {
                        chart[this.currency[i]]['data'].push(db[chart[this.currency[i]]['label'][key]][this.currency[i]])
                    }
                }
                const rate = []
                for (let char in chart) {
                    console.log();
                    const key = {
                        labels: chart[char]['label'],
                        datasets: [
                            {
                                label: char,
                                data: chart[char]['data'],
                                backgroundColor: ["rgba(15, 76, 129, 0.8)"],
                                borderWidth: 4
                            }
                        ]
                    }
                    rate.push(key)
                }
                this.setState({
                    rateData: rate
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return (
            <div className="chart">
                <div className="flex-container-chart">
                    {Object.keys(this.state.rateData).map((elem) =>
                        (
                            <div key={elem}>
                                <div style={{display: "inline-block", position: "relative", width: 470, height: 300}}>
                                    {/*<div style={{width: 500, height: 500}}>*/}
                                    <Line
                                        options={{
                                            responsive: true,
                                        }}
                                        data={this.state.rateData[elem]}
                                    />
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    }
}

export default Chart;
