import Plugin from 'stc-plugin';
import {extend} from 'stc-helper';

let options = null;
/**
 * Use ESlint to verify code
 */
export default class EmptyFile extends Plugin {
  /**
   * run
   */
  async run(){
    let content = await this.getContent('utf8');
    return {isEmpty:content.length === 0};
  }
  /**
   * update
   */
  update(data){
      if(data.isEmpty){
        this.error('File can\'t be empty');
      }
  }
  /**
   * use cluster
   */
  static cluster(){
    return false;
  }
  /**
   * enable cache
   */
  static cache(){
    return false;
  }
  /**
   * set default include file
   */
   static include() {
     return /\.*$/i;
   }
}