
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss'
import { Text } from 'office-ui-fabric-react/lib/Text'
import Form from './Form.js'
import { Stack } from '@fluentui/react';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  },

  res: {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column'
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
})

async function getResult(form) {
  return fetch(`http://glog.hfbiz.cz/glog/Glog/entry.php?class=Tools.Reproject&srsIn=epsg:${form.from}&srsOut=epsg:${form.to}&coords=${form.x}%20${form.y}`, {
    method: 'GET'
  })
    .then(response => {
      try {
        return response.text()
        //return response.json()
      }
      catch(e) {
        return null
      }
    })
    .catch((error) => {
      //console.error('Error:', error);
      return null
  })
}

function writeXY(result, coord) {
  if (result && coord === 1) {
    return result.split(' ')[1];
  }
  if (result && coord === 2) {
    return result.split(' ')[2];
  }
}

function isDeg(to) {
  // eslint-disable-next-line eqeqeq
  if (to == 4326) {
    return '°'
  } else {
    return ''
  }
}

export default function Transformator() {
  const classes = useStyles()
  const [formData, setFormData] = useState({x: 0,
                                            y: 0})
  const [result, setResult] = useState()

  const deg = isDeg(formData.to)

  function handleChange(name, value) {
    console.log('name', name)
    console.log('value', value)
    setFormData(original => {
      return {
        ...original,
        [name]: value
      }
    });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setResult(await getResult(formData));
  }

  function changeSelectBox(){
    setFormData(original => {
      return {
        ...original,
        from: original.to,
        to: original.from
      }
    });
  }
  
  function changeCoords(){
    setFormData(original => {
      return {
        ...original,
        x: original.y,
        y: original.x
      }
    });
  }

  return(
    <Stack className={classes.wrapper}>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        changeCoords={changeCoords}
        changeSelectBox={changeSelectBox}
        xForm={formData.x}
        yForm={formData.y}
        fromForm={formData.from}
        toForm={formData.to}
        alert={alert}
      />
      <Stack.Item className={classes.result}>
        <Text variant={'medium'} className={classes.res}>X: {writeXY(result, 1)}{deg}</Text>
        <Text variant={'medium'} className={classes.res}>Y: {writeXY(result, 2)}{deg}</Text>
      </Stack.Item>
    </Stack>
  )
}
