import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'

// importing for date.
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import { format } from 'date-fns'

// importing calendar css files.
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {

    const [opendate, setOpenDate] = useState(false);

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flight</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">A lifetime of discounts? It's a Genius</h1>
                <p className="headerDesc">Get rewards for your travels unlock instant savings of 10% or more with a free Prat account</p>
                <button className="headerBtn">Sign in / Register</button>


                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" className="headerSearchInput" placeholder='Where are you going ?' />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={() => { setOpenDate(!opendate) }} className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {
                            opendate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                            />
                        }
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className='headerSearchText'>2 adults to children 1 room</span>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header