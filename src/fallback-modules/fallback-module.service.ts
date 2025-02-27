import { Injectable } from '@nestjs/common';
import * as path from "path";
@Injectable()
export class FallbackModuleService {
  getBuildPath() : string {
    // 빌드 된 index.html 경로 제공
    return path.join(__dirname, '..', '..', '..', 'client', 'public', 'index.html');
  }
}

