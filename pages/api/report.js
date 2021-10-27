import { Session } from 'linky'

export default async function handler(_, res) {
  const session = new Session({
    accessToken: process.env.ACCESS_TOKEN,
    refreshToken: process.env.REFRESH_TOKEN,
    usagePointId: process.env.USAGE_POINT_ID
  })

  const result = await session.getDailyConsumption('2021-10-01', '2022-10-27')
  res.status(200).json(result)
}
