import { render, screen } from '@testing-library/react'
import App from './App'

test('React 앱 렌더링 학습 링크 포함 여부 확인', () => {
  render(<App />)
  const linkElement = screen.getByText(/React를 배워보세요/i)
  expect(linkElement).toBeInTheDocument()
})
