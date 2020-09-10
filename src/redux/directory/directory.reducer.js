const INITIAL_STATE = {
  sections: [
    {
      title: "iPad",
      imageUrl: "https://cdn.pocket-lint.com/r/s/970x/assets/images/144061-tablets-hands-on-apple-ipad-97-2018-initial-review-pencil-time-image1-kuefzt0cgy-jpg.webp",
      id: 1,
      linkUrl: "shop/ipad",
    },
    {
      title: "Watch",
      imageUrl: "https://cnet1.cbsistatic.com/img/hTz4caLiXOC_KIRIpywKxLs0244=/940x0/2020/06/14/49a5d244-c629-45e8-90a8-ac3f5474c5ac/apple-watch-5-2805.jpg",
      id: 2,
      linkUrl: "shop/watch",
    },
    {
      title: "Accessories",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/1-1572285723.jpg?crop=0.891xw%3A1.00xh%3B0.0554xw%2C0&resize=480%3A270",
      id: 3,
      linkUrl: "shop/accessories",
    },
    {
      title: "iPhone",
      imageUrl: "https://cnet1.cbsistatic.com/img/qt0HMGfzU2L-kKN1d_je1OOSuZ0=/1200x675/2017/10/31/312b3b6e-59b7-499a-aea4-9bc5f9721a21/iphone-x-54.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/iphone",
    },
    {
      title: "MacBook",
      imageUrl: "https://cnet3.cbsistatic.com/img/yjrw7VgWV7a95AvK8Ym0Np4bFXY=/1200x675/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/macbook",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;