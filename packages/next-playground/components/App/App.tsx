import { FC } from 'react'
import GlobalStyle from './App.styles'

export const App: FC = ({ children }) => {
  return (
    <main>
      {children}
      <GlobalStyle />
    </main>
  )
}

export default App
