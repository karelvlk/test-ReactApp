
import React from 'react'
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    wrapper: {
        padding: '5px 10px 5px 10px',
        border: '1px solid white',
        //height: '5vh'
    }
})

export default function Footer(){
    const classes = useStyles()
    return(
        <Stack className={classes.wrapper}>
            <Text variant='xLarge'>FOOTER</Text>
        </Stack>
    )
}