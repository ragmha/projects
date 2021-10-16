import ErrorMessage from './ErrorMessage'
import { render } from '@utils/test'

describe('ErrorMessage', () => {
  it('should match the snapshot', () => {
    const { container } = render(<ErrorMessage message="hello world!" />)
    expect(container).toMatchSnapshot()
  })
})
