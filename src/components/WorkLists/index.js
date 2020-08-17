import React, {Component} from 'react';
import styles from './work.module.scss'
import GitHubIcon from '@material-ui/icons/GitHub';


export default ({dataSource}) => {
    return <div className={styles.worklist}> 
        <ul component="div">
            {
                dataSource && dataSource.map(i => 
                    <li key={i.id} >
                        <div className={styles.card}>
                            <div className={ styles.cover }>
                                
                            </div>
                            <div className={ styles.workbrief }>
                                <div className={styles.head_git}>
                                    <h4 dangerouslySetInnerHTML={{__html: i.title}} />
                                    {i.link.length == 1 ? 
                                        <a  className={styles.git_link} href={i.link[0]} >
                                        <GitHubIcon className={styles.git} />
                                        </a> : null }
                                </div>

                                <div className={styles.role_time}>
                                    <p className={styles.role}  dangerouslySetInnerHTML={{__html: i.character}}></p>
                                    <p className={styles.time}>{i.time}</p>
                                </div>
                                {/* <p>{i.brief}</p> */}
                                <div>
                                    { i.works && i.works.map(t => 
                                     <div className={styles.works_list}>
                                        <div className={styles.works_dot}>{'</>'}</div>
                                        <p key={t.index} className={styles.works_text} key={t} dangerouslySetInnerHTML={{__html: t}}></p>
                                    </div>)}
                                </div>
                                <div className={styles.tags}>
                                    { i.tags && i.tags.map(t => <span key={t}>
                                        {t}
                                    </span>)}
                                </div>
                            </div>
                        </div>
                    </li>
                )
            }
        </ul>
    </div>
}