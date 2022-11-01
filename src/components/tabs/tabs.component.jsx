import React from 'react';
import TabItem from '../tab-item/tab-item.component';
import styles from './tabs.styles.module.css';


const Tabs = ({state}) => {
  return <div className={styles.tab_items}>{ state.dialogs.map(i => <TabItem key={i.id} id={i.name.toLowerCase()} name={i.name} />)} </div>
}

export default Tabs;
