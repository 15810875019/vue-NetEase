import  {reqList} from '../../api/index'
import {RECRIVE_FENLEI} from '../mutations-type'

const state = {
    fenleiList:[]
};


const mutations = {
    [RECRIVE_FENLEI](state,fenleiList){
         // mutation直接操作状态
    state.fenleiList = fenleiList;
    }
};

const actions = {
     //获取分类获得的列表
    async getList({commit}){
         //发送ajax请求
        const result = await reqList()
        console.log(result)
        if(result.code === 0){
            commit(RECRIVE_FENLEI,result.data)
        }
     }
}


export default {
    state,
    mutations,
    actions,
 
  }
  