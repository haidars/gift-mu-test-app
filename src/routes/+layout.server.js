export const load = async () => {

    const { env: { NODE_ENV, HOST, PORT } } = process;

    return {
        env: NODE_ENV,
        host: HOST,
        port: PORT,
    };
};
