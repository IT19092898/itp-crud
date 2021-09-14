import React, { Component } from 'react'

export default class MainHome extends Component {
    render() {
        return (
            <div className="containerHome">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
  
                  <a className="navbar-brand" href="/" style={{color:"green"}}>Logo</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input id="searchNav" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}/>
                    </form>
                    
                </div>
              </div>
            </nav>






            <button type="button"  id="homebtn" style={{marginTop:'20%'}}><i className="glyphicon glyphicon-check"></i><a href="/home" style={{textDecoration:'none',color:'white'}}>Request</a></button>
            
            <button type="button"  id="homebtn1" style={{marginTop:'20%'}}><i className="oi oi-browser"></i>Reports</button>






            </div>
        )
    }
}
