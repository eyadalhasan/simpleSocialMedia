import React, { useState } from "react";
import Post from "./Post";
import "./SubComp/addPost.scss"
function AddPost() {

    
    const [text, setTest] = useState("");
    function textArea(e) {
        setTest(e.target.value)
    }
function addPostBtn(e){
e.preventDefault();
}

    return (
        <>
        <div className="post">
            <form action="" className="">
                <textarea name="" id="" cols="100" rows="6" placeholder="Write What You think" value={text} onChange={textArea}>



                </textarea>
                <br />

                <br />
                <button className="btn btn-primary" onClick={addPostBtn}>Add post</button>

            </form>
<Post text={text}/>
</div>
        </>

    )


}
export default AddPost