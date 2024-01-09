import './card.css'
import { useNavigate } from 'react-router-dom'

export default function Card (props) {
    return(
        <>
        <div className="card">
            <div className="photo">
                <img src = {props.photo} />
            </div>
            <div className="text-box">
                <div className='text-header'>
                    {props.category}
                </div>
                <div className="title">
                    {props.title}
                </div>
                <p className='date'>
                    {props.date}
                </p>
                
            </div>
        </div>
        </>
    )
}