/*
  mock数据接口
*/

import Mock from 'mockjs'
import fenlei_data from './fenlei_zhuanqu.json' //data已经是js对象了(webpack内部会自动解析json数据)
import shouye_data from './shouye_data.json' //data已经是js对象了(webpack内部会自动解析json数据)


//提供分类的接口
Mock.mock('/fenlei_data',{
    code:0,
    data:fenlei_data
})
//提供首页的接口
Mock.mock('/shouye_data',{
    code:0,
    data:shouye_data
})

//不需要向外暴露anythings 




