
const initState = [
    {
        id: 1,
        imgUrl: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics5.baidu.com%2Ffeed%2F30adcbef76094b3631693bc795b3f1d38c109dae.jpeg%3Ftoken%3De822b381468e5a86dcb90255da31cec6&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1656435600&t=3a7f8a974d6ecfff658351ec53114483',
        url: "https://www.baidu.com/",
        title: "最新小米手机上线了"
    },
    {
        id: 2,
        imgUrl: 'https://ms.bdimg.com/pacific/0/pic/1648256326_-693118599.jpg?x=0&y=0&h=146&w=259&vh=146.00&vw=259.00&oh=146.00&ow=259.00',
        url: "https://www.baidu.com/",
        title: "最新红米手机上线了"
    }
]

const noticeReduce = (state = initState, action) => {
    console.log('action', action)
    switch(action.type) {   
        default:
            return state;
    }

}

export default noticeReduce