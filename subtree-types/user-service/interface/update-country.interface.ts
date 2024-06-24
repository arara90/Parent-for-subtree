import { CountryCode } from '../type/country_code.type'

export interface UpdateUserCountry {
  country_code: CountryCode
  user_id: number
}
