import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../helpers/icons'
import styles from 'styled-components'
import { showMenu, getCurrentCity } from '../actions/actions'
import Loader from 'react-loader-spinner'

const TodayStyle = styles.div`
    min-height: 810px;
    text-align: center;
    background: #1E213A;
    @media (min-width: 768px){
      min-height: 100vh;
    }
    .header {
      display:flex;
      justify-content: space-between;
      padding: 0em .7em 1em;
      margin-bottom: 86px;
      @media (min-width: 768px){
        margin-bottom: 109px;
      }
      &__button {
        border: none;
        padding: .7em 1em;
        color: #E7E7EB;
        background: #6E707A;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin: 18px 0 0 12px;
        outline: none;
        &:hover {
          cursor: pointer;
        }
        @media(min-width: 768px){
          margin: 42px 0 0 46px;
        }
      }
      &__icon {
        color: #E7E7EB;
        border: none;
        border-radius: 50%;
        padding: 1em;
        background: #6E707A;
        margin: 18px 12px 0 0;
        display: flex;
        outline: none;
        &:hover {
          cursor: pointer;
        }
        #location {
          font-size: 22px;
        }
        @media(min-width: 768px){
          margin: 42px 46px 0 0;
        }
      }
    }
    .main {
      img {
        display: block;
        margin: 0 auto;
        margin-bottom: 40px;
        @media (min-width: 768px){
          margin-bottom: 87px;
        }
      }
      .title__h1 {
        font-size: 144px;
        font-weight: 500;
        color: white;
        margin: 0;
        margin-bottom: 23px;
        @media (min-width: 768px){
          margin-bottom: 87px;
        }
        & span {
          font-size: 48px;
          color: #A09FB1;
        }
      }
      .title__h2 {
        font-size: 36px;
        font-weight: 600;
        color: #A09FB1;
        margin-bottom: 48px;
        @media (min-width: 768px){
          margin-bottom: 87px;
        }
      }
      &__today {
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;

        color: #88869D;
        margin-bottom: 33px;
      }
      small {
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #88869D;
        padding-bottom: 105px;
        & #place {
          margin-right: 9px;
        }
        @media (min-width: 796px){
          padding-bottom: 52px;
        }
      }
    }
    .hvr-overline-from-left {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      position: relative;
      overflow: hidden;
    }
    .hvr-overline-from-left:before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      right: 100%;
      top: 0;
      background: #FFEC65;
      height: 4px;
      -webkit-transition-property: right;
      transition-property: right;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    .hvr-overline-from-left:hover:before, .hvr-overline-from-left:focus:before, .hvr-overline-from-left:active:before {
      right: 0;
    }
    .hvr-icon-grow {
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
    .hvr-icon-grow .hvr-icon {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    .hvr-icon-grow:hover .hvr-icon {
      -webkit-transform: scale(1.2) translateZ(0);
      transform: scale(1.2) translateZ(0);
    }
  `

const LoaderContainer = styles.div`
  display: flex;
  justify-content: center;
`

export const Today = () => {
  const timezone = useSelector((state) => state.currentTimezone).split('/')
  const { loadingToday } = useSelector((state) => state)
  const temp = Math.round(useSelector((state) => state.current.temp))
  const weather = useSelector((state) => state.current.weather[0].main)
  const icon = useSelector((state) => state.current.weather[0].icon)
  const dispatch = useDispatch()
  const { dt } = useSelector((state) => state.current)
  const { fahrenheit } = useSelector((state) => state)

  // convierto the Unix Timestamp to ms

  const miliseconds = dt * 1000
  const dataObject = new Date(miliseconds)
  const today_weekday = dataObject.toLocaleDateString('en-US', {
    weekday: 'short',
  })
  const today_numeric = dataObject.toLocaleDateString('en-US', {
    day: 'numeric',
  })
  const today_month = dataObject.toLocaleDateString('en-US', { month: 'short' })

  const celsiusToFah = Math.round((temp * 9) / 5 + 32)
  const handleSearch = () => {
    dispatch(showMenu())
  }

  const handleCurrentClick = () => {
    dispatch(getCurrentCity())
  }

  return (
    <TodayStyle>
      <header className='header'>
        <button className='header__button hvr-overline-from-left' onClick={handleSearch}>
          Search for places
        </button>
        <button className='header__icon hvr-icon-grow' onClick={handleCurrentClick}>
          <span className='material-icons hvr-icon' id='location'>
            my_location
          </span>
        </button>
      </header>
      {loadingToday ? (
        <LoaderContainer>
          <Loader type='TailSpin' height={100} width={100} color='#E7E7EB' />
        </LoaderContainer>
      ) : (
        <main className='main'>
          <img src={icons[icon]} alt='img principal' className='main__img' />
          <h1 className='title__h1'>
            {fahrenheit ? celsiusToFah : temp}
            <span>{fahrenheit ? '°F' : '°C'}</span>
          </h1>
          <h2 className='title__h2'>{weather}</h2>
          <p className='main__today'>
            {`Today - ${today_weekday}, ${today_numeric} ${today_month}`}
          </p>
          <small className='main__place'>
            <span className='material-icons' id='place'>
              place
            </span>
            {timezone[timezone.length - 1].replaceAll('_', ' ')}
          </small>
        </main>
      )}
    </TodayStyle>
  )
}
