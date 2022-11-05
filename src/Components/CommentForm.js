import { useState } from "react";
import "./SubComp/commentStyle.scss"


function CommentForm(props) {

var comments =[];

const [inputValue,setInvputValue]=useState("");
    function f(e) {
        e.preventDefault()
        comments.push(<div>
           <div> {inputValue}</div>
           <div>{new Date().toLocaleDateString()}</div>
        </div>)

    
    }
    function chgValue(e){
        setInvputValue(e.target.value)
    
    }



    return (
        <div>
            <form onSubmit={f}>
                <input onChange={chgValue}
                value={inputValue}
                    type="text"
                    placeholder="Write your comment"
                    className="rounded mt-5 commentInput"
                />
            </form>
        </div>
    )
}

export default CommentForm;
