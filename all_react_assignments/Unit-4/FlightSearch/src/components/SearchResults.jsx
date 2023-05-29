const SearchResults = (props) => {
  const {resData}=props
  // source,dest,price,departure,arrival,duration
      return (
          <table >
            {/* add columnsheadings */}
            <thead>
            <tr>
              <th>DEPARTURE</th>
              <th>DURATION</th>
              <th>ARRIVAL</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody data-testid="flight-results">
              {
          //  map through the results and display as rows
          resData.map((ele)=>{
           return(  
              <tr key= {Date.now()+Math.random()} >
                <td>{ele.departure}</td>
                <td>{ele.duration}</td>
                <td>{ele.arrival}</td>
                <td>{ele.price}</td>
             </tr>
             )
            })
          }
          </tbody>  
          </table>      
      );
   
  };
  export default SearchResults;
 
