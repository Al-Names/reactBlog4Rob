var Post =createReactClass({
    getInitialState(){
        return {editable: false}
        
    },
        handleEdit(){
            if( this.state.editable){
                var title = this.refs.title.value;
                var article= this.refs.article.value;
                var id = this.props.post.id;
                var post = {id: id, title: title, article: article};
                this.props.handleUpdate(post);
             } 
            this.setState({editable: !this.state.editable})
    },

    render: function(){
        var title= this.state.editable? <input className= "form-control" type='text' ref='title' defaultValue={this.props.post.title}/>:
                                        <h3>{this.props.post.title}</h3>;
        var article= this.state.editable ? <input className= "form-control" type='text' ref='article' name="logEntryEdit" defaultValue={this.props.post.article}/>: 
                                            <p className="postText">{this.props.post.article}</p>;
        
            return(
                <div >
                    <div className="text-center postTitle">
                        {title}
                    </div>
                    <hr/>
                    <br/>
                    <div className="text-center" id="postText">
                        {article}
                    </div>
                    <br/>
                    <hr/>
                    <button className="btn btn-danger delete-button" onClick={this.props.handleDelete}>Delete</button>
                    <button className="btn btn-primary" onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'}</button>
                    
                </div>
            )
     
    }
})