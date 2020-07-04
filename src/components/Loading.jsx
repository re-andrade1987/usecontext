import React from 'react' 

import Spinner from 'react-spinkit' 
 
const Loading = ({ loading, message }) => { 
    return loading ? ( 
        <div className='overlay-content'> 
            <div className='wrapper'> 
                <Spinner 
                    name='ball-clip-rotate-multiple' 
                    fadeIn='none' 
                    color='blue' 
                /> 
                <span className='message'> 
                    {message} 
                </span> 
            </div> 
        </div> 
    ) : null 
} 
 
export default Loading