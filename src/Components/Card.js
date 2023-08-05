import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import './Card.css'
import { toast } from 'react-toastify';

const Card = (props) => {

    let course = props.course;
    let LikedCourses =props.LikedCourses;
    let setLikedCourses =props.setLikedCourses;
   
   
        function clickhandler(){

        if(LikedCourses.includes(course.id))
        {

            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));

            toast.warning("Liked Removed");

 }

        else{

            if(LikedCourses.lengthn === 0){

                setLikedCourses([course.id]);
            }

            else{
                   setLikedCourses((prev)=>[...prev,course.id]);
            }
                       toast.success("Liked Successfully")
        }
  }


  return (
    <div className='container'>
        <div className='image-con'>
            <img src={course.image.url} alt='image'></img>
        </div>

        <div className='like'>

            <button className='like-btn' onClick={clickhandler}>
                 {
                    LikedCourses.includes(course.id) ?(<FcLike fontSize="1.75rem"></FcLike>):(<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>)

                 }
            </button>

        </div>

        <div className='content'>
            <p className='title'>{course.title}</p>
            <p>{
            
            course.description.length>100 ?(course.description.substr(0,100)) +"....":(course.description)
            
            }
            </p>
        </div>
    </div>
  )
}

export default Card