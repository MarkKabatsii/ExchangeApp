import React from "react";
import './Calc.css'

class Calc extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {rate: props.rate}
    };


    clickCalc = (event) => {
        event.preventDefault();
        let elements = event.target.elements;
        let countCurrent = elements['countCurrent'].value;
        let currentCurrent = elements['currentCurrent'].value;
        this.setState({
            result: (countCurrent / this.state.rate[currentCurrent]).toFixed(2)
        });
    };

    render() {
        return(
            <div className="exchange">
                <div className="exchange-wrapper">
                    <form onSubmit={this.clickCalc} className="form-exchange d-flex justify-content-between align-items-center">
                        <div className="exchange-send">
                            <div className="exchange-title d-flex align-items-center">
                                <h3>exchange</h3>
                                <select name="currentCurrent" className="current-title">
                                    {Object.keys(this.state.rate).map((elem) =>
                                        (
                                            <option key={elem} value={elem}>{elem}</option>
                                        )
                                    )}
                                </select>
                            </div>
                            <input
                                type="text"
                                name="countCurrent"
                                className="exchange-input"
                            />
                        </div>
                        <div className="change-button"><span className="material-icons">sync</span></div>
                        <div className="receive">
                            <div className="exchange-title d-flex align-items-center">
                                <h3>receive</h3>
                                <h2 className="current-title receive" >EUR</h2>
                            </div>
                            <ul className="exchange-list">
                                <li className="exchange-input">{this.state.result}</li>
                            </ul>
                        </div>
                        <button className="btn btn-exchange d-flex justify-content-center align-items-center" type="submit" defaultValue="calc">exchange<span
                            className="material-icons">arrow_forward_ios</span></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Calc;