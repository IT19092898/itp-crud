import React, { Component } from 'react'
import axios from 'axios';


export default class Reason extends Component {

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
        axios.get("/posts2").then(res=>{
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
        axios.delete(`/post2/delete/${id}`).then((res) =>{
          alert("Post Deleted Successfully");
          this.retrivePosts();
        })
      }
      
      //Search Function
      filterData(posts,searchkey){
        const result = posts.filter((post) =>
        post.topic.toLowerCase().includes(searchkey)||
        post.postCategory.toLowerCase().includes(searchkey)
        )
      
        this.setState({posts:result})
      
      }
      
      handleSearchArea = (e) =>{
       const searchkey = e.currentTarget.value;
       
        axios.get("/posts2").then(res=>{
          if(res.data.success){
            this.filterData(res.data.existingPosts,searchkey)
            
            }
        });
      
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
                  <th scope="col">Reason</th>
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
                        <td>{posts.reason}</td>
 
      
                      <td>
                        
                        &nbsp;
                        <button type="button" className="deleteBtn1"><a style={{textDecoration:'none',color:'white'}} onClick={() => this.onDelete(posts._id)}>Delete</a></button>
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
