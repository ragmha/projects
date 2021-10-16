import App from './App'
import { render } from '@utils/test'

describe('App', () => {
  it('should match the snapshot', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
