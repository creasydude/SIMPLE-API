import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs'; 
const swaggerJsDoc = YAML.load(__dirname +"\\api.yaml");
export const swaggerUIServe = swaggerUI.serve;
export const swaggerUISetup = swaggerUI.setup(swaggerJsDoc);