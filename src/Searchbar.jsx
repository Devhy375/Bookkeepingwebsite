import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import backgroundimg from './assets/backgroundimg.jpg'
import axios from "axios";
import { useState } from 'react'
import './searchbar.css'

function Searchbar(){

        const [click, setClick] = useState(false)
        const clicking = () => setClick(!click)

        const options = {
            method: 'GET',
            url: 'https://book-finder1.p.rapidapi.com/api/search',
            params: {
              series: 'Wings of fire',
              book_type: 'Fiction',
              lexile_min: '600',
              lexile_max: '800',
              results_per_page: '25',
              page: '1'
            },
            headers: {
              'X-RapidAPI-Key': '375cd11f9cmshcdcd33330d938dep17e30cjsncd84dab2406c',
              'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
            }
          };    

                const datavalue = async() => {
                    try { 
                        const response = await axios.request(options);
                        const inputName = (document.getElementById("mainSearch").value);

                        for (let index = 0; index < 25; index++) {
                            const titleName = (response.data.results[index].title_search);
                            if (inputName == titleName) {
                                const realTitle = (response.data.results[index].title);
                                const realAuthor = (response.data.results[index].authors[0]);
                                const realSeries = (response.data.results[index].series_name);
                                const realType = (response.data.results[index].book_type);
                                document.getElementById("searchTitle").innerHTML = "&nbsp  Book Name : " + realTitle;
                                document.getElementById("searchAuthor").innerHTML = "&nbsp  Author Name : " + realAuthor;
                                document.getElementById("searchSeries").innerHTML = "&nbsp  Series Name : " + realSeries;
                                document.getElementById("searchType").innerHTML = " &nbsp  Genre : " + realType;
                                searchContent.style.display = "block";
                                favouriteToggle.style.display = "block";

                                favourites();
                                function favourites() {
                                    if (document.getElementById("favouriteToggle").getAttribute(onclick)) {
                                        document.getElementById("searchTitlefav").innerHTML = "&nbsp  Book Name : " + realTitle;
                                        document.getElementById("searchAuthorfav").innerHTML = "&nbsp  Author Name : " + realAuthor;
                                        document.getElementById("searchSeriesfav").innerHTML = "&nbsp  Series Name : " + realSeries;
                                        document.getElementById("searchTypefav").innerHTML = " &nbsp  Genre : " + realType;
                                        document.getElementById("favBook").innerHTML = "&nbsp";
                                    } else {
                                        document.getElementById("favBook").innerHTML = "You Do Not Have Any Favourites Yet!";
                                    } 
                                }

                                break;
                            } else {
                                continue;
                            }         
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }
            
    return(
        <div>
        <div className="searchbar">
            <img src={backgroundimg} alt="Background Image" />
            <div className="searchinput">
            </div>
            <div className='searchElement' >
                <input id='mainSearch'  className='mainSearch' type="text" placeholder="Search Your Books Here"/>
                <a href="#searchContent" onClick={datavalue} ><FontAwesomeIcon icon={faSearch} style={{ color: 'rgb(255, 255, 255)' }}  /></a>
            </div>

        </div>
        <div className="searchContent" id='searchContent' >
            <div className='displayUser'>
                <div className='headPart'>
                        Here's Your Search...
                </div>
                <div className="searchTitle" id="searchTitle">
            
                </div>
                <div className="searchSeries" id="searchSeries">
                    
                </div>
                <div className="searchType" id="searchType">
                
                </div>
                <div className="searchAuthor" id="searchAuthor">
                
                </div>
            </div>
                <div className='favouriteToggle' onClick={() => {clicking();datavalue()}} id='favouriteToggle'>
                    {click ? (<FontAwesomeIcon icon={faHeart} style={{ color: 'rgb(255, 0, 0)' }} />) : (<FontAwesomeIcon icon={farFaHeart} style={{ color: 'rgb(255, 0, 0)' }} /> )}
                </div>
            
        </div>
        <hr />
        <div className="Myfavs">
            <div className="favHeading">
                My Favourites
            </div>
            <div className="favBook" id='favBook'>
                <div>
                <h2 id="searchTitlefav"></h2>
                <h2 id="searchSeriesfav"></h2>
                <h2 id="searchTypefav"></h2>
                <h2 id="searchAuthorfav"></h2>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Searchbar