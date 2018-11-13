Page({
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
      title: 'alipay',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  handleClick(){
    my.alert({
      title: '标题',
      content: '您已授权登录',
      buttonText: '确定',
      success: () => {
        console.log('确定授权')
      },
    });
  },
  handleClick2(){
    my.confirm({
      title: '温馨提示',
      content: '您是否想查询快递单号：1234567890',
      confirmButtonText: '马上查询',
      cancelButtonText: '暂不需要',
      success: (result) => {
        my.alert({
          title: `${result.confirm}`,
        });
      },
    });
  },
  handleClick3(){
    my.prompt({
      title: '标题单行',
      message: '说明当前状态、提示用户解决方案，最好不要超过两行。',
      placeholder: '给朋友留言',
      okButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        my.alert({
          title: JSON.stringify(result),
        });
      },
    });
  },
  handleClick4(){
    my.showToast({
      type: 'success',
      content: '操作成功',
      duration: 3000,
      success: () => {
        my.alert({
          title: 'toast 消失了',
        });
      },
    });
  },
  handleClick5(){
    my.showLoading({
      content: '加载中...',
      delay: 1000,
    });
  },
  handleClick6(){
    // my.showNavigationBarLoading()
  },
  choosePhoneContact(){
    my.choosePhoneContact({
      success: (res) => {
        my.alert({
          content: '姓名：' + res.name + '\n号码：' + res.mobile
        });
      },
    });
  },
  chooseCity(){
    my.chooseCity({
      cities: [
        {
          city: '朝阳区',
          adCode: '110105',
          spell: 'chaoyang'
        },
        {
          city: '海淀区',
          adCode: '110108',
          spell: 'haidian'
        },
        {
          city: '丰台区',
          adCode: '110106',
          spell: 'fengtai'
        },
        {
          city: '东城区',
          adCode: '110101',
          spell: 'dongcheng'
        },
        {
          city: '西城区',
          adCode: '110102',
          spell: 'xicheng'
        },
        {
          city: '房山区',
          adCode: '110111',
          spell: 'fangshan'
        }
      ],
      hotCities: [
        {
          city: '朝阳区',
          adCode: '110105'
        },
        {
          city: '海淀区',
          adCode: '110108'
        },
        {
          city: '丰台区',
          adCode: '110106'
        }
      ],
      success: (res) => {
        my.alert({
          content: res.city + ':' + res.adCode
        });
      },
    });
  },
  datePicker(){
    my.datePicker({
      format: 'yyyy-MM-dd',
      currentDate: '2012-12-12',
      startDate: '2012-12-10',
      endDate: '2018-12-15',
      success: (res) => {
        my.alert({
          content: res.date,
        });
      },
    });
  },
  phonecall(){
    my.makePhoneCall({ number: '13131313131' });
  },
  getAuthCode(){
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        console.log(res);
        my.alert({
          content: res.authCode,
        });
      },
    });
  },
  setStorage(){
    my.setStorage({
      key: 'currentCity',
      data: {
        cityName: '杭州',
        adCode: '330100',
        spell: ' hangzhou',
      },
      success: function() {
        my.alert({ content: '写入成功' });
      }
    });
  },
  getStorage(){
    my.getStorage({
      key: 'currentCity',
      success: function(res) {
        console.log(res);
        my.alert({ content: '获取成功：' + res.data.cityName });
      },
      fail: function(res) {
        my.alert({ content: res.errorMessage });
      }
    });
  },
  getLocation(){
    my.getLocation({
      type: 1,
      success(res) {
        my.hideLoading();
        console.log(res)
        my.openLocation({
          longitude: res.longitude,
          latitude: res.latitude,
          name: res.country + res.province + res.city,
          address: res.province + res.city + res.district + res.streetNumber.street + res.streetNumber.number,
        });
        /* that对象为Page可以设置数据刷新界面
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })
        */
      },
      fail() {
        my.hideLoading();
        my.alert({ title: '定位失败' });
      },
    })
  },
  getsystem(){
    my.getSystemInfo({
      success: (res) => {
        console.log(res);
      }
    })
  }
});
