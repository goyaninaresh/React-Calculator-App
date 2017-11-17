import React from "react";
import ReactDom from "react-dom";

class ReactCalculator extends React.Component {
  constructor() {
    super();
    this.CalculateAmount = this.CalculateAmount.bind(this);
    this.state = {
      value1: "",
      value2: "",
      operation: "+",
      result: ""
    }
  }

  CalculateAmount(evt){
    evt.preventDefault();
    var value1 = parseFloat(this._value1.value);
    var value2 = parseFloat(this._value2.value);
    var operation = this._operation.value;
    var result = '';
    if (operation=='+'){
      result = value1 + value2;
    }
    if (operation == '-') {
      result = value1 - value2;
    }
    if (operation == '*') {
      result = value1 * value2;
    }
    if (operation == '/') {
      result = value1 / value2;
    }
    this.setState({
      result,
      value1: "",
      value2: "",
    })
  }

  render(){
    return(
      <div className="naresh_calculator">
          <form onSubmit={this.CalculateAmount}>
            <table>
              <tr>
                <td colspan="2">Simple Calculator</td>
              </tr>
              <tr>
                <td>Value 1</td>
                <td><input type="text" ref={ (input)=>this._value1=input } name="value1"/></td>
              </tr>
              <tr>
                <td>Value 2</td>
                <td><input type="text" ref={(input) => this._value2 = input} name="value2" /></td>
              </tr>
              <tr>
                <td>Operation</td>
                <td>
                <select ref={(input) => this._operation = input}>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>The Output Is : </td>
                <td>{this.state.result}</td>
              </tr>
              <tr>
                <td colspan="2"><input type="submit" value="Calculate"/></td>
              </tr>
            </table>
          </form>
      </div>
    )  
  }
}

ReactDom.render(<ReactCalculator />, document.getElementById("root"));
