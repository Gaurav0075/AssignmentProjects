import React from 'react';
import './CSS/desktop.css';

export default class FetchApiData extends React.Component{
  state ={        //Initializing state variables
    loading: true,
    flight: []
  };

  constructor(props){
    super(props);
    this.handleYearClick = this.handleYearClick.bind(this);
  }

  
  async componentDidMount(){
    const url = "https://api.spaceXdata.com/v3/launches?limit=100";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({flight: data, loading: false})
  }

  handleYearClick(e) {
    e.preventDefault();
    var ele = document.getElementsByClassName("grid_box");
    for(var i=0;i<ele.length;i++){
      if(this.state.flight[i].launch_year== e.target.id){
        ele[i].style.display="block";
        console.log(this.state.flight[1].launch_success)
      }
      else{
        ele[i].style.display="none";
      }    
    }
  }
  handleDisplayContent(e) {
    e.preventDefault();
    var hdc = document.getElementsByClassName("grid_box");
    for(var i=0;i<hdc.length;i++){
      hdc[i].style.display="block";
    }
  }

  
  render(){
    if(this.state.loading){
      return <div>loading...</div>;
    }
    if(!this.state.flight.length){
      return <div>Didn't get the data</div>
    }


//**********************Display grid boxes********************************//

          // -----------using foreach loop-----------!

    // const flightJSX = [];
    // this.state.flight.forEach(flight => {
    //   flightJSX.push(
    //     <div className="grid_box" key={flight.flight_number}>
    //     <img src={flight.links.mission_patch_small} alt="img"/>
    //     <h4 className="text-primary">{flight.mission_name}</h4>
    //     <ul>
    //       <b>Mission IDs:</b>
    //       <li>{flight.flight_number}
    //       </li>
    //     </ul>
    //     <p><b>Launch Year:</b> {flight.launch_year}</p>
    //     <p><b>Successful Launch:</b> {flight.launch_success}</p>
    //     <p><b>Successful Landing:</b> {flight.launch_window}</p>
    //   </div>
    //   );
    // });


            //-----------using map()-----------!

    const flightJSX = this.state.flight.map(flight => (
      <div className={`grid_box ${flight.launch_year}`} id={flight.flight_number}>
        <img src={flight.links.mission_patch_small} alt="img"/>
        <h4 className="text-primary">{flight.mission_name}</h4>
        <ul>
          <b>Mission IDs:</b>
          <li>{flight.flight_number}
          </li>
        </ul>
        <p><b>Launch Year:</b> {flight.launch_year}</p>
        <p><b>Successful Launch:</b> {flight.launch_success ? "true":"false"}</p>
        <p><b>Successful Landing:</b> {flight.launch_window}</p>
      </div>
    ));

    


    return(
      <div style={{backgroundColor:"#f3f3f3"}}>
        <h1 className="heading">SpaceX Launch Programs</h1>
        <div className="container--layout">
          <aside>
            <h4>Filters</h4>
            <p>Launch Year</p>
            <div className="yearSidebar"> {/**********year section *************/}
              <div className="yearSidebar--box"><button id='2006' onClick={this.handleYearClick}>2006</button></div>
              <div className="yearSidebar--box"><button id='2007' onClick={this.handleYearClick}>2007</button></div>
              <div className="yearSidebar--box"><button id='2008' onClick={this.handleYearClick}>2008</button></div>
              <div className="yearSidebar--box"><button id='2009' onClick={this.handleYearClick}>2009</button></div>
              <div className="yearSidebar--box"><button id='2010' onClick={this.handleYearClick}>2010</button></div>
              <div className="yearSidebar--box"><button id='2011' onClick={this.handleYearClick}>2011</button></div>
              <div className="yearSidebar--box"><button id='2012' onClick={this.handleYearClick}>2012</button></div>
              <div className="yearSidebar--box"><button id='2013' onClick={this.handleYearClick}>2013</button></div>
              <div className="yearSidebar--box"><button id='2014' onClick={this.handleYearClick}>2014</button></div>
              <div className="yearSidebar--box"><button id='2015' onClick={this.handleYearClick}>2015</button></div>
              <div className="yearSidebar--box"><button id='2016' onClick={this.handleYearClick}>2016</button></div>
              <div className="yearSidebar--box"><button id='2017' onClick={this.handleYearClick}>2017</button></div>
              <div className="yearSidebar--box"><button id='2018' onClick={this.handleYearClick}>2018</button></div>
              <div className="yearSidebar--box"><button id='2019' onClick={this.handleYearClick}>2019</button></div>
              <div className="yearSidebar--box"><button id='2020' onClick={this.handleYearClick}>2020</button></div>
              <div className="yearSidebar--box"><button id='' onClick={this.handleDisplayContent}>All</button></div>
            </div>
            <p>Successful Launch</p>
            <div className="yearSidebar">
              <div className="yearSidebar--box"><button value="true" >True</button></div>
              <div className="yearSidebar--box"><button value="false">False</button></div>
            </div>
            <p>Successful Landing</p>
            <div className="yearSidebar">
            <div className="yearSidebar--box"><button>True</button></div>
            <div className="yearSidebar--box"><button>False</button></div>
            </div>
          </aside>
          <div className="grid_box--wrapper">{flightJSX}</div> {/**********Grid-box section *************/} 
        </div>
      </div>
    );
  }
}
