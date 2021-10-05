import React, { useState } from 'react'
import { Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

import useStyles from './styles'

const List = () => {
    const classes = useStyles()
    const [type, setType] = useState('restaurants')

    return (
        <div className={classes.container}>
            <Typography variant="h4">Hotels, Restaurants & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={''} onChange={''}>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default List
