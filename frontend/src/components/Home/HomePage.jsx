import React, { useEffect, useState } from 'react'
import HomeAudioBook from '../HomeAudioBook';
import HomeBooks from '../HomeBooks';
import Home from '../Home';
import { getBooks } from '../../services/service';

const HomePage = props => {
    const [books, setBooks] = useState([]);
    
    //   useEffect(() => {
    //     fetch("http://localhost:2000/books")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setBooks(data);
    //       })
    //       .catch((error) => console.error("Error fetching data:", error));
    //   }, []);

    useEffect(() => {
        getBooks()
          .then((data) => {
            setBooks(data);
          })
          .catch((error) => console.error("Error fetching data:", error));
    }, [])
    


    return (
        <div className='px-[10%]'>
            <div>
                <Home />
            </div>
            <div className='my-[20%]'>
                <HomeBooks title={'Best Selling Books'} data={books}/>
            </div>
            <div>
                <HomeAudioBook />
            </div>
        </div>
    )
}

HomePage.propTypes = {}

export default HomePage