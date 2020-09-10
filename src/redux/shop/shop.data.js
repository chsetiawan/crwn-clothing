const SHOP_DATA = {
  ipad: {
    id: 1,
    title: 'iPad',
    routeName: 'ipad',
    items: [
      {
        id: 1,
        name: 'iPad Pro 12.9"',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/cKFq2Q6MxBnaTTstw5Zpt9-1200-80.jpg',
        price: 899
      },
      {
        id: 2,
        name: 'iPad 10.5" (2019 Model)',
        imageUrl: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/149321-tablets-review-review-apple-ipad-102-inch-initial-review-tried-and-trusted-goes-bigger-image1-npbhfzogfj-jpg.webp',
        price: 799
      },
      {
        id: 3,
        name: 'iPad 10.5" (2018 Model)',
        imageUrl: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/04/P4110002.jpg',
        price: 799
      },
      {
        id: 4,
        name: 'iPad 6 (2018) 32GB WiFi',
        imageUrl: 'https://i-cdn.phonearena.com/images/review/4513-image/Apple-iPad-2018-Review.jpg',
        price: 699
      },
      {
        id: 5,
        name: 'iPad Mini 4 LTE',
        imageUrl: 'https://cnet2.cbsistatic.com/img/4CxsqHrHTCh49DVNlcD0MH5epqg=/1200x675/2014/10/16/1e069af5-0ad2-493a-ae08-1fb9fbaad48f/ipad-mini-1-of-9.jpg',
        price: 599
      },
      {
        id: 6,
        name: 'iPad Mini 4 WiFi',
        imageUrl: 'https://zdnet4.cbsistatic.com/hub/i/r/2019/04/03/9945dfb2-261f-4fad-bc15-5e3dec8412cb/resize/1200x900/d37a61b2039e4143c594be85f929314c/apple-ipad-mini-2019-8.jpg',
        price: 549
      },
      {
        id: 7,
        name: 'iPad Air',
        imageUrl: 'https://i-cdn.phonearena.com/images/article/125998-two_lead/2020-iPad-Air-will-probably-be-cheaper-than-the-current-model-despite-notable-upgrades.jpg',
        price: 499
      },
      {
        id: 8,
        name: 'iPad 2 WiFi',
        imageUrl: 'https://o.aolcdn.com/images/dims?thumbnail=980%2C653&quality=95&image_uri=http%3A%2F%2Fwww.blogcdn.com%2Fwww.engadget.com%2Fmedia%2F2011%2F03%2Fipadrev81.jpg&client=amp-blogside-v2&signature=96a173f5ed2377753d7c6defd624cb1897777986',
        price: 349
      },
      {
        id: 9,
        name: 'iPad (Original)',
        imageUrl: 'https://assets.catawiki.nl/assets/2016/10/18/0/b/b/0bb91c4a-9548-11e6-9f94-c6cff7c51e6b.jpg',
        price: 249
      }
    ]
  },
  watch: {
    id: 2,
    title: 'Apple Watch',
    routeName: 'watch',
    items: [
      {
        id: 10,
        name: 'Apple Watch Series 5 LTE',
        imageUrl: 'https://zdnet1.cbsistatic.com/hub/i/r/2019/10/03/6c74ca29-87f3-4cd3-8430-08d2865866d6/thumbnail/770x433/d99b20e4f054cef5abb53af3d0f9f23f/apple-watch-series-5-1.jpg',
        price: 549
      },
      {
        id: 11,
        name: 'Apple Watch Series 5 WiFi',
        imageUrl: 'https://9to5google.com/wp-content/uploads/sites/4/2019/02/google_keep_apple_watch_3.jpg?quality=82&strip=all',
        price: 499
      },
      {
        id: 12,
        name: 'Apple Watch Series 4 LTE',
        imageUrl: 'https://icdn3.digitaltrends.com/image/digitaltrends/apple-watch-series-4-review_11.jpg',
        price: 449
      },
      {
        id: 13,
        name: 'Apple Watch Series 4 WiFi',
        imageUrl: 'https://miro.medium.com/proxy/1*H7H4yUI8fVLAyVbqf__I6A.jpeg',
        price: 399
      },
      {
        id: 14,
        name: 'Apple Watch Series 3 LTE',
        imageUrl: 'https://icdn2.digitaltrends.com/image/digitaltrends/apple-watch-series-3-lifestlye-waterproof.jpg',
        price: 349
      },
      {
        id: 15,
        name: 'Apple Watch Series 3 WiFi',
        imageUrl: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190919225636-9-underscored-apple-watch-series3.jpg',
        price: 299
      },
      {
        id: 16,
        name: 'Apple Watch Series 2',
        imageUrl: 'https://www.macworld.co.uk/cmsdata/reviews/3646331/apple_watch_2_review_800home_thumb1200_4-3.jpg',
        price: 249
      },
      {
        id: 17,
        name: 'Apple Watch Series 1',
        imageUrl: 'https://www.imore.com/sites/imore.com/files/styles/w1600h900crop/public/field/image/2019/11/apple-watch-series-1-hero.jpg',
        price: 199
      }
    ]
  },
  accessories: {
    id: 3,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 18,
        name: 'Airpod Pros',
        imageUrl: 'https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2019/11/01/fca6da0e-fc77-11e9-acf9-cafedce87d15_image_hires_154757.jpg',
        price: 219
      },
      {
        id: 19,
        name: 'Airpods 2',
        imageUrl: 'https://www.macworld.co.uk/cmsdata/reviews/3695014/apple_airbuds_2_review_2_thumb1200_4-3.jpg',
        price: 149
      },
      {
        id: 20,
        name: 'iPhone 11 Pro Max Leather Case',
        imageUrl: 'https://i.ytimg.com/vi/Pw6hZHp9hKI/maxresdefault.jpg',
        price: 59
      },
      {
        id: 21,
        name: 'Magic Keyboard 2',
        imageUrl: 'https://images.idgesg.net/images/article/2017/12/imac-pro-space-gray-keyboard-100744336-large.jpg',
        price: 79
      },
      {
        id: 22,
        name: 'Magic Trackpad',
        imageUrl: 'https://i.ytimg.com/vi/0hXayzj-wUY/maxresdefault.jpg',
        price: 49
      }
    ]
  },
  iphone: {
    id: 4,
    title: 'iPhone',
    routeName: 'iphone',
    items: [
      {
        id: 23,
        name: 'iPhone 11 Pro Max',
        imageUrl: 'https://live.mrf.io/statics/i/ps/fscl01.fonpit.de/userfiles/7043987/image/Apple/iPhone-11-Pro-Max/NextPit-iPhone11ProMax-Review-37-w810h462.jpg',
        price: 1199
      },
      {
        id: 24,
        name: 'iPhone 11 Pro',
        imageUrl: 'https://sm.pcmag.com/t/pcmag_in/review/a/apple-ipho/apple-iphone-11-pro_zsc8.640.jpg',
        price: 1099
      },
      {
        id: 25,
        name: 'iPhone XS Max',
        imageUrl: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/145713-phones-review-review-xs-max-hardware-image1-yjaashvbos.jpg',
        price: 899
      },
      {
        id: 26,
        name: 'iPhone X',
        imageUrl: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2017/11/DSCF9456.jpg',
        price: 799
      },
      {
        id: 27,
        name: 'iPhone 8 Plus',
        imageUrl: 'https://www.imore.com/sites/imore.com/files/styles/w1600h900crop_wm_brw/public/field/image/2018/01/iphone-8-plus-space-grey-1.jpg?itok=Vd8Axec5',
        price: 749
      },
      {
        id: 28,
        name: 'iPhone 5S',
        imageUrl: 'https://www.slashgear.com/wp-content/uploads/2013/09/iphone_5_silver_0-580x422112-580x420.jpg',
        price: 499
      },
      {
        id: 29,
        name: 'iPhone 3G',
        imageUrl: 'https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_blw/public/field/image/2015/08/history-iphone-3g-back-hero.jpg',
        price: 299
      }
    ]
  },
  macbook: {
    id: 5,
    title: 'MacBook',
    routeName: 'macbook',
    items: [
      {
        id: 30,
        name: 'MacBook Pro 16-inch',
        imageUrl: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/150265-laptops-review-macbook-pro-16-inch-review-a-typing-power-house-image1-ga7cf05o2j-jpg.webp',
        price: 2299
      },
      {
        id: 31,
        name: 'MacBook Pro 15-inch (2018)',
        imageUrl: 'https://icdn2.digitaltrends.com/image/digitaltrends/macbook-pro-15-2019-review-1-1200x630-c-ar1.91-e.jpg',
        price: 1899
      },
      {
        id: 32,
        name: 'MacBook Pro 13-inch (2015)',
        imageUrl: 'https://i.ytimg.com/vi/cKWAhBDQ2LU/maxresdefault.jpg',
        price: 1699
      },
      {
        id: 33,
        name: 'MacBook Pro 15-inch (Retina)',
        imageUrl: 'https://cnet3.cbsistatic.com/img/Y4qPxw_TtHufPQB9prYyB2dQgGQ=/1200x675/2012/06/19/4c969032-8bb7-11e3-a24e-d4ae52e62bcc/MacBook_Pro_15inch_3533010905.jpg',
        price: 1499
      },
      {
        id: 34,
        name: 'MacBook Pro 13-inch (2012)',
        imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/wwwsecondhandmy/items/macbook-pro-13-inch-mid-2012-0-0-1.jpg',
        price: 599
      }
    ]
  }
};

export default SHOP_DATA;
