
module.exports =  {
    checkRole: async (req, res, next) => {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const role = req.headers.authorization;

            console.log(role);
            // if(role === "USER"){
            //     res.status(403).json({message: "Нет доступа"});
            // }
            // else if(role === "ADMIN"){
            //     req.user = role;
            //     next()
            // }else if(role === "RECORDER"){
            //
            //     req.user = role;
            //     next()
            // }
            // else {
            //     res.status(401).json({message: "Немає доступу"})
            // }

        }catch (e) {
            res.status(401).json({message: "Немає доступу"})
        }
    }
}

