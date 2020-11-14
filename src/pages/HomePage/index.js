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
                <li>Full Stack Developer</li>
                <li>Gatech ECE Master</li>
            </ul>
            {/* <p>Last four years, I studied in Beijing University of Posts and Telecommunications. Learning through <strong>Data Structure</strong> I felt that algorithm was so amazing and from coding step by step using Java, I realized <strong>Objected Oriented Programming</strong> is a bridge that mapping real world into computer world. </p>    */}
            <p>2020 is a tough year. I have stayed home for nearly half of year beacuse of covid-19, sometimes I even don't know whether I could back to school before graduation. Such ending is so tough for my last four year in <pp>Beijing University of Posts and Telecommunications</pp></p>
            <p>But for me 2020 is also a lucky year. Due to covid-19, I had more time to explore my career interest. I began to really code something to think more deeper and to explore some fantastic projects step by step. Also, after reviewing <strong>Data Structure</strong> etc... I think I found my interest.</p>
            <p>Currently, pursuing a Masters of <strong>Electronic and Computer Engineering</strong> at @ <strong><pp>Georgia Tech</pp></strong>. SDE Developer Internship in Tencent Music. I love sharing everything 😊 Please feel free to contact me at <divlink>hliu687@gatech.edu</divlink>.</p>

        </section>

        
    </div>
    )
};