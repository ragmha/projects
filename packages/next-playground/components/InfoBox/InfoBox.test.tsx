import InfoBox from './InfoBox'
import { render } from '@utils/test'

describe('InfoBox', () => {
  it('should match the snapshot', () => {
    const { container } = render(<InfoBox>Info</InfoBox>)
    expect(container).toMatchSnapshot()
  })
})
