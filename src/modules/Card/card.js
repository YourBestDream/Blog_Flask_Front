import './card.css'

export default function Card (props) {
    return(
        <>
        <div className="card">
            <div className="photo">
                <img src = {props.photo} />
            </div>
            <div className="text-box">
                <div className="title">
                    {props.title}
                </div>
                <p className='content'>
                    {props.text} 
                </p>
                <p className='date'>
                    {props.date}
                </p>
                
            </div>
        </div>
        </>
    )
}