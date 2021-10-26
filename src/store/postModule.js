
export const postModule = {
    state:()=>({
        posts:[
       
        ],
        searchQuery: '',
        selectedSort:'',
        page:1,
        limit:10,
        totalPage:0,
        sortOptions:[
          {value:'title', name:'По названию'},
          {value:'body', name:'По содержимому'}
  
  ]
    }),
    getters:{

    },
    mutations:{
        setPosts(state,posts){
            state.posts = posts;
        }
    },
    actions:{
        
    }
}