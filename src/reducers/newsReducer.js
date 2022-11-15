const initialData = {
    news:[
        {
            id: 1,
            title: "The rich also cry",
            photo: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261__340.jpg",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
        },
        {
            id: 2,
            title: "Chike and the river",
            photo: "https://cdn.pixabay.com/photo/2018/01/24/19/49/people-3104635__340.jpg",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
        },
        {
            id: 3,
            title: "Things fall apart",
            photo: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090__340.jpg",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
        },
    ]
}

const newsReducer = (state = initialData, action)=>{
    switch(action.type){
        case "ADD_NEWS": return{
            ...state,
            news: [...state.news, action.payload]
        }
        case "EDIT_NEWS": return{
            ...state,
            news: state.news.map((newMan)=>{
                if(newMan === action.payload.oldnews)
                newMan = action.payload.newnews
                return newMan
            })
        }
        default: {
            return state
        }
    }
}

export default newsReducer