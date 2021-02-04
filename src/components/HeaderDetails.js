import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from 'styled-components'
import { setCelsius, setFahrenheit } from '../actions/actions'

const HeaderStyle = styles.div`
  display:none;
  @media (min-width: 1200px){
    display: flex;
    justify-content: flex-end;
    padding-top: 42px;
    button {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      padding: 1em;
      border: none;
      border-radius: 50%;
      display: inline-block;
      background: #585676;
      outline: none;
      color: #E7E7EB;
      &:hover {
        cursor: pointer;
      }
    }
    .degrees {
      margin-right: 12px;
    }
    .isActive {
      background: #E7E7EB;
      color: #110E3C;
      transition: all .5s ease;
    }
    .hvr-shrink {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
    }
    .hvr-shrink:hover, .hvr-shrink:focus, .hvr-shrink:active {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  `



const HeaderDetails = () => {
  const dispatch = useDispatch()
  const { fahrenheit } = useSelector((state) => state)
  const handleFahrenheit = () => {
    dispatch(setFahrenheit())
  }
  const handleCelsius = () => {
    dispatch(setCelsius())
  }
  return (
    <HeaderStyle className='header'>
      <button
        className={`degrees ${!fahrenheit ? 'isActive' : ''} hvr-shrink`}
        onClick={handleCelsius}
      >
        ℃
      </button>
      <button
        className={`${fahrenheit ? 'isActive' : ''} hvr-shrink`}
        onClick={handleFahrenheit}
      >
        ℉
      </button>
    </HeaderStyle>
  )
}

export default HeaderDetails
