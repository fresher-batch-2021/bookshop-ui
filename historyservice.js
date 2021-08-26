const dbusername = 'apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry';
const dbpassword = '69c1d2737d371d9f6b7f6009287e6ccc';
const basicAuth = 'Basic ' + btoa(dbusername + ':' + dbpassword);
class HistoryService {
   static getAllData() {
      const url = "https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud/bookshop_history/_all_docs?include_docs=true";
      return (axios.get(url, { headers: { 'Authorization': basicAuth } }));

   }
}