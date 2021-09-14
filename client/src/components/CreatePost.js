import React,{Component} from 'react'
import axios from 'axios';
import FileBase64 from 'react-file-base64';

export default class CreatePost extends Component {
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
      axios.post("/post/save",data).then((res) =>{
            if(res.data.success)
            alert("New Post Added Successfully")
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
   




   

        <div className="divPossion" id="createform">
        <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create New Post</h1>
                <form className="needs-validation" noValidate>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Topic</label>  
                      <input type="text"
                      className="form-control"
                      name="topic"
                      placeholder="Enter topic"
                      value={this.state.topic}
                      onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Post category</label>
                      <input type="text"
                      className="form-control"
                      name="category"
                      placeholder="Enter category"
                      value={this.state.category}
                      onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Post storeStatus</label>
                      <input type="text"
                      className="form-control"
                      name="storeStatus"
                      placeholder="Enter storeStatus"
                      value={this.state.storeStatus}
                      onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Post description</label>
                      <input type="text"
                      className="form-control"
                      name="description"
                      placeholder="Enter description"
                      value={this.state.description}
                      onChange={this.handleInputChange} />
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

                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Post SP_ID</label>
                      <input type="text"
                      className="form-control"
                      name="SP_ID"
                      placeholder="Enter SP_ID"
                      value={this.state.SP_ID}
                      onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                      <label style={{marginBottom:'5px'}}>Post storeId</label>
                      <input type="text"
                      className="form-control"
                      name="storeId"
                      placeholder="Enter storeId"
                      value={this.state.storeId}
                      onChange={this.handleInputChange} />
                    </div>

                    <div>
                    <FileBase64
                          type="file"
                          name="image"
                          multiple={ false }
                          onDone={({ base64 }) => this.setState({ image: base64 })}
                    />
                    </div>

                    

                  <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; SAVE
                  </button>

                </form>
        </div>
        </div>
        </div>
      )
    }
  }