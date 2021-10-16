import Section from './Section'
import { render } from '@utils/test'

describe('Section', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Section>Info</Section>)
    expect(container).toMatchSnapshot()
  })
})
