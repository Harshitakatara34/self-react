

import styles from"./Greetings.module.css"
function Greetings(){
    // styles returns an object and also the unique classNamennn
    console.log(styles)
    return( 
      <>
      <h1>oguygju</h1>
      
      <h3 className={styles.App}>fut</h3>
     <h4 className={styles.App}>hjfgcyj</h4>
      </>
    );
  }
  // By using className=styles.App we  apply the greetings.css only on which having the className=styles.app
//   / the all data will print in red colour because of the greeting.css in that we have given the red color and in last it will compile so that's why here both classname are overridding
  //greeting.css overrides the first one that is app.css

  
  export default Greetings;