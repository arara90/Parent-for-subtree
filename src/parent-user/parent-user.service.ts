import { Injectable } from '@nestjs/common';
import { UpdatePhone } from '../../subtree-types/user-service/interface/update-phone.interface'

@Injectable()
export class ParentUserService {
  async updatePhone(opt: UpdatePhone) {
    const user = {
      user_id: opt.user_id,
      name: 'test-user',
      phone: '12341234'
    }

    console.log(`update ${opt.user_id}'s phone number: ${user.phone} => ${opt.phone}`)
    return 'done'
  }
}
