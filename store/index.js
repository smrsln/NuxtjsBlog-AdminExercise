import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state : {
            fetchedPosts : []
        },
        mutations : {
            setPosts(state, posts){
                state.fetchedPosts = posts
            }
        },
        actions : {
            nuxtServerInit(vuexContext, context){
              vuexContext.commit("setPosts", [
                  {
                      id: 1,
                      title: "Article Title 1",
                      subTitle: "Article Subtitle 1",
                      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                      author: "Orhan Asım"
                  },
                  {
                    id: 2,
                    title: "Article Title 2",
                    subTitle: "Article Subtitle 2",
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    author: "Orhan Asım"
                }
              ])
            },
            setPosts(vuexContext, posts){
                vuexContext.commit("setPosts", posts)
            }
        },
        getters : {
            getPosts(state){
                return state.fetchedPosts
            }
        }
    })
}

export default createStore