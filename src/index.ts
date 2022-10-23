
import "reflect-metadata";
import 'dotenv/config';
import app from "./app";
import {MongoDataSource} from "./configs/db";

async function main(){
    try {
        await MongoDataSource.initialize().catch(error => {
            MongoDataSource.manager.release();
            console.error("TypeORM mongo connection error: ", error)
        });

        console.error('Database conected');
        app.listen(process.env.PORT || 4000);
        console.info('Server is listening on port', process.env.PORT);
        
    } catch (error) {
        console.error(error);
    }
    
}

main();