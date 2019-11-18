/**
 * @Created by xzm on 2019/11/15.
 * @Describe：测试环境部署
 * @Review by：
 * @Modify by：
 * @Version : $ v_1.0 on 2019/11/15
 * @Remark:
 */

const ENV = 'test' // test stage online

const HOSTS = {
    test: {
        MALL_API: 'http://localhost:8090/mobile',
        MALL_TRADE_API: ''
    },
    stage: {
        MALL_API: 'http://localhost:8090/mobile',
        MALL_TRADE_API: ''
    },
    online: {
        MALL_API: '',
        MALL_TRADE_API: ''
    }
}

export const host = HOSTS[ENV].MALL_API