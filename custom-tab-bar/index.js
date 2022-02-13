Component({
  data: {
    active: 0,
    list: [
      {
        icon: "/resources/icons/index.svg",
        icon_active: "/resources/icons/index_active.svg",
        url: "/pages/index/index",
        text: "首页",
      },
      {
        icon: "/resources/icons/makeup.svg",
        icon_active: "/resources/icons/makeup_active.svg",
        url: "/pages/makeup/makeup",
        text: "试妆",
      },
      {
        icon: "/resources/icons/photo.svg",
        icon_active: "/resources/icons/photo_active.svg",
        url: "/pages/photo/photo",
        text: "约拍",
      },
      {
        icon: "/resources/icons/account.svg",
        icon_active: "/resources/icons/account_active.svg",
        url: "/pages/account/account",
        text: "账户",
      },
    ],
  },

  methods: {
    onChange(event) {
      this.setData({ active: event.detail });
      wx.switchTab({
        url: this.data.list[event.detail].url,
      });
    },

    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(
          (item) => item.url === `/${page.route}`
        ),
      });
    },
  },
});
