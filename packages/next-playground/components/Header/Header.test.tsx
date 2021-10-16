import Header from './Header'
import { render } from '@utils/test'

describe('Header', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Header active={false} />, {
      router: { pathname: '/' },
    })
    expect(container).toMatchSnapshot()
  })
})
