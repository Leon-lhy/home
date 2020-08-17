import styles from './home.module.scss';
import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export default() => {
    return (
        <div className={styles.wrap}>
    
        {/* 个人简介 */}
        <section className={styles.brief}> 
            <img src={ require("../../assets/me.jpeg") }></img>
            <h2>👋 Hello! This is Haoyu</h2>
            
            <SocialIcon url="https://github.com/Leon-lhy" bgColor="black" style={{ height: 35, width: 35, marginBottom: "10px" }}/>
            
            
            
            <ul>
                <li>Software Engineer</li>
                <li>Full-stack Developer</li>
                <li>Gatech ECE Master</li>
            </ul>
            <p>Last four years, I studied in Beijing University of Posts and Telecommunications. Learning through <strong>Data Structure</strong> I felt that algorithm was so amazing and from coding step by step using Java, I realized <strong>Objected Oriented Programming</strong> is a bridge that mapping real world into computer world. </p>   
            <p>Currently, pursuing a Masters of <strong>Electronic and Computer Engineering</strong> at @ <strong><pp>Georgia Tech</pp></strong>. I'm currently seeking <strong>SDE Internship</strong> opportunities. I love sharing everything 😊 Please feel free to contact me at <divlink>hliu687@gatech.edu</divlink>.</p>

        </section>

        
    </div>
    )
};