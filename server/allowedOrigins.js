
const { env: { ALLOWED_ORIGIN } } = process;

console.log('ALLOWED_ORIGIN: ', ALLOWED_ORIGIN);

export const allowedOrigins = ALLOWED_ORIGIN?.split(',')?.reduce((reduced, o) => {

    if (o && typeof o === 'string') {

        const originLowered = o.trim().toLowerCase();

        if (originLowered) {

            reduced.push(originLowered);
        }
    }

    return reduced;
}, []) ?? [];


export const allowedOriginsExpressMiddleware = (req, res, next) => {

    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    let originSet = false;

    if (req?.headers?.origin) {

        const { headers: { origin } } = req;

        if (typeof origin === 'string') {

            const incomingLowered = origin.trim().toLowerCase();

            if (allowedOrigins.indexOf(incomingLowered) >= 0) {

                res.setHeader('Access-Control-Allow-Origin', origin);
                originSet = true;
            }
        }
    }

    if (!originSet) {

        res.setHeader('Access-Control-Allow-Origin', `${allowedOrigins[0]}`);
    }

    if (req.method === 'OPTIONS') {

        return res.sendStatus(200);
    }

    next();
};

export const allowedOriginsSocketIOMiddleware = (requestOrigin, callback) => {

    if (requestOrigin && typeof requestOrigin === 'string') {

        const incomingLowered = requestOrigin.trim().toLowerCase();

        if (allowedOrigins.indexOf(incomingLowered) >= 0) {

            callback(null, true);
            return;
        }
    }

    callback(new Error('CORS not allowed'));
};
