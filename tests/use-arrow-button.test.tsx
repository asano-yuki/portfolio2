import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import useArrowButton from '../custom/use-arrow-button'

// テスト用コンポーネント
const TestComp: React.FC = () => {
  const { direction, getCurrentArrowParam, getChangedArrowParam } = useArrowButton('left')
  return (
    <>
      <p data-testid='value'>{direction}</p>
      <button
        data-testid='current'
        onClick={getCurrentArrowParam}
      />
      <button
        data-testid='change'
        onClick={getChangedArrowParam}
      />
    </>
  )
}

describe('use-arrow-button.tsx', () => {
  beforeEach(() => {
    render(<TestComp />)
  })

  test('現在の矢印の向きを取得', () => {
    fireEvent.click(screen.getByTestId('current'))
    expect(screen.getByTestId('value').textContent).toBe('left')
  })

  test('矢印の向きを変更(left → right)', () => {
    fireEvent.click(screen.getByTestId('change'))
    expect(screen.getByTestId('value').textContent).toBe('right')
  })
})
