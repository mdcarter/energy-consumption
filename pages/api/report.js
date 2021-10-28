import { Session } from 'linky'
import { format, subDays } from 'date-fns'

const dateFormat = 'yyyy-MM-dd'
const daysBefore = 30

const session = new Session({
  accessToken: process.env.ACCESS_TOKEN,
  refreshToken: process.env.REFRESH_TOKEN,
  usagePointId: process.env.USAGE_POINT_ID
})

export default async function handler(_, res) {
  const result = await session.getDailyConsumption(format(subDays(new Date(), daysBefore), dateFormat), format(new Date(), dateFormat))
  res.status(200).json(result)
}
