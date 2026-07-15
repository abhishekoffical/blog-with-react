import conf from '../config.js';
import {Client, ID, Databases ,Storage,Query } from "appwrite"; 
  

export class Service{
    client = new Client();
    database;
    storage;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf. appwriteProjectId)
        //  .setKey(conf.appwriteApikey);
      this.database = new Databases(this.client);
      this.storage = new Storage(this.client);
    }
    async createPost(title,slug,content,featuredImage,status,userId){
        try {
              return await  this.database.createDocument({
                  databaseId: conf.appwriteDatabaseCollection,
                  collectionId:  conf.appwriteCollectionId,
                 documentId: slug,
                 data: {
                       title,
                       content,
                       featuredImage,
                       status,
                       userId
                 }

                })
            }
        catch (error) { console.log("Appwrite service:: databasecreation", error)
            return false
        }
        
    }
    async updatePost(slug,title,content,featuredImage,status){
        try { return await this.database.updateDocument({
                 databaseId: conf.appwriteDatabaseCollection,
                  collectionId:  conf.appwriteCollectionId,
                 documentId: slug,
                 data: {
                       title,
                       content,
                       featuredImage,
                       status,
                       
                 }

        })
            
        } catch (error) { console.log("apprite service::updatepost",error)
            return false
            
        }
    }
    async deletePost(slug){
        try {  
           return await this.database.deleteDocument({
                databaseId: conf.appwriteDatabaseCollection,
                  collectionId:  conf.appwriteCollectionId,
                 documentId: slug,
            })
            
        } catch (error) {console.log("appwrite service::deletepost",error)
            
        }
    }
    async getPost(slug){
        try { 
            return await this.database.getDocument({
               databaseId: conf.appwriteDatabaseCollection,
                  collectionId:  conf.appwriteCollectionId,
                 documentId: slug  
            })
            
        } catch (error) { console.log("appwrite service::getdocument",error)
            
        }
    }
    async listPosts(queries=[Query.equal("status",["active"])]){
        try { 
            return await this.database.listDocuments({
            databaseId: conf.appwriteDatabaseCollection,
                  collectionId:  conf.appwriteCollectionId,
               queries: queries })
            
        } catch (error) { console.log("appwrite service::listpost",error)
            
        }
    }


    //storage part yaha se
    async uploadFile(file){
        try { 
            return await this.storage.createFile({
    bucketId:  conf.appwriteBucketId,
    fileId: ID.unique(),
    file
   //  permissions: [Permission.read(Role.any())] 
  });
            
        } catch (error) { console.log("appwrite::uploadfile",error)
            
        }
    }
    async deleteFile(fileId){
        try {   await this.storage.deleteFile({
             bucketId:  conf.appwriteBucketId,
             fileId:fileId
        })
        return true
        } catch (error) {
            console.log("app::deletefile",error)
            return false
        }
       
    }
            getFilePreview(fileId){
                return this.storage.getFilePreview(
                    {
                         bucketId:  conf.appwriteBucketId,
                           fileId:fileId
                    }
                )
            
        }
}











const service =new Service()
 export default service
