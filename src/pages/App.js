import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import styles from './App.module.scss';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>
        {/* header */}
        <header className={styles.header}>
          <div className={styles.box}>
            <Link to="/"><div className={styles.boxleft}>Haoyu Liu</div></Link>
            <div className={styles.boxright}>
              <Link to="/"><p className={location.pathname === "/" ? styles.selected : null}>HOME</p></Link>
              <Link to="/works"><p className={location.pathname === "/works" ? styles.selected : null} >PROJECTS</p></Link>
            </div>
          </div>
        </header>

        {/* content */}
        <section className={styles.content}>
          <Route path="/" exact component={HomePage} />
          <Route path="/works" exact component={ProjectPage} />
        </section>

        {/* footer */}
        <footer className={styles.footer}>
          <p>© <b>2020 Haoyu Liu</b></p>
          <p><i><strong>Passion</strong> Is Matter</i></p>
        </footer>
      </div>
    );
  }

}

export default withRouter(App);
