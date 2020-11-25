export interface Props {
  getDatePeriod : (start: string, end?: string | null) => string
}

/**
 * 年月日を加工するための処理群
 */
const useMakeDate = (): Props => {
  // 年月表記による期間の取得
  const getDatePeriod = (start: string, end?: string | null): string => {
    const _start    = new Date(start)
    const startDate = `${_start.getFullYear()}年${_start.getMonth() + 1}月`
    const _end    = new Date(end)
    const endDate = end ? `${_end.getFullYear()}年${_end.getMonth() + 1}月` : ''
    return `${startDate}～${endDate}`
  }

  return { getDatePeriod }
}

export default useMakeDate
