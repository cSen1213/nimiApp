Page({
  data: {
    nickName: "123"
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: "My App",
      desc: "My App description",
      path: "pages/index/index"
    };
  },
  getQuan() {
    console.log(22);

    my.authorize({
      scopes: "scope.userInfo",
      success: res => {
        my.getAuthUserInfo({
          success: userInfo => {
            console.log("userInfo", userInfo);
            this.setData({ nickName: userInfo.nickName });
            my.alert({
              content: userInfo.nickName
            });
          }
        });
      }
    });
  },
  gominiApp() {
    my.navigateToMiniProgram({
      appId: "3000000026254035",
      extraData: {
        data1: "test"
      },
      success: res => {
        console.log(JSON.stringify(res));
      },
      fail: res => {
        console.log(JSON.stringify(res));
      }
    });
  }
});
