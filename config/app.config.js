export const PORT = 3000;
export const environment = {
    development: {
        serverURL: `http://mongodb:${PORT}/`,
        dbString: 'mongodb://root:root12345@mongodb:27017'
    },
    production: {
        serverURL: `http://mongodb:${PORT}/`,
        dbString: 'mongodb://root:root12345@mongodb:27017/graphql-prod'
    }
}