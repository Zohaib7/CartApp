import React, { Fragment } from 'react'
import meal from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>React Mealsss</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={meal} alt='image of a meal'/>
        </div>
    </Fragment>
  )
}

export default Header