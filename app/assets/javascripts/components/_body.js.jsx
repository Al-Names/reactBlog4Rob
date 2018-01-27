var Body = createReactClass({
    
    getInitialState() {
        return {posts : []}
    }, 
    
    componentDidMount(){
        $.getJSON('/api/v1/posts.json', (response) => {this.setState({ posts:response}) });
    }, 
    
    handleSubmit(post){
        var newState = this.state.posts.concat(post);
        this.setState({posts: newState})
    },
    
    handleDelete(){
        $.ajax({
            url: '/api/v1/posts/${id}',
            type: 'DELETE',
            success(){
                this.removePostClient(id);
            }
        });
    },   
    
    removePostClient(id){
        var newPosts = this.state.posts.filter((post) => {
            return post.id != id;
        });
    },
    
    handleUpdate(post){
      $.ajax({
          url: '/api/v1/posts/${item.id}',
          type: 'PUT',
          data: {post: post},
          success: ()=>{
              this.updatePosts(post);
          }
      }) 
    },
    updatePosts(post){
        var posts = this.state.posts.filter((i) => {return i.id != post.id});
        posts.push(post);
        
        this.setState({posts: posts});
    },
    render: function(){
        return (
            <div>
                <NewPost handleSubmit={this.handleSubmit}/>
                <div className="container postList">
                    <AllPosts  posts={this.state.posts} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
                </div>
            </div>
            )
    }
});