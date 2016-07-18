import Plugin from 'stc-plugin';
import {extend} from 'stc-helper';

let options = null;
/**
 * Use ESlint to verify code
 */
export default class MovePlugin extends Plugin {
  /**
   * run
   */
  async run(){

  }
  /**
   * update
   */
  update(data){

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