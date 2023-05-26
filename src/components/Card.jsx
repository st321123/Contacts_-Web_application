import react from 'react';

function Card(props)
{
   
    return (
        <div className='card'>
            <div className='top' >
                <h1 className='name'>{props.name} </h1>
                <img className = 'circle-img'src ={props.url} />
            </div>
            <div className='bottom'> 
                <p className='info'>{props.phone}</p>
                <p className='info'>{props.email} </p>

            </div>
    </div>
    
          )
}
export { Card};