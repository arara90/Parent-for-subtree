import { Injectable } from '@nestjs/common';
import { UpdatePhone } from '../../subtree-types/user-service/interface/update-phone.interface'

@Injectable()
export class ParentUserService {

  async updatePhone(opt: UpdatePhone) {
    console.log(opt)
    return 'done'
  }
}
