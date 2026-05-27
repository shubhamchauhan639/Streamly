import React, { useEffect, useState } from 'react'
import { logo, Youtube_Search_Api, search_logo } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggelMenue } from '../utils/appSlice'
import { cacheResults } from "../utils/searchSlice";
import { useNavigate, Link } from 'react-router-dom'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestion] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {

    // avoid empty api calls
    if (!searchQuery.trim()) {
      setSuggestion([]);
      return;
    }

    const timer = setTimeout(() => {

      // check cache first
      if (searchCache[searchQuery]) {

        setSuggestion(searchCache[searchQuery]);

      } else {

        searchSuggestion();

      }

    }, 200);

    return () => {
      clearTimeout(timer);
    };

  }, [searchQuery]);

  const searchSuggestion = async () => {

    try {

      const data = await fetch(
        Youtube_Search_Api + searchQuery
      );

      const json = await data.json();

      setSuggestion(json[1]);

      // update cache
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );

    } catch (error) {
      console.log(error);
    }
  };

  const handleSuggestionClick = (value) => {

    setSearchQuery(value);

    setSuggestion([]);

    setShowSuggestion(false);

    navigate("/results?search_query=" + value);
  };

  const handleSearch = () => {

    if (!searchQuery.trim()) return;

    setShowSuggestion(false);

    navigate("/results?search_query=" + searchQuery);
  };

  const toggelButton = () => {
    dispatch(toggelMenue());
  };

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md px-4 py-3'>

      <div className='flex items-center justify-between'>

        {/* Left Section */}
        <div className='flex items-center gap-4'>

          <img
            onClick={toggelButton}
            className='w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200'
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAOVBMVEX///8AAABfX19gYGBKSkrS0tJwcHDv7+/i4uK0tLTy8vIICAj7+/t4eHhkZGRBQUEQEBAkJCQ2NjYIYB2fAAAAwklEQVRoge3YTQ6DIBQEYCgVfP7r/Q/bdtEUsE26mGHjfAeYEPTpgHMiIiJ/sxhuACHaKbrfPczel9kDLvplKMIjNjzm2WnEho8pC++w2d53rcITOjzfFuoDRS+9WPhziFZc9FoNkXOTzUsAWGabTvMvItdl8Q7xrVoAv4pHXS02XHb1f1a1+GhXLZjbwq0W2FdxI1aLeoi44y8i18U8tjAPXNSjIrVaYLPLpatavLWsFtjw8gKNevXnqJeWIiIiPz0AhVgSKEcnuE4AAAAASUVORK5CYII='
            alt='menu'
          />

          <Link to="/">
            <img
              className='w-36 cursor-pointer object-contain'
              src={logo}
              alt='logo'
            />
          </Link>

        </div>

        {/* Search Section */}
        <div className="w-full flex justify-center">

          <div className="relative flex items-center w-[45%]">

            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}

              // FIXED BLUR ISSUE
              onBlur={() => {
                setTimeout(() => {
                  setShowSuggestion(false);
                }, 200);
              }}

              // ENTER KEY SUPPORT
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}

              className="w-full border border-gray-300 px-5 py-2.5 rounded-l-full outline-none text-base focus:border-blue-500"
            />

            {/* SEARCH BUTTON WORKING */}
            <button
              onClick={handleSearch}
              className="border border-l-0 border-gray-300 bg-gray-100 hover:bg-red-600 hover:text-white px-6 py-2.5 rounded-r-full"
            >
              Search
            </button>

            {showSuggestion && suggestion.length > 0 && (

              <div className="absolute top-14 left-0 w-full bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 z-50">

                <ul>

                  {suggestion.map((s) => (

                    <li
                      key={s}
                      onClick={() => handleSuggestionClick(s)}
                      className="flex items-center gap-4 px-5 py-3 hover:bg-gray-100 cursor-pointer text-lg"
                    >

                      <img
                        src={search_logo}
                        alt="search"
                        className="w-5 h-5"
                      />

                      <span>{s}</span>

                    </li>

                  ))}

                </ul>

              </div>

            )}

          </div>

        </div>

        {/* User Section */}
        <div>

          <img
            className='w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 hover:scale-105 transition-transform duration-200'
            src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original'
            alt='user'
          />

        </div>

      </div>

    </header>
  )
}

export default Header