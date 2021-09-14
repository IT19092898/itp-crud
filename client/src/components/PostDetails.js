import React,{Component} from 'react';
import axios from 'axios';


export default class PostDetails extends Component {
  
  constructor(props){
    super(props);

    this.state={
      _id:"",
      topic:"",
      category:"",
      reason:"",
      post:{},
    };

    
  }

  handleInputChange = (e)=>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });

        console.log(this.state.post);

      }
    });
  }




  onDelete = (id) =>{
    axios.delete(`/post/delete/${id}`).then((res) =>{
    
    alert("Delete Successfully"); 
    })
    
  } 

    
    onSubmit = (e) =>{

    e.preventDefault();

    const {_id,topic,category} = this.state.post;
    const {reason} = this.state;
  
    
    
    const data ={
      _id:_id,
      topic:topic,
      category:category,
      reason:reason,
    }   
    
    
    console.log(data)    
    //passing collected data to save into the database model2
    
    axios.post("/post2/save", data).then((res) =>{

    if(res.data.success){
    
    this.setState(
    
          {        
              topic:"",
              category:"",
          }
    
    )

    this.onDelete(data._id);
        this.props.history.push(`/reason`);
    
            }
         })
    }


    render() {
     


      const {topic,category,storeStatus,description,adStatus,SP_ID,storeId,image} = this.state.post;


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









        <div className="divPossionPostDetails" id="displayform">
        <div style={{marginTop:'20px'}}>
        <h2 style={{marginBottom:'30px', color:'black', fontSize:'50px'}}>{topic}</h2>
              


    <dl className="row">
        
        <dt className="col-sm-3">Topic</dt>
        <dd className="col-sm-9">{topic}</dd>

        <dt className="col-sm-3">Post Category</dt>
        <dd className="col-sm-9">{category}</dd>

        <dt className="col-sm-3">Post status</dt>
        <dd className="col-sm-9">{adStatus}</dd>

        <dt className="col-sm-3">Post description</dt>
        <dd className="col-sm-9">{description}</dd>

        <dt className="col-sm-3">Post Store Status</dt>
        <dd className="col-sm-9">{storeStatus}</dd>

        <dt className="col-sm-3">Post SP_ID</dt>
        <dd className="col-sm-9">{SP_ID}</dd>

        <dt className="col-sm-3">Post Store_ID</dt>
        <dd className="col-sm-9">{storeId}</dd>

    </dl>
    </div>
    <center>
        <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" style={{ width: '40%', height: '40%' }} src={image}/>
        </div>
        <br/>
        <br/>
        
        <div>
        <form>
            <textarea  rows="4" cols="50" maxlength="200" 
                className="form-control"
                type="text"
                name="reason"
                placeholder="Enter Reason"
                value={this.state.reason}
                onChange={this.handleInputChange}
            />
        </form>
        </div>
    </center>
  

    
    </div>
        <table>
          <th>
          
          &nbsp;
          <button type="button" className="addCart"><a style={{textDecoration:'none',color:'white'}} onClick={this.onSubmit} >Delete</a></button>
          </th>
        </table>
    
  </div>
      )
    }
  }