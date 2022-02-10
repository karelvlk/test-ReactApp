
import React from 'react'
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { createUseStyles } from 'react-jss'
import ViewWindow from './ViewWindow.js'
import Navigation from './Navigation.js'
import Output from './Output.js'

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        padding: '5px 10px 5px 10px',
        border: '1px solid white',
        //height: '50%',
        gridColumn: '1/3',
        minHeight: '0px',
        //height: '86vh'

    },
})

export default function CenterBox(){
    const classes = useStyles()
    return(
        <Stack verticalFill horizontal horizontalAlign="center" className={classes.wrapper}>
            <Navigation/>
            <ViewWindow/>
            <Output/>
        </Stack>
    )
}