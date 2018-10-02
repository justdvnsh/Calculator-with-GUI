class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      currentValue: null,
      display: '0',
      operandPending: false,
      operator: null
    };
  }

  handleDigits(digit) {
    if (this.state.operandPending) {
      this.setState({
        display: String(digit),
        operandPending: false
      });
    } else {
      this.setState({
        display: this.state.display === '0' ? 
String(digit) : this.state.display + digit
      });
    }
  }

  handleDot() {
    const display = this.state.display;
    if (this.state.operandPending) {
      this.setState({
        display: '.',
        operandPending: false
      });
    } else if (display.indexOf('.') === -1) {
      this.setState({
        display: this.state.display + '.',
        operandPending: false
      });
    }
  }

  handleClearDisplay() {
    this.setState({
      currentValue: null,
      display: '0',
      operandPending: false,
      operator: null
    });
  }

  handleSign() {
    this.setState({
      display: this.state.display.charAt(0) === 
'-' ? this.state.display.substr(1) : '-' + 
this.state.display
    });
  }


  handleOperation(nextOperator) {
    const display = this.state.display;
    const operator = this.state.operator;
    const value = this.state.currentValue;
    const input = parseFloat(display);

    const operations = {
      '/': (prevValue, nextValue) => prevValue / 
nextValue,
      '*': (prevValue, nextValue) => prevValue * 
nextValue,
      '+': (prevValue, nextValue) => prevValue + 
nextValue,
      '-': (prevValue, nextValue) => prevValue - 
nextValue,
      '=': (prevValue, nextValue) => nextValue
    }
    
    if (value === null) {
      this.setState({
        currentValue: input
      });
      console.log(input);
    } else if (operator) {
      const currentValue = value || 0;
      const result = 
operations[operator](currentValue, input);

      this.setState({
        currentValue: result,
        display: String(result)
      });
    }

    this.setState({
      operandPending: true,
      operator: nextOperator
    })
  }

  render() {
    return (
        <div className="card" id="main-card">
          <center><h1>Calculator</h1></center>
          <div className="card-body">
            <div className="card" 
id="screen-parent"><div className="card-body" 
id="screen"><p>{parseFloat(this.state.display).toLocaleString()}</p></div></div>
            <br/><hr/>
            {/* First Row of numbers */}
             
            <div className="row">
              <div className="col-md-6"><a 
href="#" className="btn btn-block btn-danger" 
onClick={() => this.handleClearDisplay()}>AC</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleOperation('/')}>÷</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleOperation('*')}>×</a>
              </div>
            </div>  
            <hr/>
            {/* 2nd Row */}

            <div className="row">
              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleDigits(7)}>7</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleDigits(8)}>8</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleDigits(9)}>9</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleOperation('-')}>-</a>
              </div>
            </div> 
            <hr/>
            {/* 3rd Row */}

            <div className="row">
              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleDigits(4)}>4</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleDigits(5)}>5</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleDigits(6)}>6</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleOperation('+')}>+</a>
              </div>
            </div> 
             <hr/>
            {/* 4th Row */}
            

            <div className="row">
              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleDigits(3)}>3</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleDigits(2)}>2</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleDigits(1)}>1</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleSign()}>&plusmn;</a>
              </div>
            </div>
             <hr/>
            {/* 4th row */}
            
            <div className="row">
              <div className="col-md-6"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleDigits(0)}>0</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-secondary btn-block" 
onClick={() => this.handleDot()}>.</a>
              </div>

              <div className="col-md-3"><a 
href="#" className="btn btn-primary btn-block" 
onClick={() => this.handleOperation('=')}>=</a>
              </div>
            </div> 
          </div>
        </div>
    );
  }
}

ReactDOM.render(<Calculator />, 
document.getElementById('root'));
