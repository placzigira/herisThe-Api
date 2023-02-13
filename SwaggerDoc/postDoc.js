const listAllPosts = {
    tags:['Post'],
    description:"List all Post",
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const getPostById = {
    tags:['Post'],
    description:"Get post by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the post",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const createPost = {
    tags:['Post'],
    description:"Create a post",
    security: [
        {
          token: [],
        },
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        Title:{
                            type:"string",
                        },
                        Description:{
                            type:"string",
                        },
                        Image:{
                            type:"file",
                            description:"the image of the post"
                        },
                        Author:{
                            type:"string"
                        },
                        likes:{
                            type:"Number"
                        }
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}

const deletePost = {
    tags:['Post'],
    description:"Delete the post by id",
    security: [
        {
          token: [],
        },
    ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the post",
            type:"string"
        }
    ],

    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const updatePost = {
    tags:['Post'],
    description:"Update a post",
    security: [
        {
          token: [],
        },
    ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the post",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        Title:{
                            type:"string",
                        },
                        Description:{
                            type:"string",
                        },
                        Image:{
                            type:"file",
                            description:"the image of the post"
                        },
                        Author:{
                            type: "String"
                        },
                        likes:{
                            type: "Number"
                        }
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}
// const likePost = {
//     tags:['Post'],
//     description:"Like a Post",
//     parameters:[
//         {
//             name:"id",
//             in:"path",
//             description:"id of the post",
//             type:"string",
//             example:"63caaf3527b29e1d399896da"
//         }
//     ],
//     responses:{
//         200:{
//             description:"OK",
//             content:{
//                  "application/json":{
//                     type:'object',
//                     example:{
//                         status:"success",
//                         data:[]
//                     }
//                  }
//             }
//         }
//     }
// }
// const unLikePost = {
//     tags:['Post'],
//     description:"unlike a Post",
//     parameters:[
//         {
//             name:"id",
//             in:"path",
//             description:"id of the post",
//             type:"string",
//             example:"63caaf3527b29e1d399896da"
//         }
//     ],
//     responses:{
//         200:{
//             description:"OK",
//             content:{
//                  "application/json":{
//                     type:'object',
//                     example:{
//                         status:"success",
//                         data:[]
//                     }
//                  }
//             }
//         }
//     }
// }
// const createComment = {
//     tags:['Post'],
//     description:"Create a comment",
//     security: [
//         {
//           token: [],
//         },
//     ],
//     requestBody:{
//         content:{
//             "application/json":{
//                 schema:{
//                     type:"object",
//                     properties:{
//                         comment:{
//                             type:"string",
//                         },
                        
//                     }
//                 }
//             }
//         }
//     },
//     parameters:[
//         {
//             name:"id",
//             in:"path",
//             description:"id of the post",
//             type:"string",
//             example:"63caaf3527b29e1d399896da"
//         }
//     ],
//     responses:{
//         201:{
//             description:"Created",
//             content:{
//                 "application/json":{
//                     type:"object",
//                     example:{
//                         status:"success",
//                         data:[]
//                     }
//                 }
//             }
//         }
//     }
// }
exports.postRouteDocs = {
    "/api/post/add":{
        post:createPost
    },
    "/api/post/getpost":{
        get:listAllPosts
    },
    "/api/post/getsingle/{id}":{
        get:getPostById
    },
    "/api/post/delete/{id}":{
        delete:deletePost
    },
    "/api/post/update/{id}":{
        patch:updatePost
    }
    // "/api/posts/like/{id}":{
    //     post:likePost
    // },
    // "/api/posts/unlike/{id}":{
    //     post:unLikePost
    // },
    // "/api/comments/create/{id}":{
    //     post:createComment
    // },
}