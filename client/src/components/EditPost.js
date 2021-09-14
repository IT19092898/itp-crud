import React, { Component } from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';

export default class EditPost extends Component {
  
  constructor(props){
    super(props);
    this.state={
      topic:"",
      category:"",
      storeStatus:"",
      description:"",
      adStatus:"",
      SP_ID:"",
      storeId:"",
      image:""
    }
  }
  
  handleInputChange = (e)=>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{
    
    e.preventDefault();
    const id = this.props.match.params.id;

    const {topic,category,storeStatus,description,adStatus,SP_ID,storeId,image} = this.state;

    const data={
      topic:topic,
      category:category,
      storeStatus:storeStatus,
      description:description,
      adStatus:adStatus,
      SP_ID:SP_ID,
      storeId:storeId,
      image:image
    }
    console.log(data)
      //save data
      axios.put(`/post/update/${id}`,data).then((res) =>{
            if(res.data.success)
            alert("Post Updated Successfully")
            this.setState(
              {
                topic:"",
                category:"",
                storeStatus:"",
                description:"",
                adStatus:"",
                SP_ID:"",
                storeId:"",
                image:""
              }
            )
      });
  }


  //fill form
  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          topic:res.data.post.topic,
          category:res.data.post.category,
          storeStatus:res.data.storeStatus,
          description:res.data.description,
          adStatus:res.data.adStatus,
          SP_ID:res.data.SP_ID,
          storeId:res.data.storeId,
          image:res.data.image
        });

        console.log(this.state.post);

      }
    });
  }

    render() {
      return (

          <div>



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










        
        <div className="divPossion">
        <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
        <form className="needs-validation" noValidate>
        
                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>{this.state.topic}</label>  
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Post adStatus</label>
                      <input type="text"
                      className="form-control"
                      name="adStatus"
                      placeholder="Enter Status"
                      value={this.state.adStatus}
                      onChange={this.handleInputChange} />
                    </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit} >
            <i className="far fa-check-square"></i>
            &nbsp; UPDATE
          </button>

        </form>
    </div>
    </div>
    </div>
      )
    }
  }