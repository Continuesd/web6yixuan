export class HttpUrls {
    //图片上传的接口
    imgUploads: string = "/wangEditor/upload";
    HOST_BASEURL: string = "http://www.niuwan.net/";
    //话题模块相关接口
    TOPIC_ANSWER_COMMENT_LIST: string = "/community/topic/answerCommentList";//回答问题列表
    TOPIC_ANSWER_CREATE: string = "/community/topic/answerCreate";//创建回答问题
    TOPIC_ANSWER_LIST: string = "/community/topic/answerList";//回答列表用于下拉加载更多
    TOPIC_COMMENT_ANSWER: string = "/community/topic/commentAnswer";
    TOPIC_CONCERN: string = "/community/topic/concern";//话题详情中的关注问题
    TOPIC_CREATE: string = "/community/topic/create";//
    TOPIC_DETAIL: string = "/community/topic/detail";//话题详情
    TOPIC_RECOGNISE_ANSWER: string = "/community/topic/recogniseAnswer";//认可回答接口
    TOPIC_UPDATE: string = "/community/topic/update";
    TOPIC_LISTALL: string = "/community/topic/listAll";//大家在聊的所有内容
    TOPIC_LISTBASECATEGORY: string = "/community/topic/listBaseCategory";//话题基础类型列表
    ACCOUNT_USERINFO: string = '/account/userInfo';
    TOPIC_CANCELCONCERN: string = "/community/topic/cancelConcern";
}