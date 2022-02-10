
import React from 'react'
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { createUseStyles } from 'react-jss'
import { Toggle } from 'office-ui-fabric-react/lib/Toggle'
import { Icon } from '@fluentui/react/lib/Icon';

const useStyles = createUseStyles({
    wrapper: {
        padding: '5px 10px 5px 10px',
        border: '1px solid white',
        //height: '8vh'
    }
})

export default function Heading(){
    const classes = useStyles()
    return(
        <Stack horizontal horizontalAlign="space-between" className={classes.wrapper}>
            <Stack.Item align="center">
                <Text variant='xxLarge'>HEADING</Text>
            </Stack.Item>
            <Stack.Item align="center" >
                <Toggle
                    defaultChecked 
                    onText={<Icon iconName="ClearNight" />} 
                    offText={<Icon iconName="Sunny" />}/>
            </Stack.Item>
        </Stack>
    )
}