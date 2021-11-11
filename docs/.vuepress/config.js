module.exports = {
    dest:".site",
    title:"chrisxyqのblog",
    description:"一江水东去，幸得两轮月",
    head:[["link",{
        rel:"icon",href:"/logo.jpg"
    }]],
    base:"/",
    markdown:{
        lineNumbers:false
    },
    themeConfig:{
        nav:[
            {text:"JavaSE",link:"/JavaSE/"},
            {text:"Spring",link:"/Spring/"},
            {text:"github",link:"https://github.com/chrisxyq"}
        ],
        sidebar:"auto",
        sidebarDepth:2,

    }

}