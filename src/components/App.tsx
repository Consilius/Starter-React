import { hot } from 'react-hot-loader/root'
import React, { FunctionComponent, useState } from 'react'

interface Props {

}

const App: FunctionComponent<Props> = ({}) => {
  const [count, setCount] = useState(0)
  const greeting = `Hello World!, ${count}`

  return (
    <>
      {greeting}
    </>
  )
}

export default hot(App)
