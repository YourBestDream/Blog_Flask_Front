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
                <div className = "pair">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className='clickables'>
                        <svg xmlns="http://www.w3.org/2000/svg" id="heart" width="20" height="18" viewBox="0 0 20 18" fill="none">
                        <path d="M14.4643 0C12.6205 0 11.0063 0.832696 10 2.24022C8.99375 0.832696 7.37946 0 5.53571 0C4.06806 0.00173735 2.66099 0.614826 1.6232 1.70476C0.585411 2.7947 0.00165423 4.27247 0 5.81387C0 12.3779 9.26696 17.691 9.66161 17.9105C9.76562 17.9692 9.88189 18 10 18C10.1181 18 10.2344 17.9692 10.3384 17.9105C10.733 17.691 20 12.3779 20 5.81387C19.9983 4.27247 19.4146 2.7947 18.3768 1.70476C17.339 0.614826 15.9319 0.00173735 14.4643 0ZM10 16.3914C8.36964 15.3936 1.42857 10.8485 1.42857 5.81387C1.42999 4.67031 1.86316 3.57402 2.63309 2.7654C3.40302 1.95678 4.44687 1.50184 5.53571 1.50035C7.27232 1.50035 8.73036 2.47183 9.33929 4.0322C9.3931 4.16979 9.48465 4.28747 9.60229 4.37029C9.71994 4.45312 9.85837 4.49734 10 4.49734C10.1416 4.49734 10.2801 4.45312 10.3977 4.37029C10.5154 4.28747 10.6069 4.16979 10.6607 4.0322C11.2696 2.46902 12.7277 1.50035 14.4643 1.50035C15.5531 1.50184 16.597 1.95678 17.3669 2.7654C18.1368 3.57402 18.57 4.67031 18.5714 5.81387C18.5714 10.841 11.6286 15.3927 10 16.3914Z" fill="#858585"/>
                        </svg>
                        {/* <p className='clickable-attribute'>{props.likes}</p> */}
                        <p className='clickable-attribute'>0</p>
                        <svg xmlns="http://www.w3.org/2000/svg" id="bookmark" width="14" height="18" viewBox="0 0 14 18" fill="none">
                        <path d="M13.25 1.99909V2V16.8626L7.29544 14.3106L7 14.184L6.70456 14.3106L0.75 16.8626V2C0.75 1.65072 0.865682 1.37055 1.11788 1.11878C1.3707 0.866388 1.65158 0.750512 2.00051 0.75H12C12.3493 0.75 12.6301 0.865725 12.8827 1.11833C13.1352 1.37091 13.2504 1.65103 13.25 1.99909Z" stroke="#858585" stroke-width="1.5"/>
                        </svg>
                        {/* <p>{props.bookmarks}</p> */}
                        <p className='clickable-attribute'>1423</p>
                    </div>
                </div>
                <p className='date'>
                    {props.date}
                </p>
                
            </div>
        </div>
        </>
    )
}