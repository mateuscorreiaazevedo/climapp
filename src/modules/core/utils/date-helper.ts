import { format } from 'date-fns'

export default {
  currentDate: (value: string | Date) => format(new Date(value), 'eeee, kk:mm'),
  hour: (value: string | Date) => format(new Date(value), 'kk:mm')
}
