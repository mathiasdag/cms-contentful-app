import { format } from 'date-fns'

export default function DateComponent({ dateString }) {
  return (
    <time dateTime={dateString}>
      {format(new Date(), 'LLLL	d, yyyy')}
    </time>
  )
}
