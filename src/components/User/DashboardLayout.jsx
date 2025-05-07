import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; // Import the heart icons

function DashboardLayout({ title, description }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isQuoteAll, setIsQuoteALL] = useState(false);
    const [quotes, setQuotes] = useState([]);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    const data=async ()=>{
        fetch("http://172.18.4.127:3017/quotes/getAll")

            // Converting received data to JSON
            .then(response => response.json())
            .then(json => {
                console.log("qo -- ", json);
                setQuotes(json.data)
            })
        console.log(quotes.data);
    }

    React.useEffect(() => {
        data()
    },[])

    return (
        <div>
            <div>
                <center><h1>Quotes Around The World</h1></center>
            </div>
            <div style={{width:'100%'}}>
                <div style={styles.menu}>{isQuoteAll?<span><span style={styles.quotes} onClick={()=>setIsQuoteALL(false)}>All </span><span>Favourite</span></span>:<span><span>All </span><span style={styles.quotes} onClick={()=>setIsQuoteALL(true)}>Favourite</span></span>}</div>
            </div>
            {
                isQuoteAll===false?
                    <div>
                        {
                            quotes.map((quote,index) => {
                                return (
                                    <div style={styles.card} className="card" key={index}>
                                        <div className="card-content">
                                            <h2>{quote.author}</h2>
                                            <p>{quote.contents}</p>


                                            <button style={styles.btn} onClick={handleLikeClick}>
                                                {isLiked ? <FaHeart /> : <FaRegHeart style={styles.heart} color="red"/>}
                                            </button>

                                            <div className="card-footer">

                                            </div>
                                        </div>
                                    </div>)
                            })
                        }
                    </div>:
                    <div>
                        <h1>No favourite selected</h1>
                    </div>
            }
        </div>
    );
}

const styles = {
    heart:{
        color:"red",
    },
    card:{
        height:"80px",
        margin:"4%",
        border:"1px solid black",
    },
    menu:{
        float:"right",
        padding:"5%",
    },
    btn:{
        float:"right",border:"none",marginTop: "-5%"
    },
    quotes:{
        fontWeight:5
    }
}

export default DashboardLayout;
