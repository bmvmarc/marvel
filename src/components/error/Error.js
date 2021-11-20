import imgError from './error.gif'
const Error = () => {
    return (
        // <img className='error' src={process.env.PUBLIC_URL + '/error.gif'} alt='error'/>
        <img style={{ display: 'block', width: "200px", height: "250px",objectFit: 'contain', margin: "0 auto",  transform: 'none'}} 
             className='error' 
             src={imgError} 
             alt='error'/>
    );
} 

export default Error