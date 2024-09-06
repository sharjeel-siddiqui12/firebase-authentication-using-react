import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'



function Post(props) {
  
    return (
      <div className='  text-[#000000] border border-black w-[350px] p-5 m-5 bg-[#f5f5f5] rounded-[20px] shadow-[0px_0px_20px_5px_black]'>

        <div className=' flex align-middle mb-[10px] mr-[10px]'>
          <img className=' w-[60px] h-[60px] rounded-[50%] mr-[10px]' src={props.profilePhoto} alt="profilePhoto" />

            <div>   
                {props.name} <br />
                {moment(props.date).fromNow()}
            </div>
        </div>

        <div>
          {props.postText}
        </div>

        <div>
          <img className='w-[100%] h-[350px] mb-[10px] mt-[10px]' src={props.postImage} alt="postImage"  /> 
        </div>

        <hr />
        <div className="flex justify-around mt-[10px]">
           <div> <FontAwesomeIcon icon={faThumbsUp} /> Like </div>
           <div> <FontAwesomeIcon icon={faComment }/> Comment</div>
           <div> <FontAwesomeIcon icon={faShare} /> Share</div>
        </div>
        <hr />


       

      </div>
    )
  }
  
export default Post
  