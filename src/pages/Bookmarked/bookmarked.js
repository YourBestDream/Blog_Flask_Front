import { useEffect,useState } from "react"
import axios from "axios"
import Card from "../../modules/Card/card"

export default function Bookmarked (){
    const [bookmarks,setBookmarks] = useState([])

    useEffect(() => {
        const bookmarkedFetching = async () =>{
            const response = await axios.get("/bookmarked", {withCredentials: true})
            setBookmarks(response.data)
        }
        bookmarkedFetching()
    },[])

    useEffect(() => {
        console.log(bookmarks);
    }, [bookmarks]);
    return (
        <>
        <div className='post-container'>
            <div className='posts'>
                {bookmarks.map(bookmark => (
                    <Card key={bookmark.id} id={bookmark.id} photo={'/python3.12.png'} category = {bookmark.category} title={bookmark.title} date={bookmark.date} likes={bookmark.likes} bookmarks={bookmark.bookmarks} liked = {bookmark.liked} bookmarked={bookmark.bookmarked}/>
                ))}
            </div>
        </div>
        </>
    )
}