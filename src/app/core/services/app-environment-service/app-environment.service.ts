import { Injectable } from '@angular/core';
import { RequestService } from '../request-service/request.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppEnvironmentService {

  private configFromJson?: any = undefined;
  constructor(private requestService: RequestService) {}

  /**
   * 從 assets/configs.json 取得設定值
   */
  public retrievingConfigsFromJson(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.requestService.get<any>('configs.json').subscribe({
        next: (response) => {
          this.configFromJson = response;
          resolve(true);
        },
        error: (errors: HttpErrorResponse) => {
          this.configFromJson = {};

          if (errors.status !== 404) {
            console.error(errors);

            reject(errors.message);

            return;
          }

          resolve(true);
        },
      });
    });
  }

  /**
   * 取得設定值
   *
   * 若 configs.json 與 environment.ts 皆存在相同值，將以 configs.json 為主
   *
   * @param key 設定值鍵名
   * @returns 設定值
   */
  public async getConfig<T>(key: string): Promise<T | undefined> {
    if (this.configFromJson === undefined) {
      await new Promise<void>((resolve) => setTimeout(resolve, 100));
      return this.getConfig<T>(key);
    }

    if (Object.keys(this.configFromJson).includes(key)) {
      return this.configFromJson[key];
    }

    if (Object.keys(environment).includes(key)) {
      return environment[key as keyof typeof environment] as T;
    }

    return undefined;
  }
}
