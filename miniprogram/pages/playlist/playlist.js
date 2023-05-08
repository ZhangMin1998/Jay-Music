// pages/playlist/playlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImgUrls: [
      {
        // url: 'http://p1.music.126.net/oeH9rlBAj3UNkhOmfog8Hw==/109951164169407335.jpg',
        url:'https://img0.baidu.com/it/u=3866344925,4093216278&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=250'
      },
      {
        url: 'https://5b0988e595225.cdn.sohucs.com/images/20170826/146042e83e3843119faadbc658bef920.jpeg'
        // url: 'http://p1.music.126.net/xhWAaHI-SIYP8ZMzL9NOqg==/109951164167032995.jpg',
      },
      {
        url: 'https://img.dahepiao.com/uploads/allimg/200103/102K310W-0.jpg'
        // url: 'http://p1.music.126.net/Yo-FjrJTQ9clkDkuUCTtUg==/109951164169441928.jpg',
      }
    ],
    playlist: [{"_id":"08560c9e5d042a5c0174f1ca26f1d7b2","copywrier":"热门推荐","playCount":1.4641238e+06,"highQuality":false,"type":0.0,"canDislike":true,"name":"就是开不了口，让她知道，就是那么简单几句我办不到，整颗心悬在半空，我只能够，远远看着，这些我都做得到，但那个人已经不是我。","alg":"cityLevel_unknow","createTime":{"$date":"2019-06-14T23:14:36.746Z"},"id":2.780381322e+09,"picUrl":"https://n.sinaimg.cn/sinacn09/399/w580h619/20180817/305f-hhvciiw3875323.jpg","trackCount":53.0},
    {"_id":"08560c9e5d042a5c0174f1da7aa357aa","highQuality":false,"copywriter":"热门推荐","canDislike":true,"playCount":622822.6,"id":2.740107647e+09,"name":"不知不觉，你已经离开我，不知不觉我跟了这节奏。后知后觉，后知后觉。","type":0.0,"alg":"cityLevel_unknow","createTime":{"$date":"2019-06-14T23:14:36.955Z"},"picUrl":"https://img0.baidu.com/it/u=1249517634,2547135933&fm=253&fmt=auto&app=138&f=JPEG?w=545&h=500","trackCount":20.0},
    {"_id":"08560c9e5d042a5c0174f1de21c7e79e","id":2.828842343e+09,"type":0.0,"name":"放在糖果旁的是我很想回忆的甜，然而过滤了你和我沦落而成美。","picUrl":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F35c22925-e665-429c-b727-9d60e8801b31%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686149969&t=5a1aa0215882925deafb3ffb7c27253f","highQuality":false,"alg":"cityLevel_unknow","playCount":1.785097e+06,"trackCount":52.0,"copywriter":"热门推荐","canDislike":true,"createTime":{"$date":"2019-06-14T23:14:36.982Z"}},
    {"_id":"08560c9e5d042a5d0174f1e67d1bb16f","playCount":7.719329e+06,"highQuality":false,"trackCount":950.0,"alg":"cityLevel_unknow","id":9.17794768e+08,"type":0.0,"name":"天空灰得像哭过，离开你以后，并没有更自由","canDislike":true,"createTime":{"$date":"2019-06-14T23:14:37.037Z"},"copywriter":"热门推荐","picUrl":"https://pic2.zhimg.com/v2-87911643d6f3d5bf78652070f41fab8d_r.jpg"},
    {"_id":"08560c9e5d042a5d0174f1ea32c4c288","type":0.0,"copywriter":"热门推荐","highQuality":false,"createTime":{"$date":"2019-06-14T23:14:37.097Z"},"id":2.201879658e+09,"alg":"cityLevel_unknow","playCount":1.06749088e+08,"name":"从前从前，有个人爱你很久，但偏偏 雨渐渐，把距离吹得好远","picUrl":"https://pic4.zhimg.com/v2-ac7a25b3aea61938f3a419debdab4a2f_r.jpg","canDislike":true,"trackCount":169.0},
    {"_id":"08560c9e5d0829820362a79f4b049d2d","alg":"cityLevel_unknow","name":"一起长大的约定，那样清晰，打过勾的我相信，说好要一起旅行","highQuality":false,"picUrl":"https://pic3.zhimg.com/v2-d8fb5af2ae409842408ed62d89cf35b6_r.jpg","trackCount":158.0,"createTime":{"$date":"2019-06-18T00:00:02.553Z"},"copywriter":"热门推荐","playCount":1.5742008e+06,"canDislike":true,"id":2.79477263e+09,"type":0.0}]
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