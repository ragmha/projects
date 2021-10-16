import Hello from './Hello'
import { render } from '@utils/test'

describe('Hello', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Hello name="Miau" />)
    expect(container).toMatchSnapshot()
  })
})
