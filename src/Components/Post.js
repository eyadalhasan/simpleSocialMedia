import "./SubComp/postStyle.scss"
import CommentForm from "./CommentForm";
import { useState } from "react";

function Post(props)
{
    const [posts,setPosts]=useState([]);
    const [show,setShow]=useState(false)
    const [like,setLike]=useState(false)
    function showComment(e){
        e.preventDefault();
                setShow(true)

    }

    function createComment (e)
    {
        e.preventDefault();


    }
function likeBtn(){
setLike(!like)
}
    return (
        <div>
            <form onSubmit={createComment}>
                <div
                    className="shadow-lg p-3 mb-5 bg-body rounded mt-5 thePost"
                >
                    {props.text}
                </div>
                    
                <div>
                  <button className={!like?"btn btn-light":"btn btn-primary"} onClick={likeBtn}>Like</button>
                  <button className="btn btn-light ms-3" onClick={showComment}>Add Comment</button>  
                </div>
            </form>
          {show?<CommentForm></CommentForm>:null}  
        </div>
    )
}

export default Post;
