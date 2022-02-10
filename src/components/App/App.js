
import React from 'react';
import { createUseStyles } from 'react-jss'
import { Stack } from '@fluentui/react';
import Heading from '../Heading.js'
import Footer from '../Footer.js'
import CenterBox from '../CenterBox'


const useStyles = createUseStyles({
  wrapper: {
    height: '100vh',
    border: '3px solid black',
    overflow: 'hidden',
    minHeight: '0px'
  },
  
  heading: {
    borderBottom: '3px solid #ffc300',
    paddingBottom: 5
  },

  minHeight: {
    minHeight: 0
  }
})

function App() {
  const classes = useStyles()
  return(
    <Stack VerticalFill className={classes.wrapper}>
      <Stack.Item>
        <Heading/>
      </Stack.Item>
      <Stack.Item grow className={classes.minHeight}>
        <CenterBox/>
      </Stack.Item>
      <Stack.Item>
        <Footer/>
      </Stack.Item>
    </Stack>
  )
}

export default App;
