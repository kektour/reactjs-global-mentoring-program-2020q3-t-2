import React from 'react';
import styles from './App.module.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true });
    }, 2000);
  }

  render() {
    return <div className={styles.root}>{this.state.visible ? <h1>Hello App</h1> : <h1>Loading...</h1>}</div>;
  }
}
