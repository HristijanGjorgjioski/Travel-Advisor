import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles'

const Header = ({ setCoordinates }) => {
    const classes = useStyles()
    const [autocomplete, setAutocomplete] = useState(null)

    const onLoad = (autoC) => setAutocomplete(autoC)
    console.log(autocomplete)
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat()
        const lng = autocomplete.getPlace().geometry.location.lng()
    
        setCoordinates({ lat, lng })
    }
    
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
