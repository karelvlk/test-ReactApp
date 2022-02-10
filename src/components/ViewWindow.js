
import React from 'react'
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    wrapper: {
        padding: '5px 10px 5px 10px',
        border: '1px solid white',
        width: '56%',
        gridColumn: '1/3',
        minHeight: '0px',
    }
})

export default function ViewWindow(){
    const classes = useStyles()
    return(
        <Stack verticalFill align="center" className={classes.wrapper}>
            <Text variant='large'>APP</Text>
        </Stack>
    )
}