import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
        <Input label="Amount" input={{
            id:'amount',
            type:'number',
            max:'5',
            min:'1',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>+1 Add</button>
    </form>
  )
}

export default MealItemForm