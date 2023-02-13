const listAllUsers = {
    tags:['User'],
    description:"List all users",
    security: [
        {
          token: [],
        },
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

const createUser = {
tags:['Auth'],
description:"Create a User",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    Username:{
                        type:"string",
                        description:"user name",
                        example:"placzi"
                    },
                    Firstname:{
                        type:"string",
                        description:"user name",
                        example:"Placide"
                    },
                    Lastname:{
                        type:"string",
                        description:"user name",
                        example:"ZIGIRA"
                    },
                    Email:{
                        type:"string",
                        description:"user email",
                        example:"placzigira@gmail.com"
                    },
                    Password:{
                        type:"string",
                        description:"user password",
                        example:"123456"
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

const login = {
tags:['Auth'],
description:"Login",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    Username:{
                        type:"string",
                        description:" user name",
                        example:"placzi"
                    },
                    Password:{
                        type:"string",
                        description:" user password",
                        example:"123456"
                    },
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

const getUserById = {
tags:['User'],
description:"Get the user by id",
security: [
    {
      token: [],
    },
],
parameters:[
    {
        name:"id",
        in:"path",
        description:"id of user",
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

const deleteUserById = {
tags:['User'],
description:"Delete the user by id",
security: [
    {
      token: [],
    },
],
parameters:[
    {
        name:"id",
        in:"path",
        description:"id of user",
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

const updateUserById = {
tags:['User'],
description:"Update user by id",
security: [
    {
      token: [],
    },
],
  parameters:[
    {
        name:"id",
        in:"path",
        description:"id of user",
        type:"string",
        example:"63caaf3527b29e1d399896da"
    }
],
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    Username:{
                        type:"string",
                        description:"Username ",
                        example:"shooter@gmail.com"
                    },
                    Password:{
                        type:"string",
                        description:"user password",
                        example:"12345"
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

exports.userRouteDocs = {
"/api/auth/signup":{
    post:createUser,
},
"/api/auth/login":{
    post:login,
},
 "/api/user/list":{
    get:listAllUsers,
},
"/api/user/list/{id}":{
    get:getUserById,
},
"/api/user/update/{id}":{
    put:updateUserById,
},
"/api/user/delete/{id}":{
    delete:deleteUserById
},
};