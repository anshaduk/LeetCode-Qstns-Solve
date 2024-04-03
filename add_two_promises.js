/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    try{
       const res1 = await promise1
       const res2 = await promise2
       return res1+res2
    }
    catch(error){
        throw error
    }
}