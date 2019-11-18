package com.mobile.weiget;

import java.io.OutputStream;

/**
 * @Created by xzm on 2019/11/10.
 * @Describe：图片生成器
 * @Review by：
 * @Modify by：
 * @Version : $ v_1.0 on 2019/11/10
 * @Remark:
 */
public class VcodeGenerator {

    private int height = 60;
    private int width = 160;
    private int charCnt = 4;
    private OutputStream os;

    public VcodeGenerator(OutputStream os) {
        this.os = os;
    }

    public VcodeGenerator(int height, int width, int charCnt, OutputStream os) {
        this.height = height;
        this.width = width;
        this.charCnt = charCnt;
        this.os = os;
    }

}
