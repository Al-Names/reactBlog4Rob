var NewPost = createReactClass({
    
    handleClick(){
        var title= this.refs.title.value;
        var article = this.refs.article.value;
        
       $.ajax({
           url: '/api/v1/posts',
           type: 'POST',
           data: {item: {title: title, article: article} },
           success: (post) => {
               this.props.handleSubmit(post);
           }
       })
    },
    
    
    render: function(){
        return (
            <div className="newPost">
                <h4>New Entry</h4>
                <input  className= "form-control" ref='title' placeholder='Give it a title'/>
                <br/>
                <input  className= "form-control logEntry" ref='article' name="logEntry" placeholder='Log Entry!'/>
                <br/>
                <button className="btn btn-default center-block" onClick={this.handleClick}>Post</button>
                <br/>
            </div>
            
            )
    }
});