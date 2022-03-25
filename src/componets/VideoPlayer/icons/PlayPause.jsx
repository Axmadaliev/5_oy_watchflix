import React from 'react';
import "./PlayPause.css"
import pauseButton from "../../../Assert/img/pauseBtn.png"
const PlayPause = ({ play, ...props }) => {
    // const stylePause = {
    //     opacity: !play ? 1 : 0,
    //     transition: "opacity 1s ease"
    // }
    return <div className='pause'>
        {play ? <img src={pauseButton} alt="" />  
        : <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C40.111 0 30.444 2.93245 22.2215 8.42652C13.9991 13.9206 7.59043 21.7295 3.80605 30.8658C0.0216642 40.0021 -0.968503 50.0555 0.960759 59.7545C2.89002 69.4536 7.65206 78.3627 14.6447 85.3553C21.6373 92.348 30.5465 97.11 40.2455 99.0393C49.9446 100.969 59.9979 99.9784 69.1342 96.194C78.2705 92.4096 86.0794 86.001 91.5735 77.7785C97.0676 69.5561 100 59.8891 100 50C99.9855 36.7436 94.7129 24.0344 85.3393 14.6607C75.9656 5.28708 63.2564 0.014558 50 0ZM50 90C42.0888 90 34.3552 87.654 27.7772 83.2588C21.1992 78.8635 16.0723 72.6164 13.0448 65.3073C10.0173 57.9983 9.2252 49.9556 10.7686 42.1964C12.312 34.4371 16.1217 27.3098 21.7158 21.7157C27.3099 16.1216 34.4372 12.312 42.1964 10.7686C49.9557 9.22518 57.9983 10.0173 65.3074 13.0448C72.6164 16.0723 78.8635 21.1992 83.2588 27.7772C87.6541 34.3552 90 42.0887 90 50C89.9881 60.605 85.77 70.7722 78.2711 78.2711C70.7723 85.77 60.605 89.9881 50 90Z" fill="#FED530"/>
        <path d="M35 22.23V77.77L79.435 50L35 22.23ZM45 40.27L60.565 50L45 59.73V40.27Z" fill="#FED530"/>
        </svg>}
    </div> 
}

export default PlayPause;