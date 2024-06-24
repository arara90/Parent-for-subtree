import { Body, Controller, Put } from '@nestjs/common'
import { ParentUserService } from './parent-user.service'
import { UpdatePhone } from '../../subtree-types/user-service/interface/update-phone.interface'

@Controller('parent-user')
export class ParentUserController {
  constructor(private readonly parentUserService: ParentUserService) {}

  @Put()
  async updatePhone(
    @Body() body: UpdatePhone,
  ): Promise<string> {
    return this.parentUserService.updatePhone(body)
  }
}
