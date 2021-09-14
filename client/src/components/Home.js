import React,{Component} from 'react'
import axios from 'axios';


export default class Home extends Component {
  constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}

componentDidMount(){
  this.retrivePosts();
}

retrivePosts(){
  axios.get("/posts").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts);
    }
    
  });
}

//delete function
onDelete = (id) =>{
  axios.delete(`/post/delete/${id}`).then((res) =>{
    alert("Post Deleted Successfully");
    this.retrivePosts();
  })
}

//Search Function
filterData(posts,searchkey){
  const result = posts.filter((post) =>
  post.topic.toLowerCase().includes(searchkey)||
  post.category.toLowerCase().includes(searchkey)
  )

  this.setState({posts:result})

}

handleSearchArea = (e) =>{
 const searchkey = e.currentTarget.value;
 
  axios.get("/posts").then(res=>{
    if(res.data.success){
      this.filterData(res.data.existingPosts,searchkey)
      
      }
  });

}

  render() {
    return (
      
    <div className="containerHome" >


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
          



          
        <button className="generateReport1" type="button"><a href="#" style={{textDecoration:'none',color:'white'}}>Generate Report</a></button>
        <button className="createbutton" type="button"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Post</a></button>  
         
    
     
          
          





    <div class="table-wrapper">
    <table class="fl-table">
          <thead>         
            <th scope="col">Id</th>
            <th scope="col">Topic</th>
            <th scope="col">Category</th>
            <th scope="col">storeStatus</th>
            <th scope="col">description</th>
            <th scope="col">adStatus ID </th>
            <th scope="col">SP_ID </th>
            <th scope="col">storeId </th>
            <th scope="col">image </th>
            <th style={{borderTopRightRadius:'1px'}} scope="col">Action</th>           
          </thead>

          <tbody>
            {this.state.posts.map((posts,index) => (
              <tr key={index}>
                <td scope="row">{index+1}</td>
                <td>
                    <a href={`/post/${posts._id}`} style={{textDecoration:'none',color:'black'}}>
                        {posts.topic}
                    </a>
                </td>    
                  <td>{posts.category}</td>
                  <td>{posts.storeStatus}</td>
                  <td>{posts.description}</td>
                  <td>{posts.adStatus}</td>
                  <td>{posts.SP_ID}</td>
                  <td>{posts.storeId}</td>
                  
                  <td>{ 
                      <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" style={{ width: '20%', height: '20%' }} src={posts.image}/>
                      </div>}
                  </td>

                <td>
                  <button type="button" className="editBtn1"><a style={{textDecoration:'none',color:'white'}} href={`/edit/${posts._id}`}>Edit</a></button>
                  &nbsp;
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
       

      </div>
    )
  }
}