import React from "react";
import './BurgerMenu.css'

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
    };

    this.switchState = () => {
      this.setState((prevState) => {
        return { isShown: !prevState.isShown };
      });
    };
  }
  render() {
    let status = this.state.isShown === true ? "menu-shown" : "menu-hidden";
    return (
      <div className='container'>
        <div onClick={this.switchState}>On/Off</div>
        <div className={status}>Text</div>
      </div>
    );
  }
}

export default BurgerMenu;
