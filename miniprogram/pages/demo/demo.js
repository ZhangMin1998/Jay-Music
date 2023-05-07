// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: ['aa', 'bb', 'cc', 'dd'],
    arrObj: [{
      id: 1,
      name: 'wxml'
    }, {
      id: 2,
      name: 'js'
    }, {
      id: 3,
      name: 'wxss'
    }, {
      id: 4,
      name: 'json'
    }],
  },
  sort () {
    const length = this.data.arr.length
    for (let i = 0; i < length; i++) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.arr[x]
      this.data.arr[x] = this.data.arr[y]
      this.data.arr[y] = temp
    }
    this.setData({
      arr: this.data.arr
    })
  },
  sortObj() {
    const length = this.data.arrObj.length
    for (let i = 0; i < length; i++) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.arrObj[x]
      this.data.arrObj[x] = this.data.arrObj[y]
      this.data.arrObj[y] = temp
    }
    this.setData({
      arrObj: this.data.arrObj
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})