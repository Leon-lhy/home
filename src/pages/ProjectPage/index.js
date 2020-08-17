
import React, { Component } from 'react'
import WorkLists from '../../components/WorkLists'
import works_data from '../../assets/data/works.json'
import styles from './project.module.scss';

export default() => {
    return (
        <div>
            <section className={ styles.work }>
                <div className={ styles.title }>
                    <h3>SELECTED PROJECTS</h3>
                </div>
                <WorkLists dataSource = { works_data.data }/>
            </section>
        </div>
    );
}