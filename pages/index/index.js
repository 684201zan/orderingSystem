//index.js
//获取应用实例
const app = getApp()
const tabarList = [
  { "name": "点菜", "srcs": "../../image/index/dc.png", "status": 1, "srcchecked": "../../image/index/dc-no.png",   "pageurl":"../onlineOrder/index"},  
  { "name": "外卖", "srcs": "../../image/index/take-out-no.png", "status": 0, "srcchecked": "../../image/index/take-out-no.png", "pageurl": ""},
  { "name": "自提", "srcs": "../../image/index/zt.png", "status": 1, "srcchecked": "../../image/index/dc-no.png","pageurl":""}, 
  { "name": "订座", "srcs": "../../image/index/dz.png", "status": 1, "srcchecked": "../../image/index/dc-no.png","pageurl": ""}, 
  { "name": "取号", "srcs": "../../image/index/qh.png", "status": 1, "srcchecked": "../../image/index/dc-no.png","pageurl":""}
  ]
Page({
  data:{
    tabbarList: tabarList,
    imgUrls: [
      '../../image/banner/banner_01.jpg',
      '../../image/banner/banner_02.jpg',
      '../../image/banner/banner_03.jpg'
    ],
    autoplay:true,
    duration:1000,
    circular:true
  },
  phoneCall:function(event){
    wx.makePhoneCall({
      phoneNumber:event._relatedInfo.anchorTargetText
    })
  }
})
