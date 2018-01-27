
var AllPosts = createReactClass({
    
    handleDelete(){
        this.props.handleDelete(id);
    },
    
    onUpdate(post){
        this.props.onUpdate(post);
    },
    render:function() {
        var posts= this.props.posts.map((post) => {
            return(
                // <div key= {post.id}>
                //     <h3>{post.title}</h3>
                //     <p>{post.article}</p>
                //     <button className="btn btn-danger" onClick={this.handleDelete.bind(this, post.id)}>Delete</button>
                //     <button className="btn btn-primary" onClick={this.handleEdit.bind(this, post.id)}>Edit</button>
                // </div>
                <div key= {post.id} >
                    <div  className="thumbnail postBox container">
                    
                        <Post post={post}
                        handleDelete={this.handleDelete.bind(this, post.id)}
                        handleUpdatet={this.onUpdate}/>
                  
                  
                     </div>  
                <br/>
                </div>
            )
        });
        return ( 
            <div> 
                {posts}
            </div> 
        )
    }
});
