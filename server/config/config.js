
process.env.AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY || 'AKIAIGYP2SMNLTBB43KQ';

process.env.AWS_SECRET_ACCESS = process.env.AWS_SECRET_ACCESS || '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';
//  Puerto

process.env.PORT = process.env.PORT || 3500;

//  Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//  Vencimiento del token
process.env.CADUCIDAD_TOKEN = '1h';

//  SEED
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//  Base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/newsArkix';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;
