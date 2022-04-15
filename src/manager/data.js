import minimongo from "minimongo";
const HistoryManager = () => {
  var obj = {};
  var IndexedDb = minimongo.IndexedDb;
  var db = new IndexedDb({ namespace: "MyTranslations" }, function () {
    // Add a collection to the database
    db.addCollection("translations");
    obj.addTranslation = (phrase, translation, language) => {
      return new Promise((resolve, reject) => {
        const data = {
          _phrase: phrase,
          _translation: translation,
          _language: language
        };
        db.translations.upsert(data, function (res, err) {
          // Success:

          if (err) {
            reject(err);
          }
          resolve(res);
        });
      });
    };
    obj.getHistory = () => {
      return new Promise((resolve, reject) => {
        db.translations.find().fetch((res, err) => {
          if (err) {
              console.log("NO DATATATATATA")
            reject(err);
          }
          resolve(res);
        });
      });
    };
  });
  return obj;
};

export default HistoryManager;
