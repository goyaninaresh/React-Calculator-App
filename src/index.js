import React from "react";
import ReactDom from "react-dom";

class ReactCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      value1: "",
      value2: "",
      operation: "+",
      result: ""
    }
  }

  render(){
    return(
      <div className="naresh_calculator">
          <form>
            <table>
              <tr>
                <td colspan="2">Simple Calculator</td>
              </tr>
              <tr>
                <td>Value 1</td>
                <td><input type="text" name="value1"/></td>
              </tr>
              <tr>
                <td>Value 2</td>
                <td><input type="text" name="value2" /></td>
              </tr>
              <tr>
                <td>Operation</td>
                <td>
                  <select>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                  </select>
                </td>
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
