// 在这个文件中创建所有的获取数据的函数
import axios from '@/axios'
//获取头部导航列表信息
export const getTypes = () => axios.get('/types')

// 获取内容列表信息
export const getList = (id,page=1) => axios.get(`/articles/${id}/page/${page}`)
// 获取top10列表数据
export const getTop10List = (id) => axios.get(`/articles/${id}/top10`)
//请求详情页数据
export const getArticleData = (id) => axios.get(`/article/${id}`)

//请求轮播图模块数据
 export const getBannerData = () => axios.get(`/articles/rand`)
//  获取other数据
export const getOtherData = (id) => axios.get(`/articles/${id}/rand`)
//用户登陆
export const login = (user) => axios.post(`/user/login`,user)
//获取评论
export const getComments = (article_id,page=1) => axios.get(`/comments/${article_id}/page/${page}`)

//用户评论
export const sendComment = ({article_id,content}) => axios.post('/comment',{article_id,content})

//删除评论
export const delUserContent = (comment_id) => axios.delete(`/comment/${comment_id}`)

//判断token是否有效
export const authToken = () => axios.post('/user/token')