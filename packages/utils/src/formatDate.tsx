import { formatDistanceToNow } from 'date-fns'

type DateArg = string | Date

const d = (date: DateArg) => (typeof date === 'string' ? new Date(date) : date)

export const formatDate = {
  ago: (date: DateArg) => `${formatDistanceToNow(d(date)).replace('about ', '')} ago`,
}
