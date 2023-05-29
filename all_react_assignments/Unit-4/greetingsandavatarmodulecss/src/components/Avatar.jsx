function Avatar(props){
    const{src,name,rounded,hidename}=props;
    const styles={
        borderRadius:rounded?"50%":"16px",
        border:"1px solid red",
    }
       hidename?{name}:""
    console.log(props)
    return(
        <>
        <img src="data:image/jpeg;base64,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" style={styles}/>
           <h4>style={styles}</h4>
        </>
    )
}
export default Avatar;
//map returns something 
// foreach works as a foor loop